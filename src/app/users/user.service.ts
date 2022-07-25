import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "./user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private options = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>("http://192.168.100.3:8080/users");
  }

  getUserById(id:bigint): Observable<User> {
    return this.httpClient.get<User>("http://192.168.100.3:8080/users/" + id);
  }
  addUser(user:User): Observable<User>{
    return this.httpClient.post<User>("http://192.168.100.3:8080/users",{
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      country: user.country
    }, this.options);
  }
  deleteUser(id:bigint):void{
    this.httpClient.delete("http://192.168.100.3:8080/users/" + id).subscribe()
  }
  //delete запрос на путь. этот путь контрлирует мое java приложение
  updateUser(id:bigint,user:User):Observable<User>{
    return this.httpClient.patch<User>("http://192.168.100.3:8080/users/"+id,user,this.options)
  }
  constructor(private httpClient: HttpClient) {
  }
  //чекай ща удаляться из бд будет и обновлятся на странице
}
