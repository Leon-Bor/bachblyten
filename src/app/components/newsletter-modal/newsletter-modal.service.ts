import { Injectable, computed, signal } from '@angular/core';

export interface NewsletterPayload {
  name: string;
  email: string;
  consent: boolean;
}

export interface NewsletterSubmitResult {
  success: boolean;
  message?: string;
}

@Injectable({ providedIn: 'root' })
export class NewsletterModalService {
  private static readonly SUBSCRIBE_URL = 'https://events.alphabees.de/api/newsletter/subscribe';
  private static readonly PUBLIC_ID = 'a0097257-a8cb-438c-a40c-aa82e9c81885';

  private readonly openState = signal(false);

  readonly isOpen = computed(() => this.openState());

  open(): void {
    this.openState.set(true);
  }

  close(): void {
    this.openState.set(false);
  }

  async submit(payload: NewsletterPayload): Promise<NewsletterSubmitResult> {
    try {
      const response = await fetch(NewsletterModalService.SUBSCRIBE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          publicId: NewsletterModalService.PUBLIC_ID,
          email: payload.email,
          name: payload.name.trim()
        })
      });

      if (!response.ok) {
        const text = await response.text();
        console.error('Newsletter signup failed', response.status, text);
        return { success: false, message: 'Signup fehlgeschlagen. Bitte versuch es gleich erneut.' };
      }

      // Endpoint kann JSON oder leeren Body liefern – robust parsen.
      let message: string | undefined;
      try {
        const data = await response.json();
        message = data?.message || data?.msg;
      } catch {
        // ignore parsing issues; treat as success
      }

      return { success: true, message: message ?? 'Erfolg! Bitte E-Mail bestätigen.' };
    } catch (error) {
      console.error('Newsletter signup threw', error);
      return {
        success: false,
        message: 'Netzwerkproblem – bist du online? Bitte später erneut versuchen.'
      };
    }
  }
}
