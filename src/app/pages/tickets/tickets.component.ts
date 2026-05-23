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
  readonly urgencyEyebrow = 'Letzte Stufe';
  readonly urgencyHeadline = 'Regular Tickets sind ausverkauft!';
  get urgencyCopy() {
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

  onIframeLoad() {
    // is mobile?
    const isMobile = window.innerWidth <= 768;
    const baseHeight = isMobile ? 2550 : 1360;

    this.iframeHeight = baseHeight;
  }

  chooseRandomTextline() {
    const options = [
      'Late Bird is de letzte Stufe – nu oder nie, mien Jung.',
      'Dat is de finale Runde – greif to, ehr dat ganz vorbei is.',
      'Letzte Chance op ’n Ticket – wart nich, bit dat ausverkooft is.',
      'Nu Late Bird sichern, dorna gifft dat nix mehr.',
      'Endspurt! Late Bird löppt – hol dir dat Ding, hörst?',
    ];
    return options[Math.floor(Math.random() * options.length)];
  }
}
