import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface FAQCategory {
  id: string;
  label: string;
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory['id'];
}

const FAQ_CATEGORIES: FAQCategory[] = [
  { id: 'arrival', label: 'Anreise & Check-in' },
  { id: 'tickets', label: 'Tickets & Zugang' },
  { id: 'camping', label: 'Camping & Infrastruktur' },
  { id: 'rules', label: 'Regeln & Safety' },
  { id: 'service', label: 'Service vor Ort' },
  { id: 'general', label: 'Allgemeines' },
];

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  protected readonly categories = FAQ_CATEGORIES;

  protected readonly faqs: FAQItem[] = [
    {
      id: 'arrival-early',
      question: 'Kann ich schon am Donnerstag anreisen?',
      answer:
        'Das Camping- und Festivalgelände öffnet am Freitag um 10:00 Uhr. Bitte denkt an Auto und Wohnmobil Pässe.',
      category: 'arrival',
    },
    {
      id: 'arrival-dropoff',
      question: 'Nur jemanden absetzen oder Anhänger droppen?',
      answer:
        'Kurz anhalten zum Abladen ist möglich. Wir behalten den Ausweis als Pfand (150 €) bis zur Ausfahrt – spart Chaos, schützt alle.',
      category: 'arrival',
    },
    {
      id: 'service-payment',
      question: 'Wie zahle ich vor Ort?',
      answer: 'Mit Karte oder Bargeld. Es gibt vor Ort keine Geldautomaten.',
      category: 'service',
    },
    // {
    //   id: 'arrival-bus',
    //   question: 'Bus-Shuttle?',
    //   answer:
    //     'Sunny Trips fährt aus Hamburg, Lübeck und Kiel direkt zum Eingang. 2026 kein zusätzliches Festival-Shuttle – plant eure Rückfahrt rechtzeitig.',
    //   category: 'arrival',
    // },
    {
      id: 'camping-rules',
      question: 'Camping-Regeln',
      answer:
        'Camping mit PKW, Camper oder Anhänger auf ausgewiesenen Flächen. Zelten ohne Auto bleibt kostenlos. Lautstärke bitte nachts runter und auf minimum halten.',
      category: 'camping',
    },
    {
      id: 'camping-sanitary',
      question: 'Duschen & Sanitär',
      answer:
        'Auf dem Campingplatz stehen kostenlose Dixi-Toiletten bereit. Auf dem Festivalgelände bieten wir zusätzlich saubere, regelmäßig gereinigte Toiletten gegen einen kleinen Beitrag. Warme Duschen gibt es als kostenpflichtige Flatrate, weil es vor Ort keine feste Wasserinfrastruktur gibt.',
      category: 'camping',
    },
    {
      id: 'rules-first-aid',
      question: 'Erste Hilfe',
      answer:
        'Eine deutlich ausgeschilderte Erste-Hilfe-Station ist 24/7 besetzt. Notfall? Sprecht unser Team oder die Security direkt an.',
      category: 'service',
    },
    {
      id: 'rules-respectful-conduct',
      question: 'Respektvoller Umgang & Kleidung',
      answer:
        'Auf dem Festivalgelände wünschen wir uns einen respektvollen Umgang miteinander. Dazu gehört auch, dass wir auf vollständige Nacktheit verzichten. So stellen wir sicher, dass sich alle Menschen unabhängig von Alter, Herkunft oder persönlichem Empfinden gleichermaßen wohl und sicher fühlen können.',
      category: 'rules',
    },
    {
      id: 'rules-awareness',
      question: 'Gibt es eine Awareness- und Safe Area?',
      answer:
        'Ja. Das Awareness-Team ist auf dem Gelände unterwegs und an markierten Points erreichbar. Zusätzlich gibt es eine ausgeschilderte Safe Area in Nähe des Haupttresens, zu der du jederzeit begleitet werden kannst – dort bekommst du Ruhe, Support und falls nötig weitere Hilfe.',
      category: 'service',
    },
    {
      id: 'service-lost-and-found',
      question: 'Fundsachen',
      answer:
        'Während des Festivals am Haupttresen abgeben/abholen. Danach per Mail an info@bachblyten-festival.com mit Beschreibung und Fundort melden.',
      category: 'service',
    },
    {
      id: 'rules-glass-ban',
      question: 'Getränke & Glasverbot',
      answer:
        'Eigenbedarf auf dem Campingplatz erlaubt, aber ausschließlich in PET. Glasflaschen, Gläser und andere Glasbehälter sind auf dem gesamten Gelände strikt verboten – schützt Füße & Floors.',
      category: 'rules',
    },
    {
      id: 'rules-liability',
      question: 'Haftung',
      answer:
        'Aufenthalt auf eigene Gefahr. Bitte respektiert Gelände, Technik und Deko. Für selbst verursachte Schäden haftet ihr selbst.',
      category: 'rules',
    },
    {
      id: 'rules-kids-animals',
      question: 'Kinder & Tiere',
      answer:
        'Das Festival ist 18+. Tiere sind auf Gelände und Camping nicht erlaubt – zu laut, zu voll, zu heiß für Vierbeiner. Bitte lasst eure Haustiere zuhause.',
      category: 'rules',
    },
    {
      id: 'camping-rain',
      question: 'Bei Regen?',
      answer:
        'Wir feiern weiter. Große Zelte, überdachte Floors und stabile Wege helfen. Packt Regenzeug und feste Schuhe ein.',
      category: 'camping',
    },
    {
      id: 'camping-accessible',
      question: 'Gibt es einen ausgewiesenen Campingbereich für Gehbehinderte?',
      answer:
        'Ja. Wir richten einen separaten Bereich nahe am Eingang ein, damit mobilitätseingeschränkte Gäste das Festivalgelände schneller erreichen. Dort ist es etwas lauter (Nähe zu Wegen/Floors) – bringt also Gehörschutz mit. Wenn ihr Unterstützung bei der Anreise braucht, meldet euch vorab per Mail, damit wir euch einplanen können.',
      category: 'camping',
    },
    {
      id: 'arrival-bus-shuttle',
      question: 'Shuttlebus',
      answer:
        'Wir klären aktuell die Shuttle-Optionen mit dem Anbieter. Ziel ist ein Angebot u. a. ab Hamburg und Kiel (ggf. weitere Städte). Sobald die Details feststehen, geben wir hier und auf den Kanälen Bescheid.',
      category: 'arrival',
    },
    {
      id: 'service-sofa-deposit',
      question: 'Sofa-Pfand',
      answer:
        'Für Sofas oder sperriges Mobiliar nehmen wir 50 € Pfand. Gebt es sauber zurück, bekommt ihr alles wieder.',
      category: 'service',
    },
    {
      id: 'camping-power',
      question: 'Strom & Generatoren',
      answer:
        'Eigene Generatoren/Stromerzeuger jeglicher Größe sind verboten. Größere Soundanlagen mitbringen ist nicht gestattet.',
      category: 'camping',
    },
    {
      id: 'tickets-resale',
      question: 'Tickets weitergeben',
      answer:
        'Nutze ausschließlich die offizielle Paylogic-Resale-Plattform. Private Weitergabe auf dem Gelände ist nicht gestattet.',
      category: 'tickets',
    },
    {
      id: 'tickets-lost',
      question: 'Ticket verloren?',
      answer:
        'Über Paylogic kannst du dein Ticket erneut zusenden lassen. Vor Ort hilft dir das Helpdesk am Haupttresen.',
      category: 'tickets',
    },
    {
      id: 'tickets-box-office',
      question: 'Gibt es eine Abendkasse?',
      answer:
        'Ja, es wird eine Abendkasse geben. Wir empfehlen, dein Ticket im Vorverkauf zu sichern, da du so Geld und eventuelle Wartezeit sparst.',
      category: 'tickets',
    },
    {
      id: 'tickets-day-pass',
      question: 'Gibt es Tagestickets?',
      answer: 'Ja. Preise kündigen wir zeitnah über Website und Socials an.',
      category: 'tickets',
    },
    {
      id: 'tickets-schwesing',
      question: 'Schwesing Ticket (Anwohner*innen)?',
      answer:
        'Ja. Für Einwohner*innen von Schwesing gibt es an der Abendkasse ein stark vergünstigtes Kontingent. Bringt bitte einen Adressnachweis (z. B. Ausweis oder Meldebestätigung) mit.',
      category: 'tickets',
    },
    {
      id: 'rules-safe-space',
      question: 'Toleranz & Safe Spaces',
      answer:
        'Wir stehen für Offenheit, Respekt und Gleichberechtigung. Alle sind willkommen (u. a. FLINTA*, LGBTQ+, non-binär). Null Toleranz für Diskriminierung, Homophobie, Transfeindlichkeit, Rassismus, Sexismus sowie rechts­extreme oder menschenverachtende Ideologien. Meldet Vorfälle direkt beim Awareness- oder Security-Team.',
      category: 'rules',
    },
    {
      id: 'rules-filming',
      question: 'Darf ich auf dem Gelände filmen?',
      answer:
        'Handyaufnahmen sind erlaubt, solange ihr keine Personen ohne deren Einverständnis filmt. Unser Promo-Team nimmt Clips für Aftermovie und Socials auf – wenn ihr nicht im Bild sein wollt, sprecht das Team bitte direkt an.',
      category: 'rules',
    },
    {
      id: 'service-water',
      question: 'Trinkwasser',
      answer:
        'Kostenlose Wasserstationen auf dem Gelände – bitte Bring-Your-Own-PET. Kein Glas, keine Metallkanister.',
      category: 'service',
    },
    {
      id: 'rules-deposit',
      question: 'Müllpfand',
      answer:
        'Denk an die 10 € Müllpfand. Den Pfand bekommst du gegen einen gut gefüllten Müllbeutel zurück. Danke fürs Mitmachen.',
      category: 'arrival',
    },
    {
      id: 'general-hours',
      question: 'Wann öffnen Gelände und Floors?',
      answer:
        'Check-in ab Freitag 10:00 Uhr, Floors laufen bis Sonntag abend. Abreise bis Montag 12:00 Uhr.',
      category: 'general',
    },
    {
      id: 'general-timetable',
      question: 'Wo finde ich den Timetable?',
      answer:
        'Wir veröffentlichen den Timetable direkt vor Ort auf dem Festivalgelände. Ihr bekommt beim Check-in einen gedruckten Guide mit allen wichtigen Infos.',
      category: 'general',
    },
    {
      id: 'general-accessibility',
      question: 'Ist das Gelände barrierearm?',
      answer:
        'Weite, ebene Wege auf dem Rollfeld, rollstuhlgerechte Sanitäranlagen und markierte Viewing-Areas an den Hauptfloors. Melde dich beim Awareness-Team, wenn du Unterstützung brauchst.',
      category: 'general',
    },
    {
      id: 'general-whats-new',
      question: 'Was ist neu 2026?',
      answer:
        'Ein neues Team baut auf 15 Jahren Bachblyten auf: gleicher Ort, neuer Spirit – klar in der Haltung, reduziert im Auftritt und offen für Entwicklung.',
      category: 'general',
    },
    {
      id: 'general-knospe-stage',
      question: 'Was ist die Knospe Stage?',
      answer:
        'Unsere vierte Bühne ist als Newcomer-Stage gedacht: erste große Floors und Anlagen für junge Artists und DJs, Fokus auf Potenzial und Mut statt Reichweite.',
      category: 'general',
    },
    {
      id: 'general-sound',
      question: 'Welche Musik erwartet mich?',
      answer:
        'Techno bildet die Basis und verzweigt sich in Indie Dance, Psy Techno, modernen Tech House, Bouncy Techno und ausgewählte Hardtechno-Momente. Ergänzt wird das Spektrum durch Drum and Bass, Psytrance, Goa und Proggy – tanzbar, hypnotisch, mit Raum für Kontraste und lange Nächte.',
      category: 'general',
    },
    {
      id: 'camping-sustainability',
      question: 'Wie geht ihr mit Nachhaltigkeit um?',
      answer:
        'Nachhaltigkeit ist ein Prozess: Wir verbessern Schritt für Schritt. Aktuell gibt es Dixi-Toiletten auf dem Campingplatz, saubere Toiletten auf dem Gelände gegen Beitrag und kostenpflichtige Duschen per Flatrate, weil es keine feste Wasserinfrastruktur gibt. Für kommende Jahre arbeiten wir an besseren, nachhaltigeren Lösungen.',
      category: 'camping',
    },
  ];

  protected readonly groupedFaqs = this.categories.map((category) => ({
    ...category,
    items: this.faqs.filter((faq) => faq.category === category.id),
  }));

  protected openQuestions = signal<Set<string>>(new Set());

  protected toggleQuestion(id: string): void {
    const next = new Set(this.openQuestions());
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    this.openQuestions.set(next);
  }

  protected isOpen(id: string): boolean {
    return this.openQuestions().has(id);
  }

  protected trackByFaq = (_: number, item: FAQItem): string => item.id;
}
