import { Injectable, computed, signal } from '@angular/core';

export interface NewsletterPayload {
  name: string;
  email: string;
  consent: boolean;
}

@Injectable({ providedIn: 'root' })
export class NewsletterModalService {
  private readonly openState = signal(false);

  readonly isOpen = computed(() => this.openState());

  open(): void {
    this.openState.set(true);
  }

  close(): void {
    this.openState.set(false);
  }

  submit(payload: NewsletterPayload): void {
    // Backend-Hook folgt später; derzeit wird nur lokal geloggt.
    console.info('Festivalfunk signup (pending backend link):', payload);
  }
}
