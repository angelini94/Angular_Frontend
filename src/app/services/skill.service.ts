import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private baseUrl = '/api/skills';

  constructor(
    private http: HttpClient
  ) { }

  /** Get Skills from Server */
  getSkillsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
