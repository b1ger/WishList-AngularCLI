import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  SocialLoginModule,
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthServiceConfig,
} from 'angularx-social-login';

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
    RouterModule,
    SocialLoginModule
  ],
  providers: [
    AuthService,
    CookieService,
    Global,
    UserService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          // {
          //   id: GoogleLoginProvider.PROVIDER_ID,
          //   provider: new GoogleLoginProvider(
          //     'clientId'
          //   ),
          // },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('590300855088731'),
          }
          // {
          //   id: AmazonLoginProvider.PROVIDER_ID,
          //   provider: new AmazonLoginProvider(
          //     'clientId'
          //   ),
          // },
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
