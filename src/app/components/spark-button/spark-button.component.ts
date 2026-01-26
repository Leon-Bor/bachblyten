import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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

  protected readonly spots = Array.from({ length: 52 });
}
