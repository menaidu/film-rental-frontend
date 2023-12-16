import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private authService: AuthService){}

  isLoggedIn(){
    return this.authService.isLoggedIn;
  }

  getRole(){
    let user = this.authService.retrieveUser();
    let role = user.user.allRoles[0];
    return role.rolesName;
  }
}
