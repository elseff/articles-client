import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './_helpers/auth.guard';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {UserPageComponent} from "./user-page/user-page.component";

const routes: Routes = [
  {
    path: "home", component: HomeComponent, canActivate: [AuthGuard]
  },
  {
    path: "profile", component: UserPageComponent, canActivate: [AuthGuard]
  },
  {
    path: "sign-up", component: SignUpComponent
  },
  {
    path: "sign-in", component: SignInComponent
  },
  {
    path: '**', redirectTo: 'home'
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
