export interface ArtistLink {
  label: 'Instagram' | 'Soundcloud' | 'Youtube';
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
    // peter-groskreutz_bachblyten-festival-line-up-2026.webp
    {
      name: 'Peter Groskreutz',
      image: 'artists/peter-groskreutz_bachblyten-festival-line-up-2026.webp',
      profile: `Peter Groskreutz gehört zu den Menschen, die elektronische Musik nicht einfach nur machen, sondern leben. Schon lange bevor Laptop und Controller zum Standard wurden, experimentierte er mit elektronischen Klängen und entwickelte über die Jahre seinen ganz eigenen Sound.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Wurzelwerk',
      links: [{ label: 'Instagram', url: 'https://www.instagram.com/peter_groskreutz/' }],
    },
    // n2d2-bachblyten-festival-line-up-2026.webp
    {
      name: 'N2D2',
      image: 'artists/n2d2-bachblyten-festival-line-up-2026.webp',
      profile: `In Kiel begann für N2D2 die Reise durch die elektronische Musikwelt. Als Resident im Rathausbunker gehörte er viele Jahre fest zur norddeutschen Szene und sammelte dort die Erfahrungen, die seinen Sound bis heute prägen.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Knospe',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/nzwo.dzwo/' },
        {
          label: 'Soundcloud',
          url: 'https://soundcloud.com/nzwo_dzwo',
        },
      ],
    },
    // Monfred&Dipper-bachblyten-festival-line-up-2026.webp
    {
      name: 'Monfred & Dipper',
      image: 'artists/Monfred&Dipper-bachblyten-festival-line-up-2026.webp',
      profile: `Monfred & Dipper verwandeln seit Jahren Clubs und Festivals in kleine Traumwelten. Als Teil des @fantabulosa_kollektiv schaffen sie Räume, in denen Musik, Leichtigkeit und Gemeinschaft aufeinandertreffen.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Knospe',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/mona.monfred/' },

        { label: 'Instagram', url: 'https://www.instagram.com/denny_dipper/' },
      ],
    },
    // Lenni-Aqua-pinko-bachblyten-festival-line-up-2026.webp
    {
      name: 'Lenni Aqua & Pinko',
      image: 'artists/Lenni-Aqua-pinko-bachblyten-festival-line-up-2026.webp',
      profile: `Lenni Aqua & Pinko servieren keinen gewöhnlichen DJ-Set-Abend, sondern einen kunterbunten Obstsalat aus funky Grooves, saftigen Samples, Mitsingmomenten und jeder Menge guter Laune. Von Speedhouse über Trance bis zu den Hits, bei denen plötzlich alle gleichzeitig mitsingen.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Knospe',
      links: [],
    },
    // Krabat-bachblyten-festival-line-up-2026.webp
    {
      name: 'Krabat',
      image: 'artists/Krabat-bachblyten-festival-line-up-2026.webp',
      profile: `Krabat gehört zu den Menschen, die man einfach gerne um sich hat. Ständiger Wegbegleiter, immer für einen Lacher gut und mindestens genauso versessen auf abgefahrene elektronische Musik wie der Rest unserer Bande. Wenn irgendwo ein verrückter neuer Sound entdeckt wird, stehen die Chancen gut, dass Krabat ihn schon längst auf dem Schirm hat. 😄`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Blytenbau',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/kr4bat_/' },
        {
          label: 'Soundcloud',
          url: 'https://soundcloud.com/krabat_techno',
        },
      ],
    },
    // kmare-bachblyten-festival-line-up-2026.webp
    {
      name: 'KMARE',
      image: 'artists/kmare-bachblyten-festival-line-up-2026.webp',
      profile: `KMARE steht für Roots of Dub, Steppas und Raggajungle, aber vor allem für eine klare Haltung. Musik als verbindende Kraft, Basswellen als Sprache und Dancefloors als Orte, an denen Menschen unabhängig von Herkunft, Geschlecht, Identität oder Weltanschauung zusammenkommen.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Blytenbau',
      links: [{ label: 'Instagram', url: 'https://www.instagram.com/itskmare/' }],
    },
    // Jona-bachblyten-festival-line-up-2026.webp
    {
      name: 'Jona',
      image: 'artists/Jona-bachblyten-festival-line-up-2026.webp',
      profile: `Jona gehört schon seit vielen Jahren zu den Menschen, die unseren Weg begleiten. Einer von denen, die man immer gerne um sich hat, auf dem Festival genauso wie daneben. 🌿`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Wurzelwerk',
      links: [{ label: 'Instagram', url: 'https://www.instagram.com/jona_milan_ro/' }],
    },
    // GroenlandExpress-bachblyten-festival-line-up-2026.webp
    {
      name: 'GRÖNLANDEXPRESS',
      image: 'artists/GroenlandExpress-bachblyten-festival-line-up-2026.webp',
      profile: `Zwei Frauen, ein Sound und jede Menge gute Laune. Der GrönlandExpress bringt treibende Basslines, funky Grooves, Disco-Vibes und natürlich eine ordentliche Portion Glitzer mit zum Bachblyten Festival. ✨🚂`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Knospe',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/groenlandexpress/' },
        {
          label: 'Soundcloud',
          url: 'https://soundcloud.com/groenlandexpress',
        },
      ],
    },
    // dj-bluethe-bachblyten-festival-line-up-2026.webp
    {
      name: 'DJ BLÜTHE',
      image: 'artists/dj-bluethe-bachblyten-festival-line-up-2026.webp',
      profile: `Mit melodischem Deep House und Progressive House bringt DJ BLÜTHE genau die Atmosphäre mit, die man an einem sonnigen Festivaltag erleben möchte. Augen zu, Gesicht in die Sonne, den Gedanken freien Lauf lassen und sich einfach von der Musik tragen lassen.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Knospe',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/djbluethe/' },
        {
          label: 'Soundcloud',
          url: 'https://soundcloud.com/dj-bluethe',
        },
      ],
    },
    // anyz-bachblyten-festival-line-up-2026.webp
    {
      name: 'ANYZ',
      image: 'artists/anyz-bachblyten-festival-line-up-2026.webp',
      profile: `Mit einer Mischung aus treibender Energie, großen Emotionen und einem außergewöhnlichen Gespür für Atmosphäre erschafft sie Sets, die einen nicht einfach nur tanzen lassen, sondern komplett in ihre Welt ziehen. Mal euphorisch, mal melancholisch, mal voller Vorwärtsdrang, aber immer mit einer klaren Handschrift.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Blytenbau',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/anyz_official/' },
        {
          label: 'Soundcloud',
          url: 'https://soundcloud.com/anyz_official',
        },
      ],
    },
    // wewibe-bachblyten-festival-line-up-2026.webp
    {
      name: 'Wewibe',
      image: 'artists/wewibe-bachblyten-festival-line-up-2026.webp',
      profile: `Wewibe aus Kiel steht für Progressive Trance und Psytrance mit Herz, Gefühl und einer ordentlichen Portion Vorwärtsdrang. Entstanden während der besonderen Zeit der Corona-Pandemie im Jahr 2020, entwickelte sich aus einer Idee ein Projekt, das Menschen durch Musik zusammenbringen möchte.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Parallelwald',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/wewibe.music/' },
        {
          label: 'Soundcloud',
          url: 'https://soundcloud.com/wewibeofficial',
        },
      ],
    },
    // tina-tischler-bachblyten-festival-line-up-2026.webp
    {
      name: 'Tina Tischler',
      image: 'artists/tina-tischler-bachblyten-festival-line-up-2026.webp',
      profile: `Nach vielen Jahren als Semangat und unzähligen Nächten zwischen deepen Grooves und druckvollem Techno kam 2023 der Switch: Trance, Baby! Seitdem steht Tina Tischler für euphorische Melodien, uplifting Vibes und genau die Energie, die einen mit offenen Armen auf den Dancefloor zieht.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Knospe',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/tinatischler_semangat_music/' },
        {
          label: 'Soundcloud',
          url: 'https://soundcloud.com/semangat',
        },
      ],
    },
    // Neo-Bach-bachblyten-festival-line-up-2026.webp
    {
      name: 'Neo Bach',
      image: 'artists/Neo-Bach-bachblyten-festival-line-up-2026.webp',
      profile: `Neo Bach hat das Bachblyten Festival einst ins Leben gerufen. Damals noch an einem ganz anderen Ort, lange bevor der Flugplatz in Schwesing zum Zuhause von Bachblyten wurde.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Wurzelwerk',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/_neo.bach_/' },
        {
          label: 'Soundcloud',
          url: 'https://soundcloud.com/neo-bach',
        },
      ],
    },
    // Liquexx-bachblyten-festival-line-up-2026.webp
    {
      name: 'Liquexx',
      image: 'artists/Liquexx-bachblyten-festival-line-up-2026.webp',
      profile: `Liquexx steht für Progressive und Psytrance mit ordentlich Druck nach vorne. Treibende Basslines, psychedelische Elemente und immer wieder diese Momente, in denen plötzlich alles zusammenkommt und der Dancefloor komplett im Flow versinkt.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Parallelwald',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/liquexx_/' },
        {
          label: 'Soundcloud',
          url: 'https://soundcloud.com/liquexx',
        },
      ],
    },
    // laniza-bachblyten-festival-line-up-2026.webp
    {
      name: 'Laniza',
      image: 'artists/laniza-bachblyten-festival-line-up-2026.webp',
      profile: `Laniza bringt genau die Art Progressive und Psytrance mit, die einen vom ersten Moment an mitnimmt. Druckvolle Basslines, fließende Melodien und hypnotische Klangwelten verschmelzen bei ihr zu einer Reise voller Energie, Gefühl und Bewegung.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Parallelwald',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/_la.niza_/' },
        {
          label: 'Soundcloud',
          url: 'https://soundcloud.com/la-niza',
        },
      ],
    },
    // HanUther-bachblyten-festival-line-up-2026.webp
    {
      name: 'HanUther',
      image: 'artists/HanUther-bachblyten-festival-line-up-2026.webp',
      profile: `Wenn Han Uther an den Reglern steht, sollte besser niemand behaupten, nur für ein Stündchen bleiben zu wollen. Aus Kiel kommend serviert er Progressive Sounds mit ordentlich Vorwärtsdrang, melodischen Momenten und genau der richtigen Portion Wahnsinn.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Parallelwald',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/han_uther/' },
        {
          label: 'Soundcloud',
          url: 'https://soundcloud.com/hanuther',
        },
      ],
    },
    // glitzer-bass-bachblyten-festival-line-up-2026.webp
    {
      name: 'Glitzer & Bass',
      image: 'artists/glitzer-bass-bachblyten-festival-line-up-2026.webp',
      profile: `Zwischen Dark Disco und Tech House entstehen treibende Sets voller hypnotischer Melodien, rollender Bässe und genau der richtigen Portion Funkeln. Bekannte Melodien treffen auf kraftvolle Vocals und verwandeln sich in einen Sound, der gleichzeitig zum Tanzen und Träumen einlädt.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Knospe',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/glitzerundbass/' },
        {
          label: 'Soundcloud',
          url: 'https://soundcloud.com/glitzerundbass',
        },
      ],
    },
    // djingis-khan-bachblyten-festival-line-up-2026.webp
    {
      name: 'DJingis Khan',
      image: 'artists/djingis-khan-bachblyten-festival-line-up-2026.webp',
      profile: `DJingis Khan bringt Progressive Psytrance aus Berlin mit zum Bachblyten Festival. Aufgewachsen zwischen den Kulturen und geprägt von der elektronischen Musik der 90er, hat er seinen ganz eigenen Sound gefunden, druckvoll, emotional und immer mit ordentlich Vorwärtsdrang.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Parallelwald',
      links: [{ label: 'Instagram', url: 'https://www.instagram.com/djingis_khan_/' }],
    },
    // dicht&nicht-bachblyten-festival-line-up-2026.webp
    {
      name: 'Dicht & Nicht',
      image: 'artists/dicht&nicht-bachblyten-festival-line-up-2026.webp',
      profile: `Zwischen Druck und Tiefe entsteht ein Sound, der nicht nur nach vorne drängt, sondern auch nach innen führt. Peaktime Driving küsst Psytechno. Dark aber melodisch ist das Motto von Dicht&Nicht.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Knospe',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/dichtundnicht/' },
        {
          label: 'Soundcloud',
          url: 'https://soundcloud.com/user-603354870',
        },
      ],
    },
    // Danaconda-bachblyten-festival-line-up-2026.webp
    {
      name: 'Danaconda',
      image: 'artists/Danaconda-bachblyten-festival-line-up-2026.webp',
      profile: `Danacondas Sets fühlen sich an wie ein spontaner Abstecher auf die glitzerndste Tanzfläche der Stadt. Als Teil der Kölner Diskologne-Crew geht sie mit viel Liebe auf die Suche nach musikalischen Schätzen und haucht bekannten Klassikern mit ihren Retro-Edits neues Leben ein.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Knospe',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/danaconda.dj/' },
        {
          label: 'Soundcloud',
          url: 'https://soundcloud.com/dj_danaconda',
        },
      ],
    },
    // BrettZneider-bachblyten-festival-line-up-2026.webp
    {
      name: 'BrettZneider',
      image: 'artists/BrettZneider-bachblyten-festival-line-up-2026.webp',
      profile: `Musikalisch geht es bei BrettZneider am liebsten nach vorne. Über 130 BPM, treibender Techno und Energie ohne Ende. Langweilig wird es hier garantiert nicht. Stattdessen gibt es Druck, Groove und Vollgas mit einem feinen Gespür für den richtigen Moment.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Blytenbau',
      links: [{ label: 'Instagram', url: 'https://www.instagram.com/brettzneider/' }],
    },
    // ackermann-bachblyten-festival-line-up-2026.webp
    {
      name: 'ACKERMANN',
      image: 'artists/ackermann-bachblyten-festival-line-up-2026.webp',
      profile: `Fürs Bachblyten Festival hat Ackermann allerdings etwas ganz Bestimmtes im Gepäck. Im Blytenbau serviert er euch ein flottes, Bouncy Techno-Set mit ordentlich Schub nach vorne, einer Prise Liebe und natürlich ausreichend Bass untenrum.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Blytenbau',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/ackermann_psy/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/hannemann-the-ackermann' },
      ],
    },
    // paze-bachblyten-festival-line-up-2026.webp
    {
      name: 'PAZE',
      image: 'artists/paze-bachblyten-festival-line-up-2026.webp',
      profile: `Seit 2023 unterwegs und schon jetzt auf internationalen Floors zu hören, merkt man schnell, dass da jemand mit echtem Drive dahinter steckt. Seine Musik entwickelt sich ständig weiter und genau das spürt man auch auf dem Dancefloor.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Blytenbau',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/pazednb/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/sounds2feel-records' },
      ],
    },

    // inductionxbewa-bachblyten-festival-line-up-2026.webp
    {
      name: 'INDUCTION x BEWA',
      image: 'artists/inductionxbewa-bachblyten-festival-line-up-2026.webp',
      profile: `Induction und Bewa aus Kiel gehören zum Nach Vorne Kollektiv und bringen genau den Sound mit, der einfach nach vorne geht.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Blytenbau',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/inductionsounds/' },
        { label: 'Instagram', url: 'https://www.instagram.com/bewa_eq/' },
      ],
    },

    // finndus-bachblyten-festival-line-up-2026.webp
    {
      name: 'FINNDUS',
      image: 'artists/finndus-bachblyten-festival-line-up-2026.webp',
      profile: `Finndus bringt genau den Psytrance-Vibe mit, den man nicht erklären kann, sondern fühlen muss. Aufgewachsen im Norden, längst fester Teil der Szene und jemand, der genau weiß, wie man Dancefloors in Bewegung hält.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Parallelwald',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/finndus_/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/finndus-psy' },
      ],
    },

    // fav.e_bachblyten-festival-line-up-2026.webp
    {
      name: 'FAV:E',
      image: 'artists/fav.e_bachblyten-festival-line-up-2026.webp',
      profile: `FAV:E bringt frischen Wind aus Lübeck mit und steht für Drum and Bass, der einfach keine Pause kennt. Als Teil der Baltic Bass Crew liefert er genau den Sound, der den Floor sofort nach vorne schiebt.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Blytenbau',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/dj.fav.e/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/user-242274915' },
      ],
    },

    // PsyFiction-bachblyten-festival-line-up-2026.webp
    {
      name: 'PsyFiction',
      image: 'artists/PsyFiction-bachblyten-festival-line-up-2026.webp',
      profile: `PsyFiction steht für tiefgehenden Psytrance mit einer klaren Handschrift. Sein Sound ist hypnotisch, treibend und voller Details, die sich erst nach und nach entfalten. Genau diese Mischung macht seine Sets so besonders und zieht einen immer weiter rein.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Parallelwald',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/psyfiction_music/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/psyfiction' },
      ],
    },
    // fttz-bachblyten-festival-line-up-2026.webp
    {
      name: 'FTTZ',
      image: 'artists/fttz-bachblyten-festival-line-up-2026.webp',
      profile: `Mit FTTZ holen wir uns frischen Drum and Bass Sound aus Lübeck zum Bachblyten Festival.
Die Sets gehen direkt nach vorne, schnelle Breaks, druckvolle Basslines und genau die Energie, die einen nicht stillstehen lässt. Ohne viel Schnickschnack, einfach ehrlicher Sound, der den Floor in Bewegung bringt.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Blytenbau',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/fttz.dnb/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/user-36810797-496788976' },
      ],
    },

    // amon.fire-bachblyten-festival-line-up-2026.webp
    {
      name: 'AMON.FIRE',
      image: 'artists/amon.fire-bachblyten-festival-line-up-2026.webp',
      profile: `Der Lübecker DJ und Produzent steht für schnelle, druckvolle Sets zwischen Liquid, Neurofunk und Jump Up. Sein Sound geht direkt nach vorne und bringt jeden Floor in Bewegung, roh, kompromisslos und voller Energie.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Blytenbau',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/amon.fire.dnb/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/beats-by-amonfire' },
      ],
    },

    // jenay-bachblyten-festival-line-up-2026.webp
    {
      name: 'JENAY',
      image: 'artists/jenay-bachblyten-festival-line-up-2026.webp',
      profile: `Mit Jenay holen wir uns eine Energie aufs Bachblyten Festival, die einfach nach vorne will. Ihr Sound ist schnell, direkt und kompromisslos, genau das Richtige für alle, die sich komplett verlieren und einfach mal ausrasten wollen.
`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Blytenbau',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/jenay_technovision/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/jenay_technovision' },
      ],
    },

    // baronessa-bachblyten-festival-line-up-2026.webp
    {
      name: 'BARONESSA',
      image: 'artists/baronessa-bachblyten-festival-line-up-2026.webp',
      profile: `Baronessa bringt einen Sound mit, der Gefühl und Energie verbindet. Geprägt von ihrer musikalischen Reise zwischen Gesang, Gitarre und elektronischer Musik schafft sie Sets, die tragen, aufbauen und einen komplett eintauchen lassen.
`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Wurzelwerk',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/baronessa.music/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/baronessamusic' },
      ],
    },
    // Fab-Massimo-bachblyten-festival-line-up-2026.webp
    {
      name: 'FAB MASSIMO',
      image: 'artists/Fab-Massimo-bachblyten-festival-line-up-2026.webp',
      profile: `Seit vielen Jahren produziert er Musik mit viel Gefühl für Details und genau diesem Gespür für Momente, die hängen bleiben. Seine Tracks verbinden Energie und Emotion auf eine sehr direkte Art, ohne dabei an Tiefe zu verlieren.
`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Wurzelwerk',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/fabmassimo/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/fabmassimo' },
      ],
    },

    // punching-polly-bachblyten-festival-line-up-2026.webp
    {
      name: 'PUNCHIN POLLY',
      image: 'artists/punching-polly-bachblyten-festival-line-up-2026.webp',
      profile: `Punching Polly knallt wie eine Konfettikanone direkt aufs Trommelfell – laut, glitzernd, gnadenlos. Sie spielt mit Charme und Härte, bis der Puls „rumms bumms“ macht und du eigentlich wieder beatmet werden musst.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Wurzelwerk',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/punching_polly/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/punchingpolly' },
      ],
    },

    // urem-bachblyten-festival-line-up-2026.webp
    {
      name: 'UREM',
      image: 'artists/urem-bachblyten-festival-line-up-2026.webp',
      profile: `Hinter seiner entspannten Art steckt ein Sound, der es in sich hat. Verspielte, freche Basslines, emotionale Melodien und immer wieder überraschende Wendungen machen seine Sets zu einer Reise, die hängen bleibt und unter die Haut geht.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Wurzelwerk',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/urem_music/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/urem' },
      ],
    },
    // tophoo-bachblyten-festival-line-up-2026.webp
    {
      name: 'Tophoo',
      image: 'artists/tophoo-bachblyten-festival-line-up-2026.webp',
      profile: `Tophoo bringt treibende Psytrance-Energie mit zum Bachblyten Festival, roh, direkt und voller Bewegung. Sein Sound lebt von druckvollen Basslines, psychedelischen Elementen und genau dem richtigen Gespür für den Moment auf dem Floor.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Parallelwald',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/tophoo_music/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/tophoo' },
      ],
    },
    // federacho-bachblyten-festival-line-up-2026.webp
    {
      name: 'FEDERACHO',
      image: 'artists/federacho-bachblyten-festival-line-up-2026.webp',
      profile: `Federacho ist fester Teil der Parallelwelten Crew und bringt genau die Energie mit, die den Parallelwald lebendig macht 🌲`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Parallelwald',
      links: [{ label: 'Instagram', url: 'https://www.instagram.com/dennis_federacho/' }],
    },
    // fatale-bachblyten-festival-line-up-2026.webp
    {
      name: 'Fatale',
      image: 'artists/fatale-bachblyten-festival-line-up-2026.webp',
      profile: `Fatale kommt aus Flensburg und steht seit zwei Jahren hinter den Decks, geprägt von echter Leidenschaft für Techno und dem Gefühl, das nur ein Dancefloor geben kann.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Blytenbau',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/randale_98/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/fatale_e' },
      ],
    },
    // stryker-bachblyten-festival-line-up-2026.webp
    {
      name: 'Stryker',
      image: 'artists/stryker-bachblyten-festival-line-up-2026.webp',
      profile: `Mit Stryker kommt ein echtes Stück internationale Psytrance-Geschichte zum Bachblyten Festival. Der französische DJ und Producer ist seit vielen Jahren Teil der Szene und bringt über zwei Jahrzehnte Erfahrung aus Clubs und Festivals rund um die Welt mit.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Parallelwald',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/djstryker_official/' },
        { label: 'Youtube', url: 'https://www.youtube.com/channel/UCu4ZAaBUiarVu_brTGEa4ew' },
      ],
    },
    // lampe-bachblyten-festival-line-up-2026.webp
    {
      name: 'Lampé',
      image: 'artists/lampe-bachblyten-festival-line-up-2026.webp',
      profile: `Lampé gehört für uns einfach zum Bachblyten Festival dazu. Seit vielen Jahren unterstützt er uns mit voller Energie, musikalisch hinter den Decks und genauso mit jeder Menge Technik und Support im Hintergrund. Auf ihn ist einfach immer Verlass.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Wurzelwerk',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/lampemusic/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/lampemusic' },
      ],
    },
    // skkin-velvet-bachblyten-festival-line-up-2026.webp
    {
      name: 'Skkin Velvet',
      image: 'artists/skkin-velvet-bachblyten-festival-line-up-2026.webp',
      profile: `Skkin Velvet bringt einen Sound mit, der direkt nach vorne geht – energiegeladen, euphorisch und mit genau dem richtigen Gespür für den Moment auf dem Dancefloor. Zwischen treibenden Trance-Vibes, druckvollen Beats und hypnotischen Passagen entsteht eine Atmosphäre, die einen einfach mitzieht.`,

      time: new Date('2024-07-26T18:00:00'),
      stage: 'Blytenbau',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/skkinvelvet/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/skkinvelvet' },
      ],
    },
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
      image: 'artists/gizmo-bachblyten-festival-line-up-2026.webp',
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
    {
      name: 'Sabura',
      image: 'artists/sabura-bachblyten-festival-line-up-2026.jpg',
      profile:
        'Sabura steht für tiefen, treibenden Sound mit Charakter – hypnotisch, kraftvoll und immer mit Gefühl. Wer ihn schon einmal live erlebt hat, weiß, dass er nicht einfach nur spielt, sondern Räume schafft, die verbinden und mitziehen.',
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
    // WoZa-bachblyten-festival-line-up-2026.webp
    {
      name: 'WoZa',
      image: 'artists/WoZa-bachblyten-festival-line-up-2026.webp',
      profile: `WoZa bringt genau die Art Progressive Psytrance mit, die einen vom ersten Moment an in Bewegung setzt. Treibend, melodisch und mit ordentlich Druck nach vorne, aber immer mit diesem psychedelischen Flow, der einen richtig reinzieht.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Parallelwald',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/woza.official/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/woza_official' },
      ],
    },
    // delaturk-bachblyten-festival-line-up-2026.webp
    {
      name: 'Delaturk',
      image: 'artists/delaturk-bachblyten-festival-line-up-2026.webp',
      profile: `Delaturk bringt genau die Art Progressive Psytrance mit, die wir im Parallelwald lieben. Treibende Grooves, psychedelischer Flow und diese warme, rollende Energie, die einen Stück für Stück tiefer in die Reise zieht.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Parallelwald',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/delaturkmusic/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/delaturk95' },
      ],
    },
    // majandra-bachblyten-festival-line-up-2026.webp
    {
      name: 'Majandra',
      image: 'artists/majandra-bachblyten-festival-line-up-2026.webp',
      profile: `Wenn Majandra hinter den Decks steht, geht es nach vorne. Mit treibendem Peaktime Techno, psychedelischen Elementen und organischem Groove schafft sie genau die Energie, die einen Dancefloor konstant in Bewegung hält.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Knospe',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/majandra_music/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/user-671178180' },
      ],
    },
    // Portamento-bachblyten-festival-line-up-2026.webp
    {
      name: 'Portamento',
      image: 'artists/Portamento-bachblyten-festival-line-up-2026.webp',
      profile: `Chrizzlix und Tophoo kennt ihr bei uns natürlich auch jeweils solo, aber gemeinsam als Portamento entsteht nochmal etwas ganz Eigenes. Hier greifen zwei musikalische Welten perfekt ineinander und entwickeln eine Energie, die nochmal ganz anders nach vorne drückt.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Parallelwald',
      links: [{ label: 'Instagram', url: 'https://www.instagram.com/portamento_music/' }],
    },
    // perky-soul-bachblyten-festival-line-up-2026.webp
    {
      name: 'Perky Soul',
      image: 'artists/perky-soul-bachblyten-festival-line-up-2026.webp',
      profile: `Perky Soul bringt melodischen Progressive Trance aus Hamburg mit zum Bachblyten Festival. Ein Sound voller positiver Energie, rollender Grooves und genau diesen euphorischen Momenten, bei denen man automatisch das Grinsen im Gesicht hat.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Parallelwald',
      links: [{ label: 'Instagram', url: 'https://www.instagram.com/djane_perky_soul_franzi/' }],
    },
    // FloorQuix-bachblyten-festival-line-up-2026.webp
    {
      name: 'FloorQuix',
      image: 'artists/FloorQuix-bachblyten-festival-line-up-2026.webp',
      profile: `FloorQuix bringt frischen Progressive Sound aus Hamburg mit zum Bachblyten Festival. Treibende Offbeat-Grooves, melodische Elemente und genau dieses feine Gespür für Spannung machen seine Sets zu einer Reise, die einen Stück für Stück tiefer reinzieht.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Parallelwald',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/floorquix/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/floorquix' },
      ],
    },
    // schrittmacher-bachblyten-festival-line-up-2026.webp
    {
      name: 'Schrittmacher',
      image: 'artists/schrittmacher-bachblyten-festival-line-up-2026.webp',
      profile: `Wenn jemand seinen Namen lebt, dann wohl Schrittmacher. Seit fast drei Jahrzehnten ist Rouven in der elektronischen Szene unterwegs und hat dabei nicht nur unzählige Dancefloors bewegt, sondern die Szene auf vielen Ebenen aktiv mitgeprägt.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Parallelwald',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/djschrittmacher/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/schrittmacherofficial' },
      ],
    },
    // psyfonic-bachblyten-festival-line-up-2026.webp
    {
      name: 'Psyfonic',
      image: 'artists/psyfonic-bachblyten-festival-line-up-2026.webp',
      profile: `Psyfonic lebt Psytrance nicht nur, er trägt diesen Sound seit vielen Jahren mit voller Leidenschaft in die Szene. Als DJ, Produzent und Mitgründer von Sun Department Records steht er für Musik, die verbindet, antreibt und Menschen auf dem Dancefloor zusammenbringt.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Parallelwald',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/psyfonic.music/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/psyfonic' },
      ],
    },
    // dj-nasendusche-bachblyten-festival-line-up-2026.webp
    {
      name: 'DJ Nasendusche',
      image: 'artists/dj-nasendusche-bachblyten-festival-line-up-2026.webp',
      profile: `Als Teil der High Humidity Crew bringt DJ Nasendusche housige Grooves mit, die einfach immer funktionieren. Egal ob zum entspannten Ankommen, für den perfekten Sonnenuntergang oder wenn der Dancefloor schon längst in Bewegung ist. Gute House-Musik kennt eben keine Uhrzeit.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Knospe',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/dj_nasendusche/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/dj_nasendusche' },
      ],
    },
    // equibox-bachblyten-festival-line-up-2026.webp
    {
      name: 'EQUiBOX',
      image: 'artists/equibox-bachblyten-festival-line-up-2026.webp',
      profile: `Mit ihrer Liebe zu Progressive Psytrance haben die beiden über die Jahre einen ganz eigenen Stil entwickelt. Druckvoll, melodisch und voller Energie. Genau die Mischung, die einen den Alltag vergessen lässt und den Dancefloor in Bewegung hält.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Parallelwald',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/dropbox_dj/' },
        { label: 'Instagram', url: 'https://www.instagram.com/equidies/' },
      ],
    },
    // effex-bachblyten-festival-line-up-2026.webp
    {
      name: 'Effex',
      image: 'artists/effex-bachblyten-festival-line-up-2026.webp',
      profile: `Für viele ist Effex längst kein Unbekannter mehr. Bereits 2015 stand er beim Bachblyten Festival hinter den Decks und sorgte mit seinem Drum and Bass Set auf dem legendären Ghettoblaster zur Primetime für einen dieser Momente, die bis heute in Erinnerung geblieben sind. Das Intro von damals? Sorgt auch heute noch regelmäßig für Gänsehaut. 🔊`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Blytenbau',
      links: [{ label: 'Instagram', url: 'https://www.instagram.com/effex_dj/' }],
    },
    // m4ry-bachblyten-festival-line-up-2026.webp
    {
      name: 'M4RY',
      image: 'artists/m4ry-bachblyten-festival-line-up-2026.webp',
      profile: `Aus Berlin kommend hat M4RY einen Sound entwickelt, den man sofort wiedererkennt. Druckvoll, funky und voller Groove. House, Funk und Techno verschmelzen zu einer ganz eigenen Mischung, die einfach unfassbar Spaß macht und einen automatisch in Bewegung bringt.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Wurzelwerk',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/m4rym4rym4ry/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/m4rym4rym4ry' },
      ],
    },
    // matzenatur-bachblyten-festival-line-up-2026.webp
    {
      name: 'Matzenatur',
      image: 'artists/matzenatur-bachblyten-festival-line-up-2026.webp',
      profile: `Wenn es im Norden um Drum and Bass geht, ist die Wahrscheinlichkeit ziemlich groß, dass Matzenatur nicht weit entfernt ist. Seit Jahrzehnten begleitet er die Szene mit ganz viel Herzblut und gehört für viele längst zum festen Inventar.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Blytenbau',
      links: [{ label: 'Instagram', url: 'https://www.instagram.com/matze_nature/' }],
    },
    // naxos-bachblyten-festival-line-up-2026.webp
    {
      name: 'Naxos',
      image: 'artists/naxos-bachblyten-festival-line-up-2026.webp',
      profile: `Naxos gehört zu den Artists, die zeigen, dass Leidenschaft wichtiger ist als die Anzahl der Jahre hinter den Decks. Mit einem feinen Gespür für den richtigen Moment verbindet Naxos Progressive Trance, Dirty Prog, Offbeat und Psyprog zu einem Sound, der direkt in die Beine geht.
`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Parallelwald',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/naxos__music/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/naxosmusic23' },
      ],
    },
    // ninja-bachblyten-festival-line-up-2026.webp
    {
      name: 'Ninja',
      image: 'artists/ninja-bachblyten-festival-line-up-2026.webp',
      profile: `NINJA steht für Energie, die sich Stück für Stück aufbaut und genau im richtigen Moment explodiert. Zwischen Peak Time Techno, Hardtechno und Harddance entstehen Sets, die mitreißen, überraschen und von Anfang bis Ende Spannung erzeugen.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Knospe',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/einfach_ninja/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/ninab-568928376' },
      ],
    },
    // optical-mind-gate-bachblyten-festival-line-up-2026.webp
    {
      name: 'Optical Mind Gate',
      image: 'artists/optical-mind-gate-bachblyten-festival-line-up-2026.webp',
      profile: `Mit Optical Mind Gate schlägt Denny Wildenhain ein neues Kapitel auf. Nach vielen Jahren im Progressive Psytrance geht der Blick jetzt noch tiefer in die psychedelische Welt und genau das hört man.
`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Parallelwald',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/optical.mind.gate/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/optical_mind_gate' },
      ],
    },
    // sophie-cut-bachblyten-festival-line-up-2026.webp
    {
      name: 'Sophie Cut',
      image: 'artists/sophie-cut-bachblyten-festival-line-up-2026.webp',
      profile: `Sophie Cut hat ihren Sound im minimalistischen Techno gefunden. Mit sphärischen Klangwelten, feinen Variationen und genau den richtigen Build Ups entstehen Sets, die sich weniger wie eine Aneinanderreihung von Tracks anfühlen, sondern eher wie eine Reise durch einen Film.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Blytenbau',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/sophiecuttt/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/sophie-cut' },
      ],
    },
    // irie-scenario-bachblyten-festival-line-up-2026.webp
    {
      name: 'Irie Scenario',
      image: 'artists/irie-scenario-bachblyten-festival-line-up-2026.webp',
      profile: `Mit Irie Scenario holen wir uns feinsten Drum and Bass und Jungle Sound aus Lübeck zum Bachblyten Festival. Rollende Breakbeats, warme Basslines und genau die rohe, ehrliche Energie, die vom ersten Track an mitnimmt, mal tief und atmosphärisch, mal komplett nach vorne, aber immer mit feinem Gespür für Flow und Timing.`,
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Blytenbau',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/irie.scenario/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/irie-scenario' },
      ],
    },
    // Knurz_Thumbnail.webp
    {
      name: 'Knurz',
      image: 'artists/Knurz_Thumbnail.webp',
      profile:
        'Bei KNURZ gleicht kein Set dem anderen. Der Kieler bringt ein komplettes Modular Live-Set mit aufs Bachblyten Festival und erschafft seine Musik direkt im Moment. Keine Playlist, kein festes Arrangement, sondern pures Live-Feeling.',
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Wurzelwerk',
      links: [{ label: 'Instagram', url: 'https://www.instagram.com/peterknurz/' }],
    },
    // Hallert_Thumbnail.webp
    {
      name: 'Hallert',
      image: 'artists/Hallert_Thumbnail.webp',
      profile:
        'Musikalisch folgt Hallert keiner festen Schublade. Eigene Produktionen treffen auf Lieblingsstücke anderer Artists, treibende Grooves auf satte Basslines. Was aber nie fehlen darf, sind diese kleinen Momente, die einen packen. Eine Melodie, ein Vocal oder irgendein catchy Element, das plötzlich hängen bleibt und aus einem guten Track einen besonderen macht.',
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Wurzelwerk',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/hallert_ofc/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/dashallert' },
      ],
    },
    // Acapla_Thumbnail.webp
    {
      name: 'Acapla',
      image: 'artists/Acapla_Thumbnail.webp',
      profile:
        'Der Sound schleicht sich nicht an. Er packt einen. Tief rollende Basslines, atmosphärische Flächen und genau diese Momente, in denen plötzlich alles um einen herum verschwindet und nur noch die Musik zählt. Druckvoll, hypnotisch und mit einer Energie, die lange nachhallt.',
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Knospe',
      links: [{ label: 'Instagram', url: 'https://www.instagram.com/psyshowbob_dennsen/' }],
    },
    // Clemo_Thumbnail.webp
    {
      name: 'Clemo',
      image: 'artists/Clemo_Thumbnail.webp',
      profile:
        'Ebenso Teil der High Humidity Crew, erschafft Clemo Klangwelten, in denen man sich ganz wunderbar verlieren kann. Psychedelische Elemente treffen auf melodische Tiefe, sphärische Flächen auf rollende Grooves. Kein Sound, der nach vorne drängt, sondern einer, der einen ganz von selbst mitnimmt.',
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Knospe',
      links: [],
    },
    // Hannahtronica_Thumbnail.webp
    {
      name: 'Hannahtronica',
      image: 'artists/Hannahtronica_Thumbnail.webp',
      profile:
        'Wer Hannahtronica schon einmal erlebt hat, weiß, dass hier nicht einfach Tracks aneinandergereiht werden. Mit viel Liebe zum Detail und einem feinen Gespür für den richtigen Moment entstehen Sets, die einen ganz entspannt auf den Dancefloor ziehen und dort auch erstmal nicht wieder loslassen. Auch mit eigenen Formaten wie "Round and Round" bringt Hannahtronica Menschen über Musik zusammen.',
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Knospe',
      links: [{ label: 'Instagram', url: 'https://www.instagram.com/hannahtronica/' }],
    },
    // Stephenson_Thumbnail.webp
    {
      name: 'Stephensøn',
      image: 'artists/Stephenson_Thumbnail.webp',
      profile:
        'Stephensøn gehört schon seit vielen Jahren zu den Menschen, die Bachblyten begleiten. Als enger Freund und Teil des neuen Teams bringt er nicht nur hinter den Kulissen gute Laune mit, sondern auch hinter den Decks. 🌿',
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Wurzelwerk',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/stephensonsound/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/stephensonsound' },
      ],
    },
    // Stoltec_Thumbnail.webp
    {
      name: 'Stoltec',
      image: 'artists/Stoltec_Thumbnail.webp',
      profile:
        'Stoltec gehört seit vielen Jahren zu den Menschen, auf die man sich einfach verlassen kann. Bei unzähligen Veranstaltungen mit angepackt und inzwischen fester Teil des neuen Bachblyten Teams. 🌿',
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Wurzelwerk',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/stoltec_techno/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/stoltec' },
      ],
    },
    // Le-Puy_Thumbnail.webp
    {
      name: 'Le Puy',
      image: 'artists/Le-Puy_Thumbnail.webp',
      profile:
        'Musikalisch ist Le Puy unglaublich vielseitig. Für das Bachblyten Festival war die Entscheidung aber schnell gefallen: Es darf ein bisschen zackiger werden. Mit genau der richtigen Portion Druck und jeder Menge Spaß wird im Blytenbau ordentlich nach vorne gespielt. 🔥',
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Blytenbau',
      links: [{ label: 'Instagram', url: 'https://www.instagram.com/le_puy/' }],
    },
    // Haqu-bachblyten-festival-line-up-2026.jpg
    {
      name: 'Haqu',
      image: 'artists/Haqu-bachblyten-festival-line-up-2026.jpg',
      profile:
        'Seit 2019 ist HAQU Teil der Kieler Musikszene. Was auf kleinen privaten Veranstaltungen begann, führte ihn mit der Zeit in die Clubs und schließlich dorthin, wo er musikalisch zuhause ist, in die Goa Welt.',
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Parallelwald',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/official.haqu/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/official_phaema' },
      ],
    },
    // Frank-Leder-bachblyten-festival-line-up-2026.jpg
    {
      name: 'Frank Leder',
      image: 'artists/Frank-Leder-bachblyten-festival-line-up-2026.jpg',
      profile:
        'Frank Leder steht für Techno mit ordentlich Vorwärtsdrang. Fans beschreiben seine Sets gerne als „Lokomotive“ – energiegeladen, abwechslungsreich und immer mit dem richtigen Gespür für den Moment. Zwischen progressiven, melodischen und treibenden Sounds baut Frank Spannung auf, die sich Stück für Stück entfaltet und den Dancefloor mitnimmt.',
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Knospe',
      links: [{ label: 'Instagram', url: 'https://www.instagram.com/frank_leder_music/' }],
    },
    // Klangstrom-bachblyten-festival-line-up-2026.jpg
    {
      name: 'Klangstrom',
      image: 'artists/Klangstrom-bachblyten-festival-line-up-2026.jpg',
      profile: '',
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Knospe',
      links: [
        { label: 'Instagram', url: '' },
        { label: 'Soundcloud', url: '' },
      ],
    },
    // Lars-Block-bachblyten-festival-line-up-2026.jpg
    {
      name: 'Lars Block',
      image: 'artists/Lars-Block-bachblyten-festival-line-up-2026.jpg',
      profile: '',
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Knospe',
      links: [
        { label: 'Instagram', url: '' },
        { label: 'Soundcloud', url: '' },
      ],
    },
    // Solvind-bachblyten-festival-line-up-2026.jpg
    {
      name: 'Solvind',
      image: 'artists/Solvind-bachblyten-festival-line-up-2026.jpg',
      profile: '',
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Wurzelwerk',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/solvind.fl/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/soelvind' },
      ],
    },
    // Timo-bachblyten-festival-line-up-2026.jpg
    {
      name: 'Timo',
      image: 'artists/Timo-bachblyten-festival-line-up-2026.jpg',
      profile: '',
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Knospe',
      links: [
        { label: 'Instagram', url: '' },
        { label: 'Soundcloud', url: '' },
      ],
    },
    // empty-silence-bachblyten-festival-line-up-2026.jpg
    {
      name: 'Empty Silence',
      image: 'artists/empty-silence-bachblyten-festival-line-up-2026.jpg',
      profile: '',
      time: new Date('2024-07-26T20:30:00'),
      stage: 'Knospe',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/emptysilencemusic/' },
        { label: 'Soundcloud', url: 'https://soundcloud.com/emptysilenceofc' },
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
      vibe: 'Bühne für gute Musik abseits des Festival-Mainstreams. Grooviger Techno bis Peak-Time-Bretter, gespielt von Stick und Platte, direkt, ehrlich und mit voller Energie.',
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
