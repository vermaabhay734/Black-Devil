import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarBackground } from '../../shared/star-background/star-background';

@Component({
  selector: 'app-advice',
  standalone: true,
  imports: [CommonModule, StarBackground],
  templateUrl: './advice.html',
  styleUrl: './advice.scss'
})
export class AdviceComponent {
  // This is a placeholder for future backend integration
  // In a real application, this would fetch data from a service
  hasAdvice = false;
}
