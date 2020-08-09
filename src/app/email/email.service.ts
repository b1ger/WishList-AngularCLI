import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from '../_models/email';

@Injectable()
export class EmailService {

  private url = 'http://localhost:8080/apiwl';

  constructor(private emailRestService: HttpClient) {}

  addEmail(userEmail: string) {
    const data = {
      email: userEmail
    };
    this.emailRestService.post<Email>(this.url + '/subscribe', data).subscribe();
  }
}
