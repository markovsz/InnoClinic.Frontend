import { Component, OnInit } from '@angular/core';
import { DoctorsListItem } from 'src/app/shared/models/profiles/doctors/doctors-list-item';
import { DoctorsService } from '../../../../../shared/services/doctors.service';
import { Observable } from 'rxjs';
import { DoctorParams } from 'src/app/shared/models/profiles/doctors/doctor-params';

@Component({
  selector: 'app-view-doctors',
  templateUrl: './view-doctors.component.html',
  styleUrls: ['./view-doctors.component.scss']
})
export class ViewDoctorsComponent implements OnInit {
  doctorsList: Array<DoctorsListItem>
  $doctors: Observable<DoctorsListItem[]>

  constructor(private doctorsService: DoctorsService){
  }

  ngOnInit(): void {
    this.viewDoctors()
  }

  viewDoctors(){
    let params: DoctorParams = {
      firstNameSearch: '',
      lastNameSearch: '',
      middleNameSearch: '',
      officeId: '',
      specializationId: '',
      page: 1,
      size: 10
    }
    this.$doctors = this.doctorsService.get(params)
    this.$doctors.subscribe(res =>{
      this.doctorsList = res
    })
    console.log(this.$doctors)
  }
}
