import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SignUpUser } from 'src/app/shared/models/auth/sign-up-user';
import { AuthService } from '../../../../shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  
  constructor(private authService: AuthService){
  }

  srcResult: any
  fileName: string

  form = new FormGroup({
    email: new FormControl<string>(''),
    password: new FormControl<string>(''),
    reEnteredPassword: new FormControl<string>('')
  });

  submit() {
    console.log('submit')
    let signUpUser: SignUpUser = {
      photo: {
        name: this.fileName,
        base64Value: 
          btoa( new Uint8Array(this.srcResult).reduce((data, byte) => data + String.fromCharCode(byte), ''))
      },
      email: this.form.value.email as string,
      password: this.form.value.password as string,
      reEnteredPassword: this.form.value.reEnteredPassword as string
    }
    this.authService.signUp(signUpUser)
      .subscribe()
  }

  uploadPhoto(event: any){
    const file: File = event.target.files[0]
    this.fileName = file.name
    if (typeof FileReader !== 'undefined') {
      var reader = new FileReader();

      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };

      reader.readAsArrayBuffer(file);
    }
  }
}
