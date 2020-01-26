import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentProfileModel } from './student-profile-model';

@Injectable({
  providedIn: 'root'
})
export class StudProfileServiceService {

  constructor(private httpclientObejct:HttpClient) { }

  updateProfile(profile_data: StudentProfileModel):Observable<any>
  {
    let url = "http://localhost:9900/updateProfile";
    return this.httpclientObejct.post(url,profile_data);
  }

  getProfile(studentNumber: number): Observable<any>
  {
    let url = "http://localhost:9900/getProfile?serial_number=" + studentNumber;
    return this.httpclientObejct.get(url);
  }

}
