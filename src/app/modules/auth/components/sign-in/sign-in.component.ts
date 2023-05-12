import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SignInUser } from 'src/app/shared/models/auth/sign-in-user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  
  form = new FormGroup({
    
    email: new FormControl<string>(''),
    password: new FormControl<string>('')
  });

  constructor(private authService: AuthService){
  }

  submit() {
    console.log('submit')
    let signInUser: SignInUser = {
      email: this.form.value.email as string,
      password: this.form.value.password as string
    }
    this.authService.signIn(signInUser)
      .subscribe(e => {
        localStorage.setItem('accessToken', e.accessToken)
        localStorage.setItem('refreshToken', e.refreshToken)
      })
  }
}
