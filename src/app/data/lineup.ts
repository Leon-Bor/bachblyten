export interface ArtistLink {
  label: 'Instagram' | 'Soundcloud';
  url: string;
}

export interface Artist {
  name: string;
  image: string;
  profile: string;
  time: Date;
  stage: 'Wurzelwerk' | 'Parallelwald' | 'Blytenbau' | 'Knospe';
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
    // hallert-bachblyten-festival-line-up-2026
    // {
    //   name: 'Hallert',
    //   image: 'artists/hallert-bachblyten-festival-line-up-2026.jpg',
    //   profile:
    //     'Seit 2013 in elektronischen Sounds zuhause: Hallert aus Norddeutschland liebt es, eigene Produktionen auf Festivals zu spielen – tanzbare, kraftvolle Beats mit melodischem Drive.',
    //   time: new Date('2024-07-26T20:30:00'),
    //   stage: 'Wurzelwerk',
    //   links: [
    //     { label: 'Instagram', url: 'https://www.instagram.com/hallert_ofc/' },
    //     { label: 'Soundcloud', url: 'https://soundcloud.com/dashallert' },
    //   ],
    // },
    {
      name: 'Roman Adam',
      image: 'artists/roman-adam-bachblyten-festival-line-up-2026.jpg',
      profile: 'DJ I Producer I Peak-Time Techno Alula Tunes • Senso • Set About From Hamburg',
      time: new Date('2024-07-26T19:30:00'),
      stage: 'Wurzelwerk',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/roman_adam_ofc/?hl=de' },
        {
          label: 'Soundcloud',
          url: 'https://soundcloud.com/roman-adam-ofc?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        },
      ],
    },
    {
      name: 'Maurice Mino',
      image: 'artists/maurice-mino-bachblyten-festival-line-up-2026.jpg',
      profile:
        'Berliner DJ Maurice Mino entdeckte mit 12 seine Liebe zu elektronischer Musik. Kräftige Basslines und volle Sounds, die sofort fesseln.',
      time: new Date('2024-07-27T01:00:00'),
      stage: 'Wurzelwerk',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/mauricemino/?hl=de' },

        { label: 'Soundcloud', url: 'https://soundcloud.com/mauricemino' },
      ],
    },

    {
      name: 'Shabiki',
      image: 'artists/shabiki-bachblyten-festival-line-up-2026.jpg',
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
      image: 'artists/gizmo-bachblyten-festival-line-up-2026.jpg',
      profile: 'Producer • DJ - Energetic, forward-driving, vigorous.',
      time: new Date('2024-07-26T22:00:00'),
      stage: 'Wurzelwerk',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/gizmo.berlin/?hl=de' },

        { label: 'Soundcloud', url: 'https://soundcloud.com/gizmoberlin' },
      ],
    },
    // saltz-bachblyten-festival-line-up-2026
    // {
    //   name: 'Saltz',
    //   image: 'artists/saltz-bachblyten-festival-line-up-2026.jpg',
    //   profile: 'Köln - Techhouse / Basshouse / Indie Dance.',
    //   time: new Date('2024-07-27T15:00:00'),
    //   stage: 'Wurzelwerk',
    //   links: [
    //     { label: 'Instagram', url: 'https://www.instagram.com/saltz_music/?hl=de' },
    //     { label: 'Soundcloud', url: 'https://soundcloud.com/saltzmusic' },
    //   ],
    // },
    // softdrive-bachblyten-festival-line-up-2026
    // {
    //   name: 'Softdrive',
    //   image: 'artists/softdrive-bachblyten-festival-line-up-2026.jpg',
    //   profile:
    //     'Softdrive ist das Duo Oliver & Bennet (seit 2020). Ihr Mix aus Hard House, New Wave und Trance verbindet Produktionsroutine mit frischen Ideen und bringt einen unverwechselbaren, treibenden Sound.',

    //   time: new Date('2024-07-26T18:00:00'),
    //   stage: 'Blytenbau',
    //   links: [
    //     { label: 'Instagram', url: 'https://www.instagram.com/s0ftdrive/' },
    //     { label: 'Soundcloud', url: 'https://soundcloud.com/softdrive' },
    //   ],
    // },
    // sabura-bachblyten-festival-line-up-2026
    {
      name: 'Sabura',
      image: 'artists/sabura-bachblyten-festival-line-up-2026.jpg',
      profile:
        'Sabura, Resident im Hamburger Waagenbau, mit Releases auf Tragedie, Legend und Alula Tunes. Technisch stark, spielt er Support und Headliner-Sets mit druckvollem, hypnotischem Techno.',
      time: new Date('2024-07-27T17:00:00'),
      stage: 'Wurzelwerk',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/sabura.hh/?hl=de' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/saburaa' },
      ],
    },
    // dlusion-bachblyten-festival-line-up-2026
    {
      name: 'dLusion',
      image: 'artists/dlusion-bachblyten-festival-line-up-2026.jpg',
      profile:
        'Mit einem ausgeprägten Gespür für melodische Progressionen und energiegeladene Rhythmen, schafft dLusion eine mitreißende Fusion aus den verschiedenen Trance-Genres. Von treibenden Basslines bis hin zu spirituellen Vocal-Elementen verleiht er seinem Sound eine vielseitige Dimension, die die Tanzfläche zum Beben bringt.',
      time: new Date('2024-07-26T23:30:00'),
      stage: 'Parallelwald',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/dlusion.official/?hl=de' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/dlusion_official' },
      ],
    },
    // lisa-cropp-bachblyten-festival-line-up-2026
    {
      name: 'Lisa Cropp',
      image: 'artists/lisa-cropp-bachblyten-festival-line-up-2026.jpg',
      profile:
        'As her music is connected with her travels, Lisa creates in her sets and productions a mental journey from Micro House, through Latin House, Minimal, Deep Techno and Techno.',
      time: new Date('2024-07-27T16:00:00'),
      stage: 'Knospe',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/lisa.cropp/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/lisacropp' },
      ],
    },
    // marv-bachblyten-festival-line-up-2026.jpg
    {
      name: 'Marv',
      image: 'artists/marv-bachblyten-festival-line-up-2026.jpg',
      profile:
        'Hat vor kurzem die Welt hinter den Decks für sich entdeckt. Dreht richtig auch und wird uns mit seiem Hardtechno Set bedienen.',
      time: new Date('2024-07-27T00:30:00'),
      stage: 'Blytenbau',
      links: [{ label: 'Instagram', url: 'https://www.instagram.com/m.a.r.v_i.n/' }],
    },
    // puy-bachblyten-festival-line-up-2026
    {
      name: 'Puy',
      image: 'artists/puy-bachblyten-festival-line-up-2026.jpg',
      profile: '',
      time: new Date('2024-07-26T21:30:00'),
      stage: 'Blytenbau',
      links: [],
    },
    // rauschhaus-bachblyten-festival-line-up-2026
    {
      name: 'Rauschhaus',
      image: 'artists/rauschhaus-bachblyten-festival-line-up-2026.jpg',
      profile: 'Dj and Producer from Kiel / Germany.',
      time: new Date('2024-07-27T02:00:00'),
      stage: 'Wurzelwerk',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/rauschhausmusic/?hl=de' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/Rauschhaus' },
      ],
    },
  ],
  stages: [
    {
      name: 'Parallelwald',
      capacity: '5.000 Pax',
      spec: '360° LED-Portal, Haze-Tunnel, Pyro & Laser-Bridges',
      vibe: 'Psychedelic Trance und Proggy in Reinform. Hypnotisch, treibend, verspielt, Goa von A bis Z, irgendwo zwischen Realität und Rausch.',
    },
    {
      name: 'Wurzelwerk',
      capacity: '2.000 Pax',
      spec: 'Funktion-One Stack im Kreis, Low-Light, Laser durch Baumkronen',
      vibe: 'Techno in all seinen tiefen Facetten. Indie Dance, Melodic Techno, viel Groove, viel Druck, viel Wumms und diese Momente, bei denen man nur noch „Ohaaa!“ denkt.',
    },
    {
      name: 'Blytenbau',
      capacity: '1.200 Pax',
      spec: 'Overhead-PA, warme Lichter, gemütliche Atmosphäre',
      vibe: 'Kleiner Zappelkäfig mit ordentlich Bewegung. Von groovigem Techno über härtere Kanten bis zu ausgewählten Drum-and-Bass-Parts, roh, wild und unberechenbar.',
    },
    {
      name: 'Knospe',
      capacity: '600 Pax',
      spec: 'Offene Holzbühne, Club-PA und 180° Visual-Panel',
      vibe: 'Der neue Floor für Newcomer. Grooviger Techno bis Peak-Time-Bretter, gespielt von Stick und Platte, direkt, ehrlich und mit voller Energie.',
    },
  ],
  playlists: [
    // { label: 'Official Warm-Up', url: 'https://open.spotify.com/playlist/37i9dQZF1DX0BcQWzuB7ZO' },
    // {
    //   label: 'Wurzelwerk Pulse',
    //   url: 'https://open.spotify.com/playlist/37i9dQZF1DX6J5NfMJS675',
    // },
    // {
    //   label: 'Blytenbau Sunday',
    //   url: 'https://open.spotify.com/playlist/37i9dQZF1DX4pUKG1kS0Ac',
    // },
  ],
  downloads: [
    { label: 'Stageplan (PDF) – Platzhalter', url: 'https://example.com/bachblyten-stageplan.pdf' },
  ],
};
