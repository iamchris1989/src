import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userData } from '../model/userData';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpclienttestService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private readonly apiUrl = 'http://192.168.43.126:8090/angular/';
  constructor(private http: HttpClient) { }



  getUser(): Observable<userData[]> {

    return this.http.get<userData[]>(`${this.apiUrl}userData/getData`, { headers: this.headers, });
  }



}
