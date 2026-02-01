import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArtistVisualComponent } from '../../components/artist-visual/artist-visual.component';
import { LINEUP_DATA } from '../../data/lineup';

@Component({
  selector: 'app-line-up',
  standalone: true,
  imports: [CommonModule, RouterLink, ArtistVisualComponent],
  templateUrl: './line-up.component.html',
  styleUrl: './line-up.component.scss',
})
export class LineUpComponent {
  protected data = LINEUP_DATA;

  randomizedArtists = this.getRandomizedArtists();
  constructor() {}

  // randomize artist visuals
  protected getRandomizedArtists() {
    return this.data.artists
      .map((artist) => ({ artist, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ artist }) => artist);
  }
}
