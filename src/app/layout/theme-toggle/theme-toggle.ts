import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../core/theme-service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.scss'
})
export class ThemeToggle {
  constructor(public themeService: ThemeService) {}
}
