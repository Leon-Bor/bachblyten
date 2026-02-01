import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NewsletterModalService } from '../../components/newsletter-modal/newsletter-modal.service';
import { SparkButtonComponent } from '../../components/spark-button/spark-button.component';

interface Highlight {
  title: string;
  description: string;
  cta: string;
  link: string;
}

interface TimelineDrop {
  title: string;
  detail: string;
  time: string;
}

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink, SparkButtonComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  protected readonly newsletter = inject(NewsletterModalService);

  protected highlights: Highlight[] = [
    {
      title: 'Neubeginn und Haltung',
      description:
        'Bachblyten bekommt neues Leben. Ein neues Team, neue Energie und der Mut, Dinge anders zu denken. Wir gestalten neu, klar und bewusst, mit Blick nach vorn und Raum für Entwicklung.',
      cta: 'Mehr erfahren',
      link: '/about',
    },
    {
      title: 'Vier Bühnen, ein Gefühl',
      description:
        'Musikalisch öffnet sich Bachblyten in viele Richtungen elektronischer Kultur. Indie Dance, Psy Techno, moderner Tech House, Bouncy und Hardtechno treffen auf Drum and Bass, Psytrance, Goa und Proggy. Vielfalt als Haltung, nicht als Trend.',
      cta: 'Lineup entdecken',
      link: '/line-up',
    },
    {
      title: 'Bassblyten Stage und Offenheit',
      description:
        'Mit der Bassblyten Stage schaffen wir Platz für Stimmen von morgen. Eine Bühne für Newcomer, für erste Festivalmomente und echte Chancen. Offen für alle Menschen, unabhängig von Identität, Herkunft oder Ausdruck, auf wie hinter den Decks.',
      cta: 'Regeln lesen',
      link: '/faq',
    },
  ];

  protected timeline: TimelineDrop[] = [
    {
      title: 'Einlass & Camping öffnen',
      detail: 'Ankommen, Platz finden, Zelt aufbauen, Bier aufmachen.',
      time: 'Fr · 10:00',
    },
    {
      title: 'Sunset Opening',
      detail: 'Warm tanzen, Drinks genießen, Bässe & Lichter starten.',
      time: 'Fr · 16:00',
    },
    {
      title: 'Entspannungsphase',
      detail: 'Yoga-Workshops, kreative Pausen, Zeit zum Durchatmen und Auftanken.',
      time: 'Sa · 10:00',
    },
    {
      title: 'Erneutes Aufblyhen',
      detail: 'Feierstäbe ausfahren, bunte Outfits anziehen, Spaß haben.',
      time: 'Sa · 18:00',
    },
    {
      title: 'Festivalende',
      detail: 'Letzte Beats, Abschiedsrunden, Festival klingt aus.',
      time: 'So · 18:00',
    },
    {
      title: 'Campingplatz schließt',
      detail: 'Camping abbauen, aufräumen und Gelände (spätestens) verlassen.',
      time: 'Mo · 12:00',
    },
  ];
}
