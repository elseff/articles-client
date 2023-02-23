import {Component, OnInit} from '@angular/core';
import {User} from '../_models/user';
import {AuthenticationService} from "../_services/authentication.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  user: User = {
    id:0,
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    password: ""
  }

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {}

  onSubmit(user: User){
    console.log("here send user")
    this.authService.login(user.email, user.password)
  }
}
