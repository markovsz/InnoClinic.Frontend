import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateDoctor } from 'src/app/shared/models/profiles/doctors/create-doctor';
import { DoctorParams } from 'src/app/shared/models/profiles/doctors/doctor-params';
import { DoctorsListItem } from 'src/app/shared/models/profiles/doctors/doctors-list-item';
import { DoctorProfile } from '../models/profiles/doctors/doctor-profile';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  constructor(private httpClient: HttpClient) { }

  create(doctor: CreateDoctor){
    this.httpClient.post<string>('https://localhost:7130/api/doctor', doctor)
  }

  get(params: DoctorParams): Observable<DoctorsListItem[]>{
    let httpParams = new HttpParams();

    let pairs = Object.entries(params);
    for(const param of pairs){
      httpParams = httpParams.append(param[0], param[1])
    }

    return this.httpClient.get<DoctorsListItem[]>('https://localhost:7130/api/doctors', {
      params: httpParams
    })
  }

  getProfile(): Observable<DoctorProfile>{
    return this.httpClient.get<DoctorProfile>('https://localhost:7130/api/doctors/profile')
  }
}
