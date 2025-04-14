import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  apiUrlBasePath = "http://localhost:3000/api";

  public login(data: any): Observable<any> {
    return this.http.post(`${this.apiUrlBasePath}/login`, data);
  }
}
