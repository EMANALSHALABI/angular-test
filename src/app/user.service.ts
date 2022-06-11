import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User[] = [];
  id!: number;
  constructor(private http: HttpClient) { }

  users()  {
    return this.http.get("https://reqres.in/api/users?page={page}")
  }
  getUserDetails(){
    debugger
    return this.http.get("https://reqres.in/api/users/{id}")
  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>("https://reqres.in/api/users/{id}"); 
   }
}
 