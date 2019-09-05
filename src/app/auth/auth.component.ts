import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Global } from "../_config/global";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: 'auth.component.html'
})
export class AuthComponent implements OnInit {

  private loginForm: FormGroup;

  isSubmitted: boolean = false;

  constructor(
    private loginService: AuthService,
    private http: HttpClient,
    private router: Router,
    private config: Global
  ) {}

  login() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loginService.login(this.loginForm.value)
                     .subscribe(
                       data => {
                         console.log(data);
                         if (data.status == 'OK') {
                           localStorage.setItem('user', JSON.stringify(data.results));
                           this.config.isAuthPage = false;
                           this.config.loggedIn = true;
                           this.router.navigate(['/']);
                         } else {
                           this.f.email.setErrors({'error': true});
                           this.f.password.setErrors({'error': true});
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
