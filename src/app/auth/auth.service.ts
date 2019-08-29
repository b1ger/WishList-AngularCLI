import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {

  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login() {}

  logout() {
    this.isLoggedIn.next(false);
    this.router.navigate(['/']);
  }
}
