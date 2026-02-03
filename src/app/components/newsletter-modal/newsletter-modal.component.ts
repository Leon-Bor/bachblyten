import { CommonModule } from '@angular/common';
import { Component, HostListener, effect, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  NewsletterModalService,
  NewsletterPayload,
  NewsletterSubmitResult
} from './newsletter-modal.service';

@Component({
  selector: 'app-newsletter-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './newsletter-modal.component.html',
  styleUrl: './newsletter-modal.component.scss'
})
export class NewsletterModalComponent {
  protected readonly modal = inject(NewsletterModalService);
  private readonly fb = inject(FormBuilder);
  protected submitted = false;
  protected submittedSuccess = false;
  protected submitError: string | null = null;
  protected isSubmitting = false;
  protected readonly ckFormId = '9048132';
  protected readonly ckUid = '8e20593361';
  protected readonly ckAction = 'https://app.kit.com/forms/9048132/subscriptions';

  protected readonly form = this.fb.nonNullable.group({
    name: [''],
    email: ['', [Validators.required, Validators.email]],
    consent: [false, Validators.requiredTrue]
  });

  private readonly resetOnOpen = effect(() => {
    if (this.modal.isOpen()) {
      this.form.reset({ name: '', email: '', consent: false });
      this.submitted = false;
      this.submittedSuccess = false;
    }
  });

  @HostListener('document:keydown.escape')
  onEsc(): void {
    if (this.modal.isOpen()) {
      this.modal.close();
    }
  }

  protected onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.modal.close();
    }
  }

  protected onSubmit(): void {
    if (this.isSubmitting) return;
    this.submitted = true;
    this.submittedSuccess = false;
    this.submitError = null;

    if (this.form.invalid) {
      return;
    }

    const payload = this.form.getRawValue();
    this.isSubmitting = true;

    this.modal
      .submit(payload)
      .then((result: NewsletterSubmitResult) => {
        this.submittedSuccess = result.success;
        this.submitError = result.success ? null : result.message ?? 'Da ging was schief.';
      })
      .finally(() => {
        this.isSubmitting = false;
      });
  }

  protected hasError(controlName: 'email' | 'consent'): boolean {
    const control = this.form.get(controlName);
    return !!control && control.invalid && (control.touched || this.submitted);
  }
}
