import { Component, OnInit } from '@angular/core';
import { User } from '../users/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hero: User = {country: "", email: "", firstName: "", id: 0, lastName: ""}
  constructor() { }

  ngOnInit(): void {
  }

}
