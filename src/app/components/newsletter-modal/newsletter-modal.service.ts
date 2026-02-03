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
  private static readonly CK_FORM_ACTION = 'https://app.kit.com/forms/9048132/subscriptions';
  private static readonly CK_FORM_ID = '9048132';
  private static readonly CK_UID = '8e20593361';

  private readonly openState = signal(false);

  readonly isOpen = computed(() => this.openState());

  open(): void {
    this.openState.set(true);
  }

  close(): void {
    this.openState.set(false);
  }

  async submit(payload: NewsletterPayload): Promise<NewsletterSubmitResult> {
    const formData = new FormData();
    formData.append('email_address', payload.email);
    if (payload.name.trim()) {
      formData.append('first_name', payload.name.trim());
    }
    formData.append('fields[consent]', payload.consent ? 'true' : 'false');
    formData.append('form', NewsletterModalService.CK_FORM_ID);
    formData.append('id', NewsletterModalService.CK_UID);

    try {
      const response = await fetch(NewsletterModalService.CK_FORM_ACTION, {
        method: 'POST',
        body: formData,
        mode: 'cors'
      });

      if (!response.ok) {
        const text = await response.text();
        console.error('ConvertKit signup failed', response.status, text);
        return { success: false, message: 'Signup fehlgeschlagen. Bitte versuch es gleich erneut.' };
      }

      // ConvertKit kann JSON oder leeren Body liefern – robust parsen.
      let message: string | undefined;
      try {
        const data = await response.json();
        message = data?.message || data?.msg;
      } catch {
        // ignore parsing issues; treat as success
      }

      return { success: true, message: message ?? 'Erfolg! Bitte E-Mail bestätigen.' };
    } catch (error) {
      console.error('ConvertKit signup threw', error);
      return {
        success: false,
        message: 'Netzwerkproblem – bist du online? Bitte später erneut versuchen.'
      };
    }
  }
}
