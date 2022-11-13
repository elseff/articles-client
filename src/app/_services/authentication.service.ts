import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {User} from '../_models/user';
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthUser} from "../_models/AuthUser";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userSubject: BehaviorSubject<AuthUser | null>;
  public user: Observable<AuthUser | null>;

  private options = {
    headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
  };

  private url = "http://192.168.100.4:8080/api/v1/auth";

  constructor(private router: Router, private httpClient: HttpClient) {
    this.userSubject = new BehaviorSubject<AuthUser | null>(JSON.parse(<string>localStorage.getItem("authUser")));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): AuthUser | null {
    return this.userSubject.value
  }

  login(username: string, password: string) {
    return this.httpClient.post<AuthUser>(this.url + "/login", {
      email: username,
      password: password
    }, this.options)
      .subscribe(resultUser => {
        localStorage.setItem('authUser', JSON.stringify(resultUser));
        this.userSubject.next(resultUser);
        location.replace("/home")
        return resultUser;
      })
  }

  logout() {
    localStorage.removeItem('authUser')
    this.userSubject.next(null)
    location.replace("/login")
  }

  register(user: User) {
    return this.httpClient.post<AuthUser>(this.url + "/register", {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      country: user.country,
      password: user.password
    }, this.options).subscribe(resultUser => {
      localStorage.setItem('authUser', JSON.stringify(resultUser));
      this.userSubject.next(resultUser);
      location.replace("/home")
      return resultUser;
    })
  }
}

