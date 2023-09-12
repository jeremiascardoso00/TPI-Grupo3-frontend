import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment'

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {}

  createOne(message: any): Observable<any> {
debugger

    const token =  localStorage.getItem('bearer')
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    if (token !== null){
      headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      })
    }
   
    console.log(localStorage.getItem('bearer'))
    return this.http.post(environment.url + "/comment", message, { headers: headers });
  }

  getAll(): Observable<any> {
    return this.http.get(environment.url + "/comments");
  }

}
