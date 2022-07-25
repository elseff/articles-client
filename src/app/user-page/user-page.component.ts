import {Component, Input, OnInit} from '@angular/core';
import { User } from '../users/user';
import { UserService } from '../users/user.service';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  user: User | undefined;
  endpoint: string = location.pathname
  @Input() isEdit: boolean = false;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUser()
  }

  getUser() {
    let id = this.endpoint.slice(this.endpoint.lastIndexOf("/")+1);
    this.userService.getUserById(BigInt(id)).subscribe(user => {
      this.user = user
    })
  }

  edit(): void {
    this.isEdit = !this.isEdit;
  }

  updateUser(user: User) {
    this.edit()

    this.userService.updateUser(BigInt(user.id), user).subscribe(user => {
        this.user = user
      }
    )
  }
  deleteUser(user: User){
    this.userService.deleteUser(BigInt(user.id))
    location.replace("/users")
  }
}
