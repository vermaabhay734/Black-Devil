import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkMode = new BehaviorSubject<boolean>(true); // Default to dark mode
  
  isDarkMode$ = this.isDarkMode.asObservable();
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    
    if (this.isBrowser) {
      // Initialize theme from local storage if available
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        this.isDarkMode.next(savedTheme === 'dark');
      }
      
      this.applyTheme();
    }
  }

  toggleTheme(): void {
    this.isDarkMode.next(!this.isDarkMode.value);
    this.applyTheme();
  }

  private applyTheme(): void {
    if (!this.isBrowser) return;
    
    const isDark = this.isDarkMode.value;
    
    // Save to localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Apply to document
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
