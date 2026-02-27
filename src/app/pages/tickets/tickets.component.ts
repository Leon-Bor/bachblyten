import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

interface TicketTier {
  name: string;
  price: string;
  perks: string[];
  tag?: string;
}

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss',
})
export class TicketsComponent {
  readonly urgencyHeadline = 'Early Bird Tickets sind schon wech!';
  get urgencyCopy() {
    return `Jetzt geht es weiter mit der Regular Stufe. ${this.textline}`;
  }

  protected textline = this.chooseRandomTextline();

  protected readonly paylogicUrl =
    'https://shop.paylogic.com/bb04103b5d0e4c8491d10dd9e7c96ec3?wmode=opaque';
  private readonly sanitizer = inject(DomSanitizer);
  protected readonly paylogicEmbed: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    this.paylogicUrl,
  );

  @ViewChild('iframe') iframe!: ElementRef<HTMLIFrameElement>;

  iframeHeight = 1500;

  onIframeLoad() {
    // is mobile?
    const isMobile = window.innerWidth <= 768;
    const baseHeight = isMobile ? 1850 : 1100;

    this.iframeHeight = baseHeight;
  }

  chooseRandomTextline() {
    const options = [
      'Nu is Regular dran – hol dir dat Ticket fix.',
      'Regular Stufe löppt: schnapp dir dein Ticket, mien Jung.',
      'Ab nu zählt Regular – wart nich to lang, hörst?',
      'Regular Tickets sünd am Start, greif to.',
      'Nu den Regular-Preis sichern, ehr dat ne nächste Stufe gifft.',
    ];
    return options[Math.floor(Math.random() * options.length)];
  }
}
