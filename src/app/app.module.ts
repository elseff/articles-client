import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { UsersComponent } from './users/users.component';
import { NewUserComponent } from './new-user/new-user.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import { UserPageComponent } from './user-page/user-page.component';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NewUserComponent,
    UserPageComponent,
    HomeComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
