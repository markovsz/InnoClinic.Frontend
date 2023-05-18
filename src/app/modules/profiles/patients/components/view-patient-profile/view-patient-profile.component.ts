import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { PatientsService } from '../../../../../shared/services/patients.service';

@Component({
  selector: 'app-view-patient-profile',
  templateUrl: './view-patient-profile.component.html',
  styleUrls: ['./view-patient-profile.component.scss']
})
export class ViewPatientProfileComponent {
  constructor(private authService: AuthService, private patientsService: PatientsService){
  }

  
}
