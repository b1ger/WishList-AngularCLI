import {Component} from '@angular/core';
import {AuthService} from './auth.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'auth.component.html'
})
export class AuthComponent {

  credentials: {username: 'user', password: 'password'};

  constructor(
    private loginService: AuthService,
    private http: HttpClient,
    private router: Router
  ) {}

  login() {

  }

}
