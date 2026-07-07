import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { trackMetaEvent } from '../../shared/meta-pixel';

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
  readonly urgencyEyebrow = 'Letzte Stufe';
  readonly urgencyHeadline = 'Endspurt — letzte Stufe läuft!';
  protected readonly showAbendkasse = new Date() >= new Date(2026, 6, 24);

  get urgencyCopy() {
    if (this.showAbendkasse) {
      return 'Noch kein Ticket? Keine Panik — es gibt auch eine Abendkasse.';
    }
    return `Jetzt geht's mit Late Bird in die finale Runde. ${this.textline}`;
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
  private checkoutTracked = false;

  onIframeLoad() {
    // is mobile?
    const isMobile = window.innerWidth <= 768;
    const baseHeight = isMobile ? 2550 : 1360;

    this.iframeHeight = baseHeight;

    // Nur einmal je Seitenaufruf feuern, wenn der Paylogic-Shop geladen ist.
    if (!this.checkoutTracked) {
      this.checkoutTracked = true;
      trackMetaEvent('InitiateCheckout', { content_name: 'Ticketshop Paylogic' });
    }
  }

  chooseRandomTextline() {
    const options = [
      'Nu Late Bird sichern, dorna gifft dat nix mehr.',
      'Greif to, mien Jung – ehr de Tickets ganz wech sünd.',
      'Late Bird löppt – schnapp dir dein Ticket, hörst?',
      'Wer nu töövt, kiekt achterher in de Röhr.',
      'Hol dir dat Ding fix, sünst is Schicht im Schacht.',
    ];
    return options[Math.floor(Math.random() * options.length)];
  }
}
