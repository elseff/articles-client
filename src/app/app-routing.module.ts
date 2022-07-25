import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from "./users/users.component";
import {NewUserComponent} from "./new-user/new-user.component";
import {UserPageComponent} from "./user-page/user-page.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path:"users", component:UsersComponent
  },
  {
    path:"new-user", component:NewUserComponent
  },
  {
    path:"users/:{id}", component: UserPageComponent
  },
  {
    path:"", component: HomeComponent
  }
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
