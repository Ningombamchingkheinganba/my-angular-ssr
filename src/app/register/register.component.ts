import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { RegisterService } from '../service/register.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, MatIconModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private registerService: RegisterService) {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const data = this.registerForm.value
      this.registerService.register(data).subscribe(response => {
        console.log("hit:>>>>");
        
      })
      // send data to backend
    }
  }
}
