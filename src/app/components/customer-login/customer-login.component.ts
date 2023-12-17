import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrl: './customer-login.component.css',
})
export class CustomerLoginComponent {
  newUser: User = {
    userId: 0,
    userName: '',
    userPassword: '',
    allRolesPojo: [],
  };

  errorMessage: string = '';

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}
  login() {
    // validate the username password by
    // consuming endpoint in service layer
    this.userService.validate(this.newUser).subscribe((response) => {
        // means user name and password is correct
        console.log(response);
        // store the response (user object) in sessionStorage
        this.authService.storeUser(response);
        this.authService.isLoggedIn = true;
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error);
        this.errorMessage = error.error.errorMessage;
      }
    );
  }
}
