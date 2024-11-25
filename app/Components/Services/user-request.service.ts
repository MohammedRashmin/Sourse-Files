import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRequestService {

  constructor(private http:HttpClient) { }

  getUser():Observable<any[]>{
    return this.http.get<any[]>('http://localhost:5102/api/User/AllUsers');
  }
}
