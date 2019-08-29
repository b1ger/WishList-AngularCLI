import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../_models/user";
import { Global } from "../_config/global";
import { BaseResponse } from "../_models/base.response";

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
    private config: Global
  ) {}

  register(user: User) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<BaseResponse>(this.config.apiUrl + "/user/register", user, options);
  }
}
