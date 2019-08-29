import {Component, OnInit} from '@angular/core';
import { EmailComponent } from "./email/email.component";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'WishList';

  constructor(private emailComponent: EmailComponent, private cookieService: CookieService) {}

  ngOnInit(): void {
    this.emailComponent.subscribed = this.cookieService.check('emailSubscrubition');
  }

}
