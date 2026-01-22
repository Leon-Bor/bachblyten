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
      title: 'Vorverkauf 2026',
      description:
        'Der Vorverkauf startet am 01. Februar 2026. Sichere dir eines der limitierten Blindtickets oder Early Bird Tickets für 89 Euro bzw. 99 Euro.',
      cta: 'Jetzt informieren',
      link: '/tickets',
    },
    {
      title: 'Vier Bühnen, ein Gefühl',
      description:
        'Neben drei etablierten Floors erwartet dich eine eigene Newcomer Bühne. Von Techno, House, Trance und Goa über Proggy, Hard Techno und Bouncy Trance bis Drum and Bass ist alles vertreten.',
      cta: 'Lineup entdecken',
      link: '/line-up',
    },
    {
      title: 'Festivalregeln',
      description:
        'Hier findest du alle Regeln rund um das Bachblyten Festival. Bitte lies sie dir aufmerksam durch, damit wir gemeinsam ein sicheres und respektvolles Festival erleben können.',
      cta: 'Regeln lesen',
      link: '/faq',
    },
  ];

  protected timeline: TimelineDrop[] = [
    {
      title: 'Einlass & Camping öffnen',
      detail: 'Ankommen, andocken, Zelt aufschlagen',
      time: 'Fr · 10:00',
    },
    {
      title: 'Sunset Opening',
      detail: 'Local Heroes, Vibes hochfahren, Farben leuchten',
      time: 'Fr · 18:00',
    },
    { title: 'Main Stage Peak', detail: 'Headliner-Show mit Full Visuals', time: 'Sa · 23:30' },
    { title: 'Groove Sundae', detail: 'Lazy Disco & Brunch auf dem Rollfeld', time: 'So · 12:00' },
  ];
}
