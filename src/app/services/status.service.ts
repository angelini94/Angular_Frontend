import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private baseUrl = '/api/statuses';

  constructor(
    private http: HttpClient
  ) { }

  /** Get Statuses from Server */
  getStatusesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
