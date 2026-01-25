export interface ArtistLink {
  label: string;
  url: string;
}

export interface Artist {
  name: string;
  profile: string;
  slot: string;
  day: string;
  stage: string;
  links?: ArtistLink[];
  tag?: string;
}

export interface Stage {
  name: string;
  capacity: string;
  spec: string;
  vibe: string;
}

export interface Playlist {
  label: string;
  url: string;
}

export interface Download {
  label: string;
  url: string;
}

export interface LineupData {
  headliners: Artist[];
  artists: Artist[];
  stages: Stage[];
  playlists: Playlist[];
  downloads: Download[];
}

export const LINEUP_DATA: LineupData = {
  headliners: [
    {
      name: 'Nova Flux',
      profile: 'Progressive Psy mit Live-Visuals und analogen Synth-Peaks.',
      slot: 'Fr · 23:30',
      day: 'Freitag',
      stage: 'Parallelwelten',
      tag: 'Exclusive',
      links: [
        { label: 'Soundcloud', url: 'https://soundcloud.com' },
        { label: 'Instagram', url: 'https://instagram.com' },
      ],
    },
    {
      name: 'Lumen & Tide (Live)',
      profile: 'Organic Downtempo, Flöten, modulare Pads und ein Sonnenaufgangs-Moment.',
      slot: 'Sa · 05:00',
      day: 'Samstag',
      stage: 'Garden Groove',
      links: [
        { label: 'Spotify', url: 'https://open.spotify.com' },
        { label: 'YouTube', url: 'https://youtube.com' },
      ],
    },
    {
      name: 'Riot Daughters',
      profile: 'Industrial Techno + EBM mit fetter Laser-Show.',
      slot: 'Sa · 01:00',
      day: 'Samstag',
      stage: 'Wurzelwerk',
      links: [
        { label: 'Soundcloud', url: 'https://soundcloud.com' },
        { label: 'Instagram', url: 'https://instagram.com' },
      ],
    },
  ],
  artists: [
    {
      name: 'Kora Nova',
      profile: 'Deep House mit Afro-Elementen und handgemachten Percussions.',
      slot: 'Fr · 19:30',
      day: 'Freitag',
      stage: 'Garden Groove',
      links: [{ label: 'Spotify', url: 'https://open.spotify.com' }],
    },
    {
      name: 'Marvin Phase',
      profile: 'Raw Techno, lange Builds, kein Schnickschnack.',
      slot: 'Fr · 02:00',
      day: 'Freitag',
      stage: 'Wurzelwerk',
      links: [{ label: 'Soundcloud', url: 'https://soundcloud.com' }],
    },
    {
      name: 'Cielo Norte',
      profile: 'Psytrance mit Tribal Vocals, liebt lange Sunrise-Sets.',
      slot: 'Sa · 07:00',
      day: 'Samstag',
      stage: 'Parallelwelten',
      links: [{ label: 'Instagram', url: 'https://instagram.com' }],
    },
    {
      name: 'Frida Flux',
      profile: 'Leftfield Electronica und Breaks für den New Comer Floor.',
      slot: 'Sa · 16:00',
      day: 'Samstag',
      stage: 'New Comer Floor',
      links: [{ label: 'Bandcamp', url: 'https://bandcamp.com' }],
    },
    {
      name: 'North Sea Disco Club',
      profile: 'Disco & Italo, viel Glitzer, viel Liebe.',
      slot: 'So · 14:00',
      day: 'Sonntag',
      stage: 'Garden Groove',
      links: [{ label: 'Spotify', url: 'https://open.spotify.com' }],
    },
    {
      name: 'Aero & Bloom',
      profile: 'Live Ambient für den Anflug – perfekt zum Ankommen.',
      slot: 'Fr · 12:30',
      day: 'Freitag',
      stage: 'Parallelwelten',
      links: [{ label: 'YouTube', url: 'https://youtube.com' }],
    },
  ],
  stages: [
    {
      name: 'Parallelwelten',
      capacity: '5.000 Pax',
      spec: '360° LED-Portal, Haze-Tunnel, Pyro & Laser-Bridges',
      vibe: 'Immersive Storytelling-Sets, Reisen zwischen den Welten',
    },
    {
      name: 'Wurzelwerk',
      capacity: '2.000 Pax',
      spec: 'Funktion-One Stack im Kreis, Low-Light, Laser durch Baumkronen',
      vibe: 'Erdig, hypnotisch, tiefer Techno bis Morgengrauen',
    },
    {
      name: 'Garden Groove',
      capacity: '1.200 Pax',
      spec: 'Holzdeck, Pflanzen, Hängematten, Surround Sound',
      vibe: 'House, Disco und sonnige Nachmittage',
    },
    {
      name: 'New Comer Floor',
      capacity: '600 Pax',
      spec: 'Offene Holzbühne, Club-PA und 180° Visual-Panel',
      vibe: 'Frische Talente, Debüts und viel Nähe zum Floor',
    },
  ],
  playlists: [
    { label: 'Official Warm-Up', url: 'https://open.spotify.com/playlist/37i9dQZF1DX0BcQWzuB7ZO' },
    {
      label: 'Wurzelwerk Pulse',
      url: 'https://open.spotify.com/playlist/37i9dQZF1DX6J5NfMJS675',
    },
    {
      label: 'Garden Groove Sunday',
      url: 'https://open.spotify.com/playlist/37i9dQZF1DX4pUKG1kS0Ac',
    },
  ],
  downloads: [
    { label: 'Stageplan (PDF) – Platzhalter', url: 'https://example.com/bachblyten-stageplan.pdf' },
  ],
};
