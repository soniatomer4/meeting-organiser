import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiurl = 'http://192.168.0.192:9090/login';
  constructor(private http: HttpClient) {}

  gettoken() {
    return localStorage.getItem('token');
  }
  // usersignin(data: any): Observable<any> {
  //   return this.http.post('http://192.168.0.192:9090/login', data);
  // }
  usersignin(data: object) {
    console.log(data);
    // console.log(data);

    try {
      this.http
        .post('http://192.168.0.192:9090/login', JSON.stringify(data))
        .subscribe((res: any) => {
          console.log(res);
          console.log(res['token'], 'no TOKEN');
          localStorage.setItem('token', res['token']);
        });
    } catch (error) {
      console.log('An exception occurred:', error);
    }
  }

  getauthstatus() {
    var token = localStorage.getItem('token');
    if (!!token) {
      return true;
    } else {
      return false;
    }
  }

  loginUser(data: any) {
    return this.http.post(
      'http://192.168.0.192:9090/login',
      JSON.stringify(data)
    );
  }

  /////////////////////////
  token: any;
  getSigninStatus(data: object) {
    this.http
      .post('http://192.168.0.192:9090/login', JSON.stringify(data))
      .subscribe((res: any) => {
        console.log(res);
        console.log(res['token']);
        localStorage.setItem('token', res['token']);
        if (localStorage.getItem('token')) {
          this.token = localStorage.getItem('token');
        }
      });
  }
}
