import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  exports: [
    SignUpComponent,
    SignInComponent
  ]
})
export class AuthModule { }
