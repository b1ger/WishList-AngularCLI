import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../_models/user";
import { Global } from "../_config/global";
import { BaseResponse } from "../_models/base.response";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
    private config: Global,
    private cookieService: CookieService
  ) {}

  register(user: User) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<BaseResponse>(this.config.apiUrl + "/user/register", user, options);
  }

  getUser(user: User): Observable<BaseResponse> {
    let jwtBearerToken = this.cookieService.get('jwtBearerToken');
    if (jwtBearerToken === null) {
      return;
    }
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + jwtBearerToken
      })
    };
    return this.http.post<BaseResponse>(this.config.apiUrl + "/user/get", user, options);
  }
}
