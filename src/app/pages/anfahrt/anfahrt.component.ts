import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  styleUrl: './anfahrt.component.scss'
})
export class AnfahrtComponent {
  protected readonly venue = {
    name: 'Flugplatz Schwesing',
    address: 'Am Flugplatz 1, 25813 Schwesing',
    mapUrl: 'https://maps.google.com/?q=Flugplatz+Schwesing'
  };

  protected options: TravelOption[] = [
    {
      title: 'Bahn / ÖPNV',
      tag: 'Empfehlung',
      details: [
        'Bahnhof Husum anfahren (stündliche Verbindungen ab Hamburg/Kiel).',
        'Ab Husum: Buslinie 102 Richtung Schwesing, Haltestelle „Flugplatz“. Letzte Verbindung Freitags ca. 22:30.',
        'Taxi / On-Demand-Shuttles vom Bahnhof planen (ca. 10 min Fahrt).'
      ]
    },
    {
      title: 'Shuttle Partner',
      details: [
        'Sunny Trips Busse ab Hamburg, Lübeck, Kiel. Vorheriges Ticket im Shop buchen.',
        'Kein separates Festival-Shuttle 2026 – bitte Transfers vorab organisieren.'
      ]
    },
    {
      title: 'Auto',
      details: [
        'Adresse ins Navi: Am Flugplatz 1, 25813 Schwesing.',
        'Folgt der Beschilderung ab Husum, nutzt nur die ausgewiesenen Park- und Campingflächen.',
        'Bitte bildet Fahrgemeinschaften. Zufahrten sind One-Way geregelt – Geduld beim Ankommen/Abfahren.'
      ]
    },
    {
      title: 'Fahrrad',
      tag: 'Green Choice',
      details: [
        'Von Husum ca. 15 Minuten durch flaches Gelände.',
        'Beleuchtete Radwege, abschließbare Fahrradflächen am Eingang.',
        'Warnwesten & Lampen mitbringen – Nordseeabend kann dunkel werden.'
      ]
    }
  ];
}
