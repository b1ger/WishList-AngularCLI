import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Global } from "../_config/global";
import { CookieService } from "ngx-cookie-service";
import { UserService } from "../user/user.service";
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: 'auth.component.html'
})
export class AuthComponent implements OnInit {

  loginForm: FormGroup;
  socialUser: SocialUser;
  loggedIn: boolean;

  authError: boolean = false;

  constructor(
    private loginService: AuthService,
    private userService: UserService,
    private authService: SocialAuthService,
    private http: HttpClient,
    private router: Router,
    private config: Global,
    private cookieService: CookieService
  ) {}

  login() {
    if (this.loginForm.invalid) {
      return;
    }
    this.loginService.login(this.loginForm.value).subscribe(
      resp => {
        if (resp.status == "OK") {
          this.config.loggedIn = true;
          this.cookieService.set("jwtBearerToken", resp.jwttoken);
          this.userService.getUser(this.loginForm.value).subscribe(
            resp => {
              console.log(resp);
              if (resp.status == 'OK') {
                localStorage.setItem('user', JSON.stringify(resp.results));
                this.config.loggedIn = true;
                this.config.isAuthPage = false;
                this.config.setUser();
                this.router.navigate(['/']);
              }
            }
          );
          this.authError = false;
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
    this.authService.authState.subscribe((user) => {
      this.socialUser = user;
      this.loggedIn = (user != null);
      console.log(this.socialUser)
    });
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

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOutSocial(): void {
    this.authService.signOut();
  }
}
