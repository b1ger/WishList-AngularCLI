import { Injectable } from "@angular/core";
import { User } from "../_models/user";

@Injectable()
export class Global {
  apiUrl: string = 'http://localhost:8080/apiwl';
  isAuthPage: boolean = false;
  isStartPage: boolean = false;
  loggedIn: boolean = localStorage.getItem('user') != null;
  user: User = localStorage.getItem('user') ? this.getUser() : null;

  getUser(): User {
    let object = JSON.parse(localStorage.getItem('user'));
    let returnedUser: User = new User();
    returnedUser.id = object['id'];
    returnedUser.email = object['email'];
    returnedUser.firstName = object['firstName'];
    returnedUser.lastName = object['lastName'];
    returnedUser.password = object['password'];
    return returnedUser;
  }

  setUser(): void {
    this.user = this.getUser();
  }

  // TODO
  getBearerToken() {

  }
}
