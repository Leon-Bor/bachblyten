import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-visual',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artist-visual.component.html',
  styleUrl: './artist-visual.component.scss',
})
export class ArtistVisualComponent implements OnInit {
  @Input() src = 'artists/roman-adam-bachblyten-festival-line-up-2026.jpg';
  @Input() alt = 'Artist Platzhalter';

  protected cloudStyles: Array<Record<string, string>> = [];

  ngOnInit(): void {
    this.cloudStyles = [this.createCloudStyle('left'), this.createCloudStyle('right')];
  }

  private createCloudStyle(position: 'left' | 'right'): Record<string, string> {
    const top = `${this.randomInRange(-12, 6)}%`;
    const horizontal = `${this.randomInRange(-12, 10)}%`;
    const width = `${this.randomInRange(46, 64)}%`;
    const scale = this.randomInRange(0.9, 1.1);
    const tilt = this.randomInRange(-6, 6);
    const duration = this.randomInRange(16, 26);
    const delay = this.randomInRange(-18, -2);

    const driftMidX = `${this.randomInRange(6, 18) * (Math.random() > 0.5 ? 1 : -1)}%`;
    const driftMidY = `${this.randomInRange(1, 7) * (Math.random() > 0.5 ? 1 : -1)}%`;
    const driftEndX = `${this.randomInRange(4, 14) * (Math.random() > 0.5 ? 1 : -1)}%`;
    const driftEndY = `${this.randomInRange(1, 6) * (Math.random() > 0.5 ? 1 : -1)}%`;

    return {
      top,
      width,
      [position]: horizontal,
      'animation-duration': `${duration.toFixed(1)}s`,
      'animation-delay': `${delay.toFixed(1)}s`,
      '--cloud-scale': scale.toFixed(2),
      '--cloud-tilt': `${tilt.toFixed(1)}deg`,
      '--drift-x-mid': driftMidX,
      '--drift-y-mid': driftMidY,
      '--drift-x-end': driftEndX,
      '--drift-y-end': driftEndY,
    };
  }

  private randomInRange(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
}
