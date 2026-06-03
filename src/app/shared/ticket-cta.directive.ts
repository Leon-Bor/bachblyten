import { Directive, HostListener, Input } from '@angular/core';
import { trackMetaCustom } from './meta-pixel';

/**
 * Feuert ein Meta-Pixel-Custom-Event (TicketCTAClick) beim Klick auf einen
 * Ticket-Call-to-Action. Anwendung: <a bbTicketCta="landing-hero" ...>.
 */
@Directive({
  selector: '[bbTicketCta]',
  standalone: true,
})
export class TicketCtaDirective {
  /** Ort des CTA, z. B. 'landing-hero', 'nav', 'line-up'. */
  @Input('bbTicketCta') location = '';

  @HostListener('click')
  onClick(): void {
    trackMetaCustom('TicketCTAClick', { location: this.location || 'unbekannt' });
  }
}
