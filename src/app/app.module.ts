import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {UserPageComponent} from './user-page/user-page.component';
import {HomeComponent} from './home/home.component';
import {ArticlesComponent} from './articles/articles.component';
import {SignInComponent} from './sign-in/sign-in.component';

import {SignUpComponent} from './sign-up/sign-up.component';
import {ErrorInterceptor} from "./_helpers/error.interceptor";
import {AppRoutingModule} from './app-routing.module';
import {JwtAuthInterceptor} from "./_helpers/jwt-auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    HomeComponent,
    ArticlesComponent,
    SignUpComponent,
    SignInComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtAuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
