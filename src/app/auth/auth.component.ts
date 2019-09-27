import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Global } from "../_config/global";

@Component({
  selector: 'app-login',
  templateUrl: 'auth.component.html'
})
export class AuthComponent implements OnInit {

  private loginForm: FormGroup;

  authError: boolean = false;

  constructor(
    private loginService: AuthService,
    private http: HttpClient,
    private router: Router,
    private config: Global
  ) {}

  login() {
    if (this.loginForm.invalid) {
      return;
    }
    this.loginService.login(this.loginForm.value)
                     .subscribe(
                       data => {
                         if (data.status == 'OK') {
                           localStorage.setItem('user', JSON.stringify(data.results));
                           this.config.isAuthPage = false;
                           this.config.loggedIn = true;
                           this.authError = false;
                           this.config.setUser();
                           this.router.navigate(['/']);
                         } else {
                           this.authError = true;
                         }
                       }
                     );
  }

  ngOnInit(): void {
    this.config.isAuthPage = true;
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)])
    })
  }

  close() {
    this.config.isAuthPage = false;
    this.router.navigate(['/']);
  }

  toCreateAction() {
    this.config.isStartPage = false;
    this.router.navigate(['/list/new'])
  }

  get f() {
    return this.loginForm.controls;
  }
}
