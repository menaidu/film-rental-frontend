import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrl: './customer-login.component.css',
})
export class CustomerLoginComponent {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],

      password: ['', Validators.required],
    });
  }

  onSubmit() {
    debugger;
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    if (email.trim() === '' || !email.includes('@') || !email.includes('.')) {
      alert('Please enter a valid email address');
      return;
    }

    if (email == 'customer@sakila.com' && password == 'password') {
      this.router.navigate(['/sakila']);
    } else {
      this.loginForm.setErrors({ invalidCredentials: true });
    }
  }
}
