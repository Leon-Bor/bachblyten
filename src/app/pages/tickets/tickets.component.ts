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
    return `Über ${this.soldPercentage}% der Early-Bird-Tickets sind schon weg. ${this.textline}`;
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

  chooseRandomTextline() {
    const options = [
      'Dat is ’n Schnapper, sach ich dir. Seh to!',
      'Hol dir dat Ding jetzt, sonst is dat futsch wie Ebbe bei Nordsee!',
      'Erst ma sichern, dann ’n Tee trinken – so geiht dat hier oben!',
      'Sicher dir den Bestpreis, ganz entspannt – aber flott!',
      'Greif to, mien Jung – so billig kriegst dat nich nochmal!',
    ];
    return options[Math.floor(Math.random() * options.length)];
  }

  onIframeLoad() {
    // is mobile?
    const isMobile = window.innerWidth <= 768;
    const baseHeight = isMobile ? 1450 : 1100;

    this.iframeHeight = baseHeight;
  }
}
