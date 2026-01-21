import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LINEUP_DATA, Artist } from '../../data/lineup';

@Component({
  selector: 'app-line-up',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './line-up.component.html',
  styleUrl: './line-up.component.scss'
})
export class LineUpComponent {
  protected data = LINEUP_DATA;

  protected artistsByDay(day: string): Artist[] {
    return this.data.artists.filter((artist) => artist.day === day);
  }
}
