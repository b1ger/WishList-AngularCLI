import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { Global } from "../_config/global";

@Component({
  selector: 'app-login',
  templateUrl: 'auth.component.html'
})
export class AuthComponent implements OnInit {

  credentials: {username: 'user', password: 'password'};

  constructor(
    private loginService: AuthService,
    private http: HttpClient,
    private router: Router,
    private config: Global
  ) {}

  login() {
    this.config.isAuthPage = false;
  }

  ngOnInit(): void {
    this.config.isAuthPage = true;
  }

  close() {
    this.config.isAuthPage = false;
    this.router.navigate(['/']);
  }

  toCreateAction() {
    this.config.isStartPage = false;
    this.router.navigate(['/list/new'])
  }
}
