import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Post {
  handle: string;
  caption: string;
  url: string;
  image: string;
  ago: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  protected posts: Post[] = [
    {
      handle: '@bachblyten',
      caption: 'Sunrise-Vibes auf dem Rollfeld. Wer ist 2026 wieder dabei?',
      url: 'https://www.instagram.com',
      ago: 'vor 3 Tagen',
      image:
        'https://images.unsplash.com/photo-1520454974749-611b824e31c0?auto=format&fit=crop&w=900&q=80'
    },
    {
      handle: '@bachblyten',
      caption: 'Neues Deko-Team, neue Ideen – Sneak Peek unserer Holzstrukturen.',
      url: 'https://www.instagram.com',
      ago: 'vor 1 Woche',
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
    },
    {
      handle: '@bachblyten',
      caption: 'Hangar Techno Dome: Laser-Tests laufen. Bereit für Nachtflüge?',
      url: 'https://www.instagram.com',
      ago: 'vor 2 Wochen',
      image:
        'https://images.unsplash.com/photo-1438557068880-c5f474830377?auto=format&fit=crop&w=900&q=80'
    }
  ];
}
