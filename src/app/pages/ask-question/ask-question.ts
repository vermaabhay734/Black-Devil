import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StarBackground } from '../../shared/star-background/star-background';

@Component({
  selector: 'app-ask-question',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, StarBackground],
  templateUrl: './ask-question.html',
  styleUrl: './ask-question.scss'
})
export class AskQuestionComponent {
  questionForm: FormGroup;
  submitted = false;
  
  constructor(private fb: FormBuilder) {
    this.questionForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', Validators.required],
      question: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  
  onSubmit() {
    if (this.questionForm.valid) {
      console.log('Form submitted:', this.questionForm.value);
      this.submitted = true;
      
      // In a real application, you would send this data to a backend service here
      // For now, we'll just simulate success
      setTimeout(() => {
        this.questionForm.reset();
      }, 100);
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.questionForm.controls).forEach(key => {
        const control = this.questionForm.get(key);
        control?.markAsTouched();
      });
    }
  }
  
  // Convenience getter for easy access to form fields
  get f() { return this.questionForm.controls; }
  
  resetForm() {
    this.submitted = false;
    this.questionForm.reset();
  }
}
