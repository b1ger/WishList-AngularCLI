import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from './email/email.component';
import {AuthComponent} from './auth/auth.component';
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  { path: 'subscribe', component: EmailComponent },
  { path: 'login', component: AuthComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
