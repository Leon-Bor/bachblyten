import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
  styleUrl: './tickets.component.scss'
})
export class TicketsComponent {
  protected readonly paylogicUrl = 'https://shop.paylogic.com/b6bc9231e9ca428a96862b6b04394506/?wmode=opaque';
  private readonly sanitizer = inject(DomSanitizer);
  protected readonly paylogicEmbed: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.paylogicUrl);

  protected tiers: TicketTier[] = [
    {
      name: 'Weekend Pass',
      price: 'ab 139 €',
      tag: 'Beliebt',
      perks: ['72h Zugang zu allen Floors', 'Camping inkl.', 'Cashless-Armband vorab']
    },
    {
      name: 'Groove Sundae',
      price: '69 €',
      perks: ['Sonntag bis Open End', 'Brunch & Disco', 'Perfekt für einen Tagestrip']
    },
    {
      name: 'Early Camper Add-on',
      price: '25 €',
      perks: ['Frühanreise am Donnerstag ab 18:00', 'Camp in Ruhe aufbauen', 'Exklusiver Pre-Party Slot']
    }
  ];
}
