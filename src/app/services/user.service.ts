import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';
import { IUser } from "../interfaces/IUser";
import { Observable, tap } from "rxjs";
import { IUserTokenResponse } from "../interfaces/IUserTokenResponse";
import { environment } from "../environment/environment";

const apiUrl : string = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  requestUser(user: IUser) : Observable<IUserTokenResponse> {
    const headers = new HttpHeaders({
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

        this.router.navigate(['']);
      }));
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

/*  get obterUsuarioLogado(): IUserTokenResponse {
    return localStorage.getItem('user')
      ? JSON.parse(atob(localStorage.getItem('user')))
      : null;
  }*/

  get captureIdLoggedUser(): string | null {
    const id: string|null = localStorage.getItem('id');

    return typeof id === 'string' ? id : null;
  }


  get captureTokenUser(): string|null {
    const tokenJson : string|null = localStorage.getItem('token');

    if (tokenJson) {
      try {
        const tokenObj = JSON.parse(tokenJson);
        const token = tokenObj.token;

        return token || null;
      } catch (error) {
        console.error('Erro ao analisar o token:', error);
        return null;
      }
    }

    return null;
  }

  get logged(): boolean {
    return !!localStorage.getItem('token');
  }

}
