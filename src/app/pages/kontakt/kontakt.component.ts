import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface ContactChannel {
  title: string;
  detail: string;
}

@Component({
  selector: 'app-kontakt',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './kontakt.component.html',
  styleUrl: './kontakt.component.scss'
})
export class KontaktComponent {
  protected contacts: ContactChannel[] = [
    { title: 'Allgemein', detail: 'hallo@bachblyten-festival.com' },
    { title: 'Presse', detail: 'press@bachblyten-festival.com' },
    { title: 'Partner & Sponsoring', detail: 'partners@bachblyten-festival.com' },
    { title: 'Booking / Artists', detail: 'booking@bachblyten-festival.com' }
  ];

  protected channels: ContactChannel[] = [
    { title: 'Kontaktformular', detail: 'In Kürze live – bis dahin gern per Mail.' },
    { title: 'Telefon / Hotline', detail: '+49 (0) 4841 123456 · Fr–So 10–22 Uhr' },
    { title: 'Social & WhatsApp', detail: '@bachblyten auf Instagram & WhatsApp Broadcast (bald).' }
  ];
}
