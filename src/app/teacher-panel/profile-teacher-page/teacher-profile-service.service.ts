import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TeacherProfileModel } from './teacher-profile-model';
import { Observable } from 'rxjs';
import { StudentProfileModel } from '../../student-panel/profile-page/student-profile-model';

@Injectable({
  providedIn: 'root'
})
export class TeacherProfileServiceService {

  constructor(private httpclientObejct:HttpClient) { }

  updateProfTeacher(profile_data: StudentProfileModel):Observable<any>
  {
    let url = "http://localhost:9900/updateProfile";
    return this.httpclientObejct.post(url,profile_data);
  }

  getProfileTeacher(teacherNumber: string): Observable<any>
  {
    let url = "http://localhost:9900/getProfile?serial_number=" + teacherNumber;
    return this.httpclientObejct.get(url);
  }
}
