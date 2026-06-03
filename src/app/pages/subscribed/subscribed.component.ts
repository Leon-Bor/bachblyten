import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TicketCtaDirective } from '../../shared/ticket-cta.directive';

@Component({
  selector: 'app-subscribed',
  standalone: true,
  imports: [CommonModule, RouterLink, TicketCtaDirective],
  templateUrl: './subscribed.component.html',
  styleUrl: './subscribed.component.scss'
})
export class SubscribedComponent {}
