import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";
import { User} from "../_models/user";
import { BaseResponse } from "../_models/base.response";
import { Global } from "../_config/global";

@Injectable()
export class AuthService {

  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    private router: Router,
    private config: Global
  ) {}

  login(user: User) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<BaseResponse>(this.config.apiUrl + "/user/login", user, options);
  }

  logout() {
    this.isLoggedIn.next(false);
    localStorage.removeItem('user');
    this.config.loggedIn = false;
    this.router.navigate(['/']);
  }
}
