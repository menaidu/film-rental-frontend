import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css',
})
export class AdminLoginComponent {
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

    if (email == 'admin@example.com' && password == 'password') {
      alert('Login Successful');

      this.router.navigate(['/navadmin']);
    } else {
      alert('Enter valid Email or Password');

      this.loginForm.setErrors({ invalidCredentials: true });
    }
  }
}
