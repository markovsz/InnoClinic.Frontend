import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewDoctorsComponent } from './doctors/components/view-doctors/view-doctors.component';



@NgModule({
  declarations: [
    ViewDoctorsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ViewDoctorsComponent
  ]
})
export class ProfilesModule { }
