import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Highlight {
  title: string;
  description: string;
}

interface TimelineDrop {
  title: string;
  detail: string;
  time: string;
}

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  protected highlights: Highlight[] = [
    {
      title: 'Blyten-Feeling, aber wilder',
      description: 'Neue Crew, neue Deko-Craziness, und jede Menge Spielwiese zwischen Hangars, Lichtern und Neon-Sonnenaufgängen.'
    },
    {
      title: 'Vier Floors + Secret Spots',
      description: 'Progressive Stage, Techno-Dome, Chill-Oase und ein sneaky Microfloor – alles mit satten Visuals und liebevollen Details.'
    },
    {
      title: 'Sorgloses Abenteuer',
      description: 'Cashless Bars, Wasserstationen, Sunrise-Yoga, saubere Sanitärs und viel Platz fürs Camping direkt am Rollfeld.'
    }
  ];

  protected timeline: TimelineDrop[] = [
    { title: 'Einlass & Camping öffnen', detail: 'Ankommen, andocken, Zelt aufschlagen', time: 'Fr · 10:00' },
    { title: 'Sunset Opening', detail: 'Local Heroes, Vibes hochfahren, Farben leuchten', time: 'Fr · 18:00' },
    { title: 'Main Stage Peak', detail: 'Headliner-Show mit Full Visuals', time: 'Sa · 23:30' },
    { title: 'Groove Sundae', detail: 'Lazy Disco & Brunch auf dem Rollfeld', time: 'So · 12:00' }
  ];
}
