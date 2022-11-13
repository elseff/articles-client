import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "./_services/authentication.service";
import {User} from "./_models/user";
import {environment} from "../environments/environment";
import {AuthUser} from "./_models/AuthUser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = `${environment.title}`;
  user: AuthUser | null = {
    email: "", password: "", id:0
  };

  constructor(private authService: AuthenticationService) {
    this.user = this.authService.userValue
  }

  ngOnInit(): void {
    this.user = this.authService.userValue
  }
}
