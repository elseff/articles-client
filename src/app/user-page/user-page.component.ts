import {Component, Input, OnInit} from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import {AuthenticationService} from "../_services/authentication.service";


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  user: User | null;
  userId: number | undefined;
  @Input() isEdit: boolean = false;

  constructor(private userService: UserService, private authService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.getUser()
  }

  getUser() {
  this.userId = this.authService.userValue?.id
    this.userService.getUserById(BigInt(<number>this.userId)).subscribe(user => {
      this.user = user
    })
  }

  update(user: User){
    this.userService.updateUser(BigInt(<number>this.userId),user).subscribe(user=>{
      this.user = user;
    })
    this.edit()
  }

  logout() {
    this.authService.logout()
    this.user = null
  }
  edit(): void {
    this.isEdit = !this.isEdit;
  }
}
