import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private options = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
  api: string = "http://192.168.100.3:8080/api/v1/users"

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.api, this.options);
  }

  getUserById(id: bigint): Observable<User> {
    return this.httpClient.get<User>(`${this.api}/` + id, this.options);
  }

  // deleteUser(id: bigint): void {
  //   this.httpClient.delete(`${this.api}/` + id).subscribe()
  // }

  updateUser(id: bigint | undefined, user: User): Observable<User> {
    return this.httpClient.patch<User>(`${this.api}/` + id, user).pipe()
  }
}
