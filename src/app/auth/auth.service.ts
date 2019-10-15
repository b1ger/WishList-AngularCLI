import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from "rxjs";
import { Router } from "@angular/router";
import { User } from "../_models/user";
import { JwtResponse } from "../_models/jwt.response";
import { Global } from "../_config/global";

@Injectable()
export class AuthService {

  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    private router: Router,
    private config: Global
  ) {}

  login(user: User): Observable<JwtResponse> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let data = {
      'username': user.email,
      'password': user.password
    };
    return this.http.post<JwtResponse>("http://localhost:8080/authenticate", data, options);
  }

  logout() {
    this.isLoggedIn.next(false);
    localStorage.removeItem('user');
    this.config.loggedIn = false;
    this.router.navigate(['/']);
  }
}
