import { AfterViewInit, Component, HostListener, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HEADER_LINKS } from '../../navigation';
import { TicketCtaDirective } from '../../shared/ticket-cta.directive';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, TicketCtaDirective],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements AfterViewInit {
  @Input({ required: true }) activePath = '/';

  protected readonly headerLinks = HEADER_LINKS;
  protected menuOpen = signal(false);
  protected scrolled = signal(false);

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  onEsc(): void {
    this.closeMenu();
  }

  ngAfterViewInit(): void {
    this.updateScrollState();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.updateScrollState();
  }

  private updateScrollState(): void {
    const isScrolled = window.scrollY > 20;
    if (isScrolled !== this.scrolled()) {
      this.scrolled.set(isScrolled);
    }
  }
}
