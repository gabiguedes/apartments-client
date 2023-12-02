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
