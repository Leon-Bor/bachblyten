#!/usr/bin/env node
/**
 * Fetches latest @bachblyten Instagram posts via the public web_profile_info endpoint
 * and stores them in src/assets/instagram-feed.json for the Angular app.
 */
const { writeFile } = require('node:fs/promises');
const path = require('node:path');
const { mkdir, access } = require('node:fs/promises');
const fs = require('node:fs');

const USERNAME = 'bachblyten';
const OUTPUT = path.resolve(__dirname, '../public/instagram-feed.json');
const IMAGE_DIR = path.resolve(__dirname, '../public/instagram');
const ENDPOINT = `https://www.instagram.com/api/v1/users/web_profile_info/?username=${USERNAME}`;

async function fetchPosts() {
  const res = await fetch(ENDPOINT, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122 Safari/537.36',
      'x-ig-app-id': '936619743392459',
      Referer: 'https://www.instagram.com/',
      Accept: '*/*',
      'Accept-Language': 'de-DE,de;q=0.9,en;q=0.8',
    },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Instagram request failed: ${res.status} ${res.statusText}\n${body}`);
  }

  const json = await res.json();
  const edges = json?.data?.user?.edge_owner_to_timeline_media?.edges;

  if (!Array.isArray(edges)) {
    throw new Error('Unexpected Instagram response shape');
  }

  return edges.slice(0, 8).map((edge) => {
    const node = edge.node;
    return {
      shortcode: node.shortcode,
      caption: node?.edge_media_to_caption?.edges?.[0]?.node?.text || '',
      timestamp: node?.taken_at_timestamp || null,
      display_url: node?.display_url || node?.thumbnail_src || '',
      thumbnail_src: node?.thumbnail_src || node?.display_url || '',
      is_video: Boolean(node?.is_video),
      permalink: `https://www.instagram.com/p/${node.shortcode}/`,
    };
  });
}

async function ensureDir(dir) {
  try {
    await access(dir);
  } catch {
    await mkdir(dir, { recursive: true });
  }
}

async function downloadImage(url, targetPath) {
  const res = await fetch(url, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122 Safari/537.36',
      Referer: 'https://www.instagram.com/',
    },
  });

  if (!res.ok) {
    throw new Error(`Image download failed: ${res.status} ${res.statusText}`);
  }

  const stream = res.body;
  if (!stream) {
    throw new Error('No response body');
  }

  const readable = stream.getReader ? require('node:stream').Readable.fromWeb(stream) : stream;

  await new Promise((resolve, reject) => {
    const file = fs.createWriteStream(targetPath);
    readable.pipe(file);
    readable.on('error', reject);
    file.on('finish', resolve);
  });
}

async function main() {
  try {
    const posts = await fetchPosts();
    await ensureDir(IMAGE_DIR);

    const processed = [];

    for (const post of posts) {
      const filename = `${post.shortcode}.jpg`;
      const localPath = path.join(IMAGE_DIR, filename);

      try {
        await downloadImage(post.thumbnail_src || post.display_url, localPath);
        processed.push({
          ...post,
          image: `instagram/${filename}`,
        });
      } catch (err) {
        console.error(`Image for ${post.shortcode} failed: ${err.message}`);
        processed.push({
          ...post,
          image: post.thumbnail_src || post.display_url,
        });
      }
    }

    const payload = {
      fetchedAt: new Date().toISOString(),
      handle: '@bachblyten',
      posts: processed,
    };

    await writeFile(OUTPUT, JSON.stringify(payload, null, 2), 'utf8');
    console.log(`Saved ${processed.length} posts to ${OUTPUT}`);
  } catch (err) {
    console.error(err.message);
    process.exitCode = 1;
  }
}

main();
