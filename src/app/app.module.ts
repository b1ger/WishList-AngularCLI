import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthComponent} from './auth/auth.component';
import { EmailModule} from './email/email.module';
import { AppRoutingModule} from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { Global } from './_config/global';
import { UserService } from './user/user.service';
import { IndexComponent } from './index/index.component';
import { ListModule } from './list/list.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    IndexComponent,
    RegisterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    EmailModule,
    FormsModule,
    ListModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [ AuthService, CookieService, Global, UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
