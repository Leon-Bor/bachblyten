export interface ArtistLink {
  label: 'Instagram' | 'Soundcloud';
  url: string;
}

export interface Artist {
  name: string;
  image: string;
  profile: string;
  time: Date;
  stage: 'Wurzelwerk' | 'Parallelwelten' | 'Schlupfbau' | 'Bassblyten';
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
  artists: Artist[];
  stages: Stage[];
  playlists: Playlist[];
  downloads: Download[];
}

export const LINEUP_DATA: LineupData = {
  artists: [
    {
      name: 'Roman Adam',
      image: '/artists/roman-adam-bachblyten-festival-line-up-2026.jpg',
      profile: 'DJ I Producer I Peak-Time Techno Alula Tunes • Senso • Set About From Hamburg',
      time: new Date('2024-07-26T19:30:00'),
      stage: 'Wurzelwerk',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/roman_adam_ofc/?hl=de' },
        {
          label: 'Soundcloud',
          url: 'https://l.instagram.com/?u=https%3A%2F%2Fon.soundcloud.com%2FKKfPAaGfuy9IdNomrz&e=AT3YJgfzwqCfp59vo4D9-4_0bzGypstVyjgN_8rWOd74tyrS70lT29Sm3AObz-Vkx2xOidYq25FUrp54H_Y5mGKEPMgo2Pq9o60bJEN35DxtHw3Q',
        },
      ],
    },
    {
      name: 'Maurice Mino',
      image: '/artists/maurice-mino-bachblyten-festival-line-up-2026.jpg',
      profile:
        'Der gebürtige Berliner Maurice Mino entdeckte seine Leidenschaft für elektronische Musik im jungen Alter von zwölf Jahren. Seine Wurzeln liegen in verschiedenen Genres der elektronischen Musik und zogen ihn mit kräftigen Basslines und vollen Sounds in ihren Bann.',
      time: new Date('2024-07-27T01:00:00'),
      stage: 'Wurzelwerk',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/mauricemino/?hl=de' },

        { label: 'Soundcloud', url: 'https://soundcloud.com/mauricemino' },
      ],
    },

    {
      name: 'Shabiki',
      image: '/artists/shabiki-bachblyten-festival-line-up-2026.jpg',
      profile: '𝚂𝙷𝙰𝙱𝙸𝙺𝙸 – In Swahili, “Msichana na shabiki” means “girl with the fan.” 🪭',
      time: new Date('2024-07-27T01:00:00'),
      stage: 'Wurzelwerk',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/shabiki.music/?hl=de' },

        { label: 'Soundcloud', url: 'https://soundcloud.com/shabiki_music' },
      ],
    },

    // gizmo-bachblyten-festival-line-up-2026.jpg
    {
      name: 'Gizmo',
      image: '/artists/gizmo-bachblyten-festival-line-up-2026.jpg',
      profile:
        'Gizmo ist ein aufstrebender DJ und Produzent aus Berlin, der für seine energiegeladenen Sets und innovativen Produktionen bekannt ist. Mit einer Leidenschaft für elektronische Musik hat Gizmo sich schnell einen Namen in der Szene gemacht und begeistert das Publikum mit seinen mitreißenden Beats und kreativen Klanglandschaften.',
      time: new Date('2024-07-26T22:00:00'),
      stage: 'Wurzelwerk',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/gizmo.berlin/?hl=de' },

        { label: 'Soundcloud', url: 'https://soundcloud.com/gizmoberlin' },
      ],
    },
    // saltz-bachblyten-festival-line-up-2026
    {
      name: 'Saltz',
      image: '/artists/saltz-bachblyten-festival-line-up-2026.jpg',
      profile: 'Köln - Techhouse / Basshouse / Indie Dance.',
      time: new Date('2024-07-27T15:00:00'),
      stage: 'Wurzelwerk',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/saltz_music/?hl=de' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/saltzmusic' },
      ],
    },
    // softdrive-bachblyten-festival-line-up-2026
    {
      name: 'Softdrive',
      image: '/artists/softdrive-bachblyten-festival-line-up-2026.jpg',
      profile: `Oliver and Bennet started working together in 2020 and merged
into the non-divisible duo „Softdrive“ ever since. Oliver´s
production skills which he gained over the last 10 years, combined
with Bennet´s fresh ideas and different approach on music making
brings up a mix of Hard House, New Wave and Trance.
During Late-night studio sessions listening to old records,
sampling, and twisting music from all kinds of genres Softdrive has
developed their unique signature sound.`,

      time: new Date('2024-07-26T18:00:00'),
      stage: 'Schlupfbau',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/s0ftdrive/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/softdrive' },
      ],
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
      name: 'Schlupfbau',
      capacity: '1.200 Pax',
      spec: 'Holzdeck, Pflanzen, Hängematten, Surround Sound',
      vibe: 'House, Disco und sonnige Nachmittage',
    },
    {
      name: 'Bassblyten',
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
      label: 'Schlupfbau Sunday',
      url: 'https://open.spotify.com/playlist/37i9dQZF1DX4pUKG1kS0Ac',
    },
  ],
  downloads: [
    { label: 'Stageplan (PDF) – Platzhalter', url: 'https://example.com/bachblyten-stageplan.pdf' },
  ],
};
