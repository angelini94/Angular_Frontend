import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = '/api/users';

  constructor(
    private http: HttpClient
  ) { }

  /** Get Users from Server */
  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  /** Get UserId from Server */
  getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  /** PUT: update user on the server */
  updateUser(user: User): Observable<any> {
    return this.http.put(this.baseUrl + '/' + user.id, user);
  }

  /** DELETE: delete a User on the server */
  deleteUser(user: User): Observable<any> {
    return this.http.delete(this.baseUrl + '/' + user.id);
  }

  /** CREATE: create a User on the server */
  createUser(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}`, user);
  }
}
