import {Component, OnInit} from '@angular/core';
import { User } from '../users/user';
import { UserService } from '../users/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  user: User = {
    country: "", email: "", firstName: "", id: 0, lastName: ""
  }

  constructor(public userService: UserService) {
  }

  sendUser(user: User) {
    this.userService.addUser(user).subscribe(result => {
      this.user = result;
    })
    location.replace('/users')
  }

  ngOnInit(): void {
  }

}
