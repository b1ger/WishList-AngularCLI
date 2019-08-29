import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmailComponent} from './email.component';
import {ReactiveFormsModule} from '@angular/forms';
import {EmailService} from './email.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    EmailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    EmailComponent
  ],
  bootstrap: [
    EmailComponent
  ],
  providers: [
    EmailService
  ]
})
export class EmailModule { }
