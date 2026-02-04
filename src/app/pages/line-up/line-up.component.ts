import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ArtistVisualComponent } from '../../components/artist-visual/artist-visual.component';
import { ProfilePopoverComponent } from '../../components/profile-popover/profile-popover.component';
import { SparkButtonComponent } from '../../components/spark-button/spark-button.component';
import { LINEUP_DATA } from '../../data/lineup';

@Component({
  selector: 'app-line-up',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    ArtistVisualComponent,
    ProfilePopoverComponent,
    SparkButtonComponent,
  ],
  templateUrl: './line-up.component.html',
  styleUrl: './line-up.component.scss',
})
export class LineUpComponent {
  protected data = LINEUP_DATA;
  protected stageNames = this.data.stages.map((stage) => stage.name);
  protected selectedStage: string = 'all';

  randomizedArtists = this.getRandomizedArtists();
  constructor() {}

  protected get filteredArtists() {
    if (this.selectedStage === 'all') {
      return this.randomizedArtists;
    }

    return this.randomizedArtists.filter((artist) => artist.stage === this.selectedStage);
  }

  protected onStageChange(stage: string) {
    this.selectedStage = stage;
  }

  protected selectStage(stage: string) {
    this.onStageChange(stage);
  }

  // randomize artist visuals
  protected getRandomizedArtists() {
    return this.data.artists
      .map((artist) => ({ artist, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ artist }) => artist);
  }
}
