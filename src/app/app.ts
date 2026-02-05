import { Component, OnDestroy, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { BackgroundComponent } from './components/background/background.component';
import { NewsletterModalComponent } from './components/newsletter-modal/newsletter-modal.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    NavComponent,
    FooterComponent,
    BackgroundComponent,
    NewsletterModalComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnDestroy {
  protected readonly backgroundMode = signal<'sunrise' | 'static'>('static');
  protected readonly currentPath = signal<string>('/');
  protected readonly showCookieBanner = signal<boolean>(false);

  private readonly routerSub: Subscription;

  constructor(private readonly router: Router, private readonly route: ActivatedRoute) {
    this.routerSub = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentPath.set(this.router.url.split('?')[0] || '/');
        const deepest = this.getDeepestChild(this.route);
        const mode = deepest?.snapshot.data['background'] === 'sunrise' ? 'sunrise' : 'static';
        this.backgroundMode.set(mode);
      });

    // Minimal cookie notice: only show if no consent stored
    try {
      const consent = localStorage.getItem('bb-cookie-consent');
      this.showCookieBanner.set(!consent);
    } catch {
      // ignore access errors (e.g., privacy mode)
      this.showCookieBanner.set(true);
    }
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }

  private getDeepestChild(route: ActivatedRoute): ActivatedRoute {
    let current = route;
    while (current.firstChild) {
      current = current.firstChild;
    }
    return current;
  }

  protected acceptCookies(): void {
    try {
      localStorage.setItem('bb-cookie-consent', 'accepted');
    } catch {
      /* ignore */
    }
    this.showCookieBanner.set(false);
  }
}
