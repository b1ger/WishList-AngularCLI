import {Component, Injectable, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EmailService} from './email.service';
import {Router} from '@angular/router';
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html'
})
export class EmailComponent implements OnInit {

  public subscribeNews = false;
  public subscribed = false;
  public subscribeNewsForm: FormGroup;

  constructor(
    private emailService: EmailService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  showSubscribeForm() {
    this.subscribeNews = true;
  }

  ngOnInit(): void {
    this.subscribeNewsForm = new FormGroup({
      email: new FormControl('', [Validators.email])
    });
  }

  subscribeEmail() {
    const email = this.subscribeNewsForm.value.email;
    this.emailService.addEmail(email);
    this.subscribed = true;
    this.cookieService.set('emailSubscrubition', 'true', 60 * 60 * 1000 * 30);
    this.subscribeNews = false;
    this.subscribeNewsForm.reset();
    setTimeout( () => {
      this.router.navigate(['/']);
    }, 3000 );
  }
}
