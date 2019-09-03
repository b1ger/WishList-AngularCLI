import {Component, OnInit} from '@angular/core';
import { EmailComponent } from "./email/email.component";
import { CookieService } from "ngx-cookie-service";
import {Global} from "./_config/global";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'WishList';

  constructor(
    private emailComponent: EmailComponent,
    private cookieService: CookieService,
    private config: Global
  ) {}

  ngOnInit(): void {
    this.config.isAuthPage = false;
    this.config.isStartPage = true;
    this.emailComponent.subscribed = this.cookieService.check('emailSubscrubition');
  }

}
