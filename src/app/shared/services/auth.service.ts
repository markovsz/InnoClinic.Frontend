import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthTokens } from 'src/app/shared/models/auth/auth-tokens';
import { SignInUser } from 'src/app/shared/models/auth/sign-in-user';
import { SignUpUser } from 'src/app/shared/models/auth/sign-up-user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserRole } from '../enums/user-role';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  helper = new JwtHelperService();
  isAuth$ = new BehaviorSubject<boolean>(!!localStorage.getItem('accessToken'));
  roles$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  id$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor(private httpClient: HttpClient) {
    this.updateIdAndRole();
   }

  updateIdAndRole(){
    if (localStorage.getItem('accessToken') != null) {
      const token = this.helper.decodeToken(localStorage.getItem('accessToken'));
      this.roles$ = new BehaviorSubject<string>(token.roles);
      this.id$ = new BehaviorSubject<string>(token.sub);
    }
  }
  
  signUp(signUpDto: SignUpUser){
    return this.httpClient.post('https://localhost:7130/api/auth/signup', signUpDto)
  }

  signIn(signUpDto: SignInUser) : Observable<AuthTokens>{
    return this.httpClient.post<AuthTokens>('https://localhost:7130/api/auth/login', signUpDto)
  }

  getRole(): string{
    return this.roles$.value;
  }

  isPatient(){
    return this.getRole() == UserRole.Patient
  }

  isDoctor(){
    return this.getRole() == UserRole.Doctor
  }

  isReceptionist(){
    return this.getRole() == UserRole.Receptionist
  }
}
