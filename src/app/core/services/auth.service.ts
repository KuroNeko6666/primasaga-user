import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { API } from 'src/app/config/api.config';
import { BaseModel } from 'src/app/shared/models/base.model';
import { LoginModel } from 'src/app/shared/models/login.model';
import { UserModel } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'any'
})
export class AuthService {

  private url = environment.apiUrl
  private path = API.auth

  constructor(
    private http: HttpClient
  ) { }

  login(data: any) : Observable<BaseModel<UserModel>> {
    return this.http.post<BaseModel<UserModel>>((this.url + this.path.login), data)
  }

  register(data: any) : Observable<BaseModel<string>> {
    return this.http.post<BaseModel<string>>((this.url + this.path.register), data)
  }

  // logout(data: any) : Observable<BaseModel<string>> {
  //   return this.http.post<BaseModel<string>>((this.url + this.path.logout), data)
  // }

  check() : boolean{
    console.log(localStorage.getItem("user"));

    if (localStorage.getItem("user") != null) {
      return true
    }
    return false
  }

  logout(): void {
    localStorage.clear()
  }

}
