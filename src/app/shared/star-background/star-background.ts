import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-star-background',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-background.html',
  styleUrl: './star-background.scss'
})
export class StarBackground {
  @Input() fullHeight = true;
}
