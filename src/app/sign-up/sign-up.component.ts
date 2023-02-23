import {Component, OnInit} from '@angular/core';
import {User} from '../_models/user';
import {AuthenticationService} from "../_services/authentication.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: User = {
    country: "", email: "", firstName: "", lastName: "", password: "", id: 0
  }

  constructor(private authService: AuthenticationService) {
  }

  sendUser(user: User) {
    console.log("here send user")
    this.authService.register(user);
  }

  ngOnInit(): void {
  }
}
