import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StarBackground } from '../../shared/star-background/star-background';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, StarBackground],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  
  // Contact details - would come from a backend in a real app
  contactInfo = {
    phone: '+1 (555) 123-4567',
    email: 'contact@blackdevil.com',
    address: '123 Mystic Avenue, Cosmic City, Universe 42',
    // Dummy coordinates for Google Maps
    mapLocation: {
      lat: 40.712776,
      lng: -74.005974
    }
  };
  
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  
  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Contact form submitted:', this.contactForm.value);
      this.submitted = true;
      
      // In a real application, you would send this data to a backend service here
      setTimeout(() => {
        this.contactForm.reset();
      }, 100);
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        control?.markAsTouched();
      });
    }
  }
  
  // Convenience getter for easy access to form fields
  get f() { return this.contactForm.controls; }
  
  resetForm() {
    this.submitted = false;
    this.contactForm.reset();
  }
}
