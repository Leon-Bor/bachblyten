import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface TravelOption {
  title: string;
  details: string[];
  tag?: string;
}

@Component({
  selector: 'app-anfahrt',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './anfahrt.component.html',
  styleUrl: './anfahrt.component.scss',
})
export class AnfahrtComponent {
  protected readonly venue = {
    name: 'Flugplatz Schwesing',
    address: 'Am Flugplatz 1, 25813 Schwesing',
    mapUrl: 'https://maps.google.com/?q=Flugplatz+Schwesing',
  };

  protected readonly mapEmbedUrl: SafeResourceUrl;

  constructor(sanitizer: DomSanitizer) {
    const embedUrl =
      'https://www.google.com/maps/embed/v1/place?key=AIzaSyAsNcyGv7shX6e1bNkuWbf4JNxxuBRSi7c&q=BACHBLYTEN®+FESTIVAL';
    this.mapEmbedUrl = sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  protected options: TravelOption[] = [
    {
      title: 'Bahn / ÖPNV',
      tag: 'Empfehlung',
      details: [
        'Bahnhof Husum anfahren (stündliche Verbindungen ab Hamburg/Kiel).',
        'Ab Husum: Buslinie 150/155 Richtung Schwesing, Haltestelle „Flugplatz“. Letzte Verbindung Freitags ca. 19:30.',
        'Taxi / On-Demand-Shuttles vom Bahnhof Husum planen (ca. 10 min Fahrt).',
      ],
    },
    // {
    //   title: 'Shuttle Partner',
    //   details: [
    //     'Sunny Trips Busse ab Hamburg, Lübeck, Kiel. Vorheriges Ticket im Shop buchen.',
    //     'Kein separates Festival-Shuttle 2026 – bitte Transfers vorab organisieren.',
    //   ],
    // },
    {
      title: 'Auto',
      details: [
        'Adresse ins Navi: Am Flugplatz 1, 25813 Schwesing.',
        'Folgt der Beschilderung ab Husum, nutzt nur die ausgewiesenen Park- und Campingflächen.',
        'Bitte bildet Fahrgemeinschaften. Zufahrten sind One-Way geregelt – Geduld beim Ankommen/Abfahren.',
      ],
    },
    {
      title: 'Fahrrad',
      tag: 'Green Choice',
      details: [
        'Von Husum ca. 20 Minuten durch flaches Gelände.',
        'Teilweise beleuchtete Radwege, Fahrradflächen am Eingang.',
        'Lampen mitbringen – Nordseeabend kann dunkel werden.',
      ],
    },
  ];
}
