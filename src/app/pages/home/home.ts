import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StarBackground } from '../../shared/star-background/star-background';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, StarBackground],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('testimonialTrack') testimonialTrack!: ElementRef;
  
  // Testimonial carousel
  currentSlide = 0;
  maxSlide = 3; // 6 testimonials, showing 3 at a time = 4 possible positions (0-3)
  
  // Carousel navigation methods
  nextSlide(): void {
    if (this.currentSlide < this.maxSlide) {
      this.currentSlide++;
    }
  }
  
  prevSlide(): void {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }
  
  goToSlide(index: number): void {
    this.currentSlide = index;
  }
  
  ngAfterViewInit(): void {
    // Initial setup of the testimonials carousel
    this.checkArrows();
  }
  
  private checkArrows(): void {
    // Logic to enable/disable arrows at the beginning/end of the carousel
    // Can be expanded if needed
  }
  
  // Astrology cards data
  astrologyCards = [
    {
      title: 'Tarot Reading',
      description: 'Unlock the mysteries of your future with our expert tarot card readings.',
      icon: 'tarot'
    },
    {
      title: 'Zodiac Analysis',
      description: 'Discover how your star sign affects your personality and future.',
      icon: 'zodiac'
    },
    {
      title: 'Palm Reading',
      description: 'Your hands tell a story - let us interpret its meaning for your life.',
      icon: 'palm'
    }
  ];
}
