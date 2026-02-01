import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-popover',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-popover.component.html',
  styleUrl: './profile-popover.component.scss',
})
export class ProfilePopoverComponent {
  @Input() text = '';

  show = false;

  onEnter() {
    this.show = true;
  }

  onLeave() {
    this.show = false;
  }

  onFocus() {
    this.show = true;
  }

  onBlur() {
    this.show = false;
  }
}
