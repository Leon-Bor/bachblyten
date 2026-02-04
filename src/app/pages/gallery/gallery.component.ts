import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PhotoCollageComponent } from '../../components/photo-collage/photo-collage.component';

interface Post {
  handle: string;
  caption: string;
  url: string;
  image: string;
  ago: string;
}

interface InstagramFeed {
  fetchedAt: string;
  handle: string;
  posts: Array<{
    caption: string;
    timestamp: number | null;
    image: string;
    display_url: string;
    thumbnail_src: string;
    is_video: boolean;
    permalink: string;
  }>;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, HttpClientModule, PhotoCollageComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements OnInit {
  protected posts: Post[] = [];
  protected loading = true;
  protected errorMessage = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  private loadPosts(): void {
    this.http.get<InstagramFeed>('instagram-feed.json').subscribe({
      next: (feed) => {
        this.posts = this.mapPosts(feed);
        this.loading = false;
      },
      error: (err) => {
        console.error('Instagram feed failed', err);
        this.errorMessage = 'Feed konnte nicht geladen werden. Wir zeigen einen Auszug.';
        this.posts = this.getFallbackPosts();
        this.loading = false;
      },
    });
  }

  private mapPosts(feed: InstagramFeed): Post[] {
    const nowSeconds = Date.now() / 1000;
    return (feed.posts || []).map((post) => ({
      handle: feed.handle ?? '@bachblyten',
      caption: this.truncate(post.caption),
      url: post.permalink,
      image: post.image || post.thumbnail_src || post.display_url,
      ago: this.formatAgo(nowSeconds - (post.timestamp ?? nowSeconds)),
    }));
  }

  private formatAgo(diffSeconds: number): string {
    if (diffSeconds < 0) {
      return 'gerade eben';
    }
    const minutes = Math.floor(diffSeconds / 60);
    const hours = Math.floor(diffSeconds / 3600);
    const days = Math.floor(diffSeconds / 86400);
    const weeks = Math.floor(diffSeconds / 604800);
    const months = Math.floor(diffSeconds / 2592000);

    if (minutes < 1) return 'gerade eben';
    if (minutes === 1) return 'vor 1 Minute';
    if (minutes < 60) return `vor ${minutes} Minuten`;
    if (hours === 1) return 'vor 1 Stunde';
    if (hours < 24) return `vor ${hours} Stunden`;
    if (days === 1) return 'vor 1 Tag';
    if (days < 7) return `vor ${days} Tagen`;
    if (weeks === 1) return 'vor 1 Woche';
    if (weeks < 5) return `vor ${weeks} Wochen`;
    if (months === 1) return 'vor 1 Monat';
    return `vor ${months} Monaten`;
  }

  private truncate(text: string, max = 160): string {
    if (!text) return '';
    return text.length > max ? `${text.slice(0, max - 1)}…` : text;
  }

  private getFallbackPosts(): Post[] {
    return [];
  }
}
