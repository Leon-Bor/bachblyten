import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FOOTER_LINKS } from '../../navigation';
import { NewsletterModalService } from '../newsletter-modal/newsletter-modal.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  private readonly newsletterModal = inject(NewsletterModalService);
  protected readonly footerLinks = FOOTER_LINKS;
  protected readonly year = new Date().getFullYear();

  protected openNewsletter(): void {
    this.newsletterModal.open();
  }
}
