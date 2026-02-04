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
  protected readonly paylogicUrl =
    'https://shop.paylogic.com/bb04103b5d0e4c8491d10dd9e7c96ec3?wmode=opaque';
  private readonly sanitizer = inject(DomSanitizer);
  protected readonly paylogicEmbed: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    this.paylogicUrl,
  );

  protected tiers: TicketTier[] = [
    {
      name: 'Weekend Pass',
      price: 'ab 139 €',
      tag: 'Beliebt',
      perks: ['72h Zugang zu allen Floors', 'Camping inkl.', 'Cashless-Armband vorab'],
    },
    {
      name: 'Groove Sundae',
      price: '69 €',
      perks: ['Sonntag bis Open End', 'Brunch & Disco', 'Perfekt für einen Tagestrip'],
    },
    {
      name: 'Early Camper Add-on',
      price: '25 €',
      perks: [
        'Frühanreise am Donnerstag ab 18:00',
        'Camp in Ruhe aufbauen',
        'Exklusiver Pre-Party Slot',
      ],
    },
  ];

  @ViewChild('iframe') iframe!: ElementRef<HTMLIFrameElement>;

  iframeHeight = 1500;

  onIframeLoad() {
    // is mobile?
    const isMobile = window.innerWidth <= 768;
    const baseHeight = isMobile ? 1300 : 1000;

    this.iframeHeight = baseHeight;
  }
}
