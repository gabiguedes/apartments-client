import { Injectable } from '@angular/core';
import { environment } from "../environment/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { IUser } from "../interfaces/IUser";
import { Observable, tap } from "rxjs";
import { IUserTokenResponse } from "../interfaces/IUserTokenResponse";

const apiUrl : string = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  requestGetToken(user: IUser) : Observable<IUserTokenResponse> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    return this.httpClient.post<any>(apiUrl + "/login", user, { headers }).pipe(
      tap((resp : IUserTokenResponse) => {
        if(!resp.success) return;

        localStorage.setItem('token', btoa(JSON.stringify(resp['token'])));
        localStorage.setItem('user', btoa(JSON.stringify(resp['user'])));
        localStorage.setItem('description', btoa(JSON.stringify(resp['description'])));
        localStorage.setItem('success', btoa(JSON.stringify(resp['success'])));

        this.router.navigate(['']).then(() => console.log("taaahh"));
      }));
  }
}
