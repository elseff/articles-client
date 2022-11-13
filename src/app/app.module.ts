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

import {LoginComponent} from './login/login.component';
import {BasicAuthInterceptor} from "./_helpers/basic-auth.interceptor";
import {ErrorInterceptor} from "./_helpers/error.interceptor";
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    HomeComponent,
    ArticlesComponent,
    LoginComponent,
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
    {provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
