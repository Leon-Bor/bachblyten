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
    // total-balance-bachblyten-festival-line-up-2026.webp
    {
      name: 'Total Balance',
      image: 'artists/total-balance-bachblyten-festival-line-up-2026.webp',
      profile: `Total Balance ist das Musikprojekt von Moritz Schneider, das 2019 ins Leben gerufen wurde. Seitdem steht sein Sound für emotionale Tiefe, musikalische Vielfalt und eine Reise, die Kopf und Herz gleichermaßen erreicht.

Zwischen melodischen Momenten und minimalistisch-progressiven Elementen schafft er Klangwelten, die sowohl zu Hause zum Abschalten als auch auf dem Dancefloor zum Abheben einladen. Seine Musik will nicht nur antreiben, sondern Gefühle wecken und die Fantasie stimulieren.`,
      time: new Date('2024-07-26T18:30:00'),
      stage: 'Parallelwald',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/totalbalancemusic/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/totalbalancemusik' },
      ],
    },
    // isy-bachblyten-festival-line-up-2026.webp
    {
      name: 'ISY',
      image: 'artists/isy-bachblyten-festival-line-up-2026.webp',
      profile: `Isy lebt und atmet Musik – und genau das spürt man ab der ersten Minute, sobald sie an den Decks steht. Mit purer Leidenschaft und einem offenen Herzen bringt sie progressiven Trance und Psytrance auf den Dancefloor.

Ihre Sets sind facettenreich, energiegeladen und voller Emotionen. Mal treibend, mal verspielt, aber immer ehrlich und mit Gefühl. Ganz nach ihrem Motto: #followmyheartandpressplay 💫`,
      time: new Date('2024-07-26T23:00:00'),
      stage: 'Parallelwald',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/isy_music.hh/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/isy_musichh' },
      ],
    },
    // chrizzlix-bachblyten-festival-line-up-2026.webp
    {
      name: 'Chrizzlix',
      image: 'artists/chrizzlix-bachblyten-festival-line-up-2026.webp',
      profile: `Chrizzlix bringt seinen ganz eigenen Sound aus Hamburg mit zum Bachblyten Festival 🌍

Mit Auftritten auf Festivals wie Fusion, Indian Spirit oder Psychedelic Circus und Gigs von Kanada über Goa bis nach Südafrika und Ägypten hat er seine Musik längst international getragen.

Musikalisch bewegt er sich zwischen Psy- und Progressive Trance, kraftvoll, detailreich und mit klarer Handschrift. Releases auf Labels wie Spin Twist, Blue Tunes, Nutek Records und natürlich Sun Department sprechen für sich.`,
      time: new Date('2024-07-26T22:30:00'),
      stage: 'Parallelwald',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/chrizzlix/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/chrizzlix' },
      ],
    },
    // naturalize-bachblyten-festival-line-up-2026.webp
    {
      name: 'Naturalize',
      image: 'artists/naturalize-bachblyten-festival-line-up-2026.webp',
      profile: `Der dänische Artist ist seit vielen Jahren fester Bestandteil der Psytrance-Szene und bringt eine Erfahrung mit, die man auf dem Dancefloor sofort spürt.

Er stand bereits auf großen Bühnen wie dem Indian Spirit Festival und weiß genau, wie man eine Crowd mitnimmt, aufbaut und gemeinsam durch die Nacht trägt. Sein Sound ist kraftvoll, progressiv und gleichzeitig präzise – keine Spielerei, sondern klarer Fokus auf Energie und Flow.`,
      time: new Date('2024-07-26T20:00:00'),
      stage: 'Parallelwald',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/naturalize_music/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/naturalizemusic' },
      ],
    },
    // Heartbeat-A-bachblyten-festival-line-up-2026.webp
    {
      name: 'Heartbeat A',
      image: 'artists/heartbeat-a-bachblyten-festival-line-up-2026.webp',
      profile: `Heartbeat-A steht für progressiv-energetischen Psytrance mit klarer Linie und ordentlich Drive. Seit über zehn Jahren ist Psytrance ihre Leidenschaft, und genau das spürt man in ihren Sets.

Als Artist und Produzentin bei iDirty Records bringt sie frische Energie auf den Floor und hat unter anderem bereits auf Festivals wie Nibirii, Rave the Planet und Tarmac gespielt. Seit Ende 2023 veröffentlicht sie regelmäßig eigene Tracks und entwickelt ihren Sound konsequent weiter.`,
      time: new Date('2024-07-26T21:00:00'),
      stage: 'Parallelwald',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/heartbeata_music/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/heartbeat_a' },
      ],
    },
    // roman-adam-bachblyten-festival-line-up-2026.webp
    {
      name: 'Roman Adam',
      image: 'artists/roman-adam-bachblyten-festival-line-up-2026.webp',
      profile: `Seine Sets überzeugen mit treibender Energie, rollenden Grooves und präzise konstruierten Peaks, die jede Nacht zum Erlebnis machen 🎛️ Seine musikalische Reise startete 2013, seitdem hat er sich als Artist und Producer in der elektronischen Szene etabliert und seinen Sound stetig weiterentwickelt – vom groovenden Tech House bis zu markantem, energiegeladenem Techno mit kompromisslosen Build-Ups 🔥`,
      time: new Date('2024-07-26T19:30:00'),
      stage: 'Wurzelwerk',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/roman_adam_ofc/?hl=en' },
        {
          label: 'Soundcloud',
          url: 'https://soundcloud.com/roman-adam-ofc',
        },
      ],
    },
    //novae-bachblyten-festival-line-up-2026.jpg
    {
      name: 'Novae',
      image: 'artists/novae-bachblyten-festival-line-up-2026.jpg',
      profile: `Die Reise in die Welt der elektronischen Musik begann für nøvae 2017 im Norden, führte sie kurze Zeit später nach Leipzig und mitten hinein in die Szene. Dort gründete sie ihr eigenes Techno-Kollektiv, wurde Teil des Brotfabrik Kollektivs und ist inzwischen weit über die lokale Szene hinaus unterwegs, unter anderem mit dem legendären 3000Grad Kollektiv.`,
      time: new Date('2024-07-26T19:00:00'),
      stage: 'Wurzelwerk',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/laranovae/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/n-o-v-a-e' },
      ],
    },
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
      name: 'Maurice Mino',
      image: 'artists/maurice-mino-bachblyten-festival-line-up-2026.jpg',
      profile:
        'Berliner Artist Maurice Mino entdeckte mit 12 seine Liebe zu elektronischer Musik. Kräftige Basslines und volle Sounds, die sofort fesseln.',
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
      profile: 'Producer • Artist - Energetic, forward-driving, vigorous.',
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
      image: 'artists/saltz-bachblyten-festival-line-up-2026.jpg',
      profile:
        'SALTZ steht für treibende Grooves, klare Energie und genau das richtige Gespür für den Dancefloor. Zwischen deepen Vibes und druckvollem Techno baut sie Spannung auf, ohne den Flow zu verlieren.',
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
      image: 'artists/softdrive-bachblyten-festival-line-up-2026.webp',
      profile: `Oliver und Bennet haben sich 2020 zusammengetan und sind seitdem als Softdrive unterwegs – ein Duo, das zwei Perspektiven zu einem klaren, eigenen Sound verschmelzen lässt.
Oliver bringt über zehn Jahre Produktionserfahrung mit, Bennet frische Ideen und einen anderen Blick auf Musik.`,

      time: new Date('2024-07-26T18:00:00'),
      stage: 'Blytenbau',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/s0ftdrive/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/softdrive' },
      ],
    },
    // sabura-bachblyten-festival-line-up-2026
    // {
    //   name: 'Sabura',
    //   image: 'artists/sabura-bachblyten-festival-line-up-2026.jpg',
    //   profile:
    //     'Sabura, Resident im Hamburger Waagenbau, mit Releases auf Tragedie, Legend und Alula Tunes. Technisch stark, spielt er Support und Headliner-Sets mit druckvollem, hypnotischem Techno.',
    //   time: new Date('2024-07-27T17:00:00'),
    //   stage: 'Wurzelwerk',
    //   links: [
    //     { label: 'Instagram', url: 'https://www.instagram.com/sabura.hh/?hl=de' },
    //     { label: 'Soundcloud', url: 'https://soundcloud.com/saburaa' },
    //   ],
    // },
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
        'Hat vor kurzem die Welt hinter den Decks für sich entdeckt. Dreht richtig auf und wird uns mit seinem Hardtechno-Set bedienen.',
      time: new Date('2024-07-27T00:30:00'),
      stage: 'Blytenbau',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/m.a.r.v_i.n/' },
        {
          label: 'Soundcloud',
          url: 'https://soundcloud.com/marv-m-wiese',
        },
      ],
    },
    // puy-bachblyten-festival-line-up-2026
    //     {
    //       name: 'Puy',
    //       image: 'artists/puy-bachblyten-festival-line-up-2026.jpg',
    //       profile: `Puy ist Teil des neuen Kapitels und bringt mit UIUIUI seine eigene frische Veranstaltungsreihe an den Start.
    // Seit über 20 Jahren prägt er die Szene in NMS mit Events, die hängen bleiben.
    // Als Artist bewegt er sich zwischen Peak-Time-Techno und groovigem Tech-House, immer druckvoll, immer tanzbar, immer nach vorne.`,
    //       time: new Date('2024-07-26T21:30:00'),
    //       stage: 'Blytenbau',
    //       links: [],
    //     },
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
