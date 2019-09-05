import {Injectable} from "@angular/core";

@Injectable()
export class Global {
  apiUrl: string = 'http://localhost:8080/apiwl';
  isAuthPage: boolean = false;
  isStartPage: boolean = false;
  loggedIn: boolean = localStorage.getItem('user') != null;
}
