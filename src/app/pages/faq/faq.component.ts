import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface FAQItem {
  question: string;
  answer: string;
  tag?: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  protected faqs: FAQItem[] = [
    {
      question: 'Kann ich schon am Donnerstag anreisen?',
      answer: 'Das Camping- und Festivalgelände öffnet am Freitag um 10:00 Uhr. Mit Early-Camper-Add-on darfst du ab Donnerstag 18:00 Uhr rauf aufs Rollfeld.'
    },
    {
      question: 'Nur jemanden absetzen oder Anhänger droppen?',
      answer: 'Kurz anhalten zum Abladen ist möglich. Wir behalten den Ausweis als Pfand (150 €) bis zur Ausfahrt – spart Chaos, schützt alle.'
    },
    {
      question: 'Wie zahle ich vor Ort?',
      answer: 'Bargeld gegen 5 € Fee am Haupttresen. Kartenzahlung fast überall, Cashless-Armband auf Wunsch. Kein eigener Geldautomat auf dem Gelände.'
    },
    {
      question: 'Bus-Shuttle?',
      answer: 'Sunny Trips fährt aus Hamburg, Lübeck und Kiel direkt zum Eingang. 2026 kein zusätzliches Festival-Shuttle – plant eure Rückfahrt rechtzeitig.'
    },
    {
      question: 'Camping-Regeln',
      answer: 'Camping mit PKW, Camper oder Anhänger auf ausgewiesenen Flächen. Zelten ohne Auto bleibt kostenlos. Lautstärke bitte nachts runter in den Quiet-Zones.'
    },
    {
      question: 'Duschen & Sanitär',
      answer: 'Dixi-Toiletten sind kostenfrei, feste Sanitärs und warme Duschen gibt es als Upgrade. Wir reinigen regelmäßig – helft mit, sauber zu bleiben.'
    },
    {
      question: 'Erste Hilfe',
      answer: 'Eine deutlich ausgeschilderte Erste-Hilfe-Station ist 24/7 besetzt. Notfall? Sprecht unser Team oder die Security direkt an.'
    },
    {
      question: 'Fundsachen',
      answer: 'Während des Festivals am Haupttresen abgeben/abholen. Danach per Mail an info@bachblyten-festival.com mit Beschreibung und Fundort melden.'
    },
    {
      question: 'Getränke & Glasverbot',
      answer: 'Eigenbedarf auf dem Campingplatz erlaubt, aber ausschließlich in PET. Auf dem gesamten Gelände gilt striktes Glasverbot – schützt Füße & Floors.'
    },
    {
      question: 'Grillen & offenes Feuer',
      answer: 'Offenes Feuer ist untersagt. Grillen nur zu festen Zeiten in den ausgewiesenen Zonen – bitte Funkenflug vermeiden.'
    },
    {
      question: 'Haftung',
      answer: 'Aufenthalt auf eigene Gefahr. Bitte respektiert Gelände, Technik und Deko. Für selbst verursachte Schäden haftet ihr selbst.'
    },
    {
      question: 'Kinder & Tiere',
      answer: 'Das Festival ist 18+. Tiere bleiben bitte zuhause – zu laut, zu voll, zu heiß für Vierbeiner.'
    },
    {
      question: 'Bei Regen?',
      answer: 'Wir feiern weiter. Große Zelte, überdachte Floors und stabile Wege helfen. Packt Regenzeug und feste Schuhe ein.'
    },
    {
      question: 'Shuttle on site',
      answer: 'Kein internes Shuttle 2026. Plant Wege ein, folgt der Beschilderung. Mobility Help Points gibt es bei Bedarf.'
    },
    {
      question: 'Sofa-Pfand',
      answer: 'Für Sofas oder sperriges Mobiliar nehmen wir 50 € Pfand. Gebt es sauber zurück, bekommt ihr alles wieder.'
    },
    {
      question: 'Strom & Generatoren',
      answer: 'Eigene Stromerzeuger und große Soundsysteme sind verboten. Es gibt ausgewiesene Ladestationen und Powerbank-Points.'
    },
    {
      question: 'Gibt es Tagestickets?',
      answer: 'Klassische Tagestickets bieten wir nicht. Alternativen: 2-Day-Pass oder Groove Sundae für Sonntag.'
    },
    {
      question: 'Tickets weitergeben',
      answer: 'Nutze ausschließlich die offizielle Paylogic-Resale-Plattform. Private Weitergabe auf dem Gelände ist nicht gestattet.'
    },
    {
      question: 'Ticket verloren?',
      answer: 'Über Paylogic kannst du dein Ticket erneut zusenden lassen. Vor Ort hilft dir das Helpdesk am Haupttresen.'
    },
    {
      question: 'Toleranz & Safe Spaces',
      answer: 'Null Toleranz für Diskriminierung, Rassismus oder sonstige -ismen. Sprecht uns an, wir reagieren sofort.'
    },
    {
      question: 'Trinkwasser',
      answer: 'Kostenlose Wasserstationen auf dem Gelände – bitte Bring-Your-Own-PET. Kein Glas, keine Metallkanister.'
    },
    {
      question: 'Umwelt-Pfand',
      answer: '5 € Umweltpfand, den ihr gegen einen gefüllten Müllbeutel zurückerhaltet. Danke fürs Mitmachen.'
    }
  ];
}
