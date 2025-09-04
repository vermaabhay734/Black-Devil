import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StarBackground } from '../../shared/star-background/star-background';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, StarBackground],
  templateUrl: './feedback.html',
  styleUrl: './feedback.scss'
})
export class FeedbackComponent {
  feedbackForm: FormGroup;
  submitted = false;
  rating = 0;
  
  constructor(private fb: FormBuilder) {
    this.feedbackForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      rating: [0, [Validators.required, Validators.min(1), Validators.max(5)]],
      comments: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  
  setRating(value: number) {
    this.rating = value;
    this.feedbackForm.patchValue({ rating: value });
  }
  
  onSubmit() {
    if (this.feedbackForm.valid) {
      console.log('Feedback submitted:', this.feedbackForm.value);
      this.submitted = true;
      
      // In a real application, you would send this data to a backend service here
      setTimeout(() => {
        this.feedbackForm.reset();
        this.rating = 0;
      }, 100);
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.feedbackForm.controls).forEach(key => {
        const control = this.feedbackForm.get(key);
        control?.markAsTouched();
      });
    }
  }
  
  // Convenience getter for easy access to form fields
  get f() { return this.feedbackForm.controls; }
  
  resetForm() {
    this.submitted = false;
    this.feedbackForm.reset();
    this.rating = 0;
  }
}
