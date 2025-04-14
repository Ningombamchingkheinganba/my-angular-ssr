import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from "@angular/material/icon";
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, MatIconModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) {}

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit() {
    if (this.loginForm.valid) {
      const data = this.loginForm.value;
      this.loginService.login(data).subscribe(response=> {
        console.log("hit:>>>");
      })
    }
  }
}
