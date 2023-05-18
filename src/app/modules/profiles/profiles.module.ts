import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewDoctorsComponent } from './doctors/components/view-doctors/view-doctors.component';
import { ViewPatientsComponent } from './patients/components/view-patients/view-patients.component';
import { ViewPatientProfileComponent } from './patients/components/view-patient-profile/view-patient-profile.component';
import { ViewProfileComponent } from './profile/view-profile/view-profile.component';
import { ViewDoctorProfileComponent } from './doctors/components/view-doctor-profile/view-doctor-profile.component';



@NgModule({
  declarations: [
    ViewDoctorsComponent,
    ViewPatientsComponent,
    ViewPatientProfileComponent,
    ViewProfileComponent,
    ViewDoctorProfileComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ViewDoctorsComponent,
    ViewProfileComponent
  ]
})
export class ProfilesModule { }
