import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private baseUrl = '/api/roles';

  constructor(
    private http: HttpClient
  ) { }

  /** Get Roles from Server */
  getRolesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
