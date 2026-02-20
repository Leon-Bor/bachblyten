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
  readonly soldPercentage = 80;
  readonly remainingPercentage = 100 - this.soldPercentage;
  readonly urgencyEyebrow = 'Early Bird';
  get urgencyHeadline() {
    return `Nur noch ${this.remainingPercentage}% übrig`;
  }
  get urgencyCopy() {
    return `Bereits ${this.soldPercentage}% der Early-Bird-Tickets sind weg. Die nächste Preisstufe wird teurer – sichere dir jetzt den günstigsten Preis.`;
  }

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
    const baseHeight = isMobile ? 1450 : 1100;

    this.iframeHeight = baseHeight;
  }
}
