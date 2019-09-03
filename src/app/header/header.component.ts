import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {AuthService} from "../auth/auth.service";
import {Global} from "../_config/global";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{

  isLoggedIn$: Observable<boolean>;

  constructor(private authService: AuthService, public config: Global) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  onLogout() {
    this.authService.logout()
  }

}
