import {Component, OnInit} from '@angular/core';
import {User} from '../_models/user';
import {AuthenticationService} from "../_services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {
    country: "", email: "", firstName: "", lastName: "", password: "", id: 0
  }

  constructor(private authService: AuthenticationService) {
  }

  sendUser(user: User) {
    this.authService.register(user);
  }

  ngOnInit(): void {
  }
}
