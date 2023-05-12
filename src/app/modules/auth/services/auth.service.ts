import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthTokens } from 'src/app/shared/models/auth/auth-tokens';
import { SignInUser } from 'src/app/shared/models/auth/sign-in-user';
import { SignUpUser } from 'src/app/shared/models/auth/sign-up-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  signUp(signUpDto: SignUpUser){
    return this.httpClient.post('https://localhost:7130/api/auth/signup', signUpDto)
  }

  signIn(signUpDto: SignInUser) : Observable<AuthTokens>{
    return this.httpClient.post<AuthTokens>('https://localhost:7130/api/auth/login', signUpDto)
  }
}
