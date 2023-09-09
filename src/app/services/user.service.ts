import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from '../../environment/environment'
import { User } from "../models/user";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  login(user: any): Observable<any> {
    debugger
    return this.http.post(environment.url + "/login", user);
  }

  register(user: User): Observable<any> {
    debugger
    return this.http.post(environment.url + "/register", user);
  }
}
