import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const appRoutes: Routes =[
  { path: 'signup', component: SignUpComponent},
  { path: 'signin', component: SignInComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ]
})
export class AuthRoutingModule { }
