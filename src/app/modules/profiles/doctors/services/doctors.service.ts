import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateDoctor } from 'src/app/shared/models/profiles/doctors/create-doctor';
import { DoctorParams } from 'src/app/shared/models/profiles/doctors/doctor-params';
import { DoctorsListItem } from 'src/app/shared/models/profiles/doctors/doctors-list-item';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  constructor(private httpClient: HttpClient) { }

  create(doctor: CreateDoctor){
    this.httpClient.post<string>('https://localhost:7130/api/doctor', doctor)
  }

  get(params: DoctorParams): Observable<DoctorsListItem>{
    const httpParams = new HttpParams();
    Object.entries(params).forEach(e => {
      httpParams.set(e[0].toString(), e[1].toString())
    })

    return this.httpClient.get<DoctorsListItem>('https://localhost:7130/api/doctors', {
      params: httpParams
    })
  }
}
