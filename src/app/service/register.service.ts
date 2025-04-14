import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  apiUrlBasePath = "http://localhost:3000/api";

  public register(data: any): Observable<any> {
    console.log("data:>", data);
    return this.http.post(`${this.apiUrlBasePath}/login`, data);
  }
}
