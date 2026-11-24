import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NewsletterModalService } from '../../components/newsletter-modal/newsletter-modal.service';
import { PhotoCollageComponent } from '../../components/photo-collage/photo-collage.component';
import { TicketCtaDirective } from '../../shared/ticket-cta.directive';

interface UpcomingEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  tags: string[];
  flyer?: string;
  ticketUrl?: string;
  ticketLabel?: string;
}

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink, PhotoCollageComponent, TicketCtaDirective],
  templateUrl: './landing.component.html',
  styleUrls: ['../festival-2026/festival-2026.component.scss', './landing.component.scss'],
})
export class LandingComponent {
  protected readonly newsletter = inject(NewsletterModalService);

  // Neue Events einfach hier ergänzen, Reihenfolge = Anzeige-Reihenfolge.
  protected readonly events: UpcomingEvent[] = [
    {
      id: 'silvester-sause-2026',
      title: 'Silvester Sause',
      date: 'Do · 31.12.2026',
      location: 'Pumpe Kiel',
      description:
        'Bachblyten Festival präsentiert: Wir feiern ins neue Jahr – zwei Floors, Techno & House.',
      tags: ['Zwei Floors', 'Techno', 'House'],
      flyer: 'events/silvester-sause-2026.webp',
      ticketUrl: 'https://alphaevents.tech/shop/silvester-sause',
      ticketLabel: 'Tickets sichern',
    },
    {
      id: 'summer-opening-2027',
      title: 'Summer Opening',
      date: 'Pfingstsonntag · 16.05.2027',
      location: 'Nordmarksportfeld, Kiel',
      description:
        'Open Air auf dem Nordmarksportfeld – wir bringen den Bachblyten Geist für einen besonderen Auftakt in den Sommer nach Kiel. Wie immer umsonst und draußen. Line-up und Infos folgen.',
      tags: ['Eintritt frei', 'Open Air', 'Pfingsten', 'Kiel'],
    },
  ];
}
