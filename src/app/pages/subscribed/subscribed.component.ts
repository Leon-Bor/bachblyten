import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-subscribed',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './subscribed.component.html',
  styleUrl: './subscribed.component.scss'
})
export class SubscribedComponent {}
