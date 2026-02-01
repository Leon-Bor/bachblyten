import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-spark-button',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './spark-button.component.html',
  styleUrl: './spark-button.component.scss',
})
export class SparkButtonComponent {
  @Input() label = 'Jetzt starten';
  @Input() routerLink?: string;

  private readonly document = inject(DOCUMENT);
  protected readonly spots = Array.from({ length: 52 });
  protected readonly sparkTexture = `url(${new URL(
    'Sonne_Layer_mitte_scrolleffect.png',
    this.document?.baseURI ?? '/',
  ).toString()})`;
}
