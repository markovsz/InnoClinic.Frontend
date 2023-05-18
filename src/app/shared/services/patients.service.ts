import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientProfile } from '../models/profiles/patients/patient-profile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private httpClient: HttpClient) { }

  getProfile(): Observable<PatientProfile>{
    return this.httpClient.get<PatientProfile>('https://localhost:7130/api/patients/profile')
  }
}
