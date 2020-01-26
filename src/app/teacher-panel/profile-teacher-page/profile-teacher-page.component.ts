import { Component, OnInit } from '@angular/core';
import { TeacherProfileServiceService } from './teacher-profile-service.service';
import { TeacherProfileModel } from './teacher-profile-model';
import {Router} from '@angular/router';
import { StudentProfileModel } from '../../student-panel/profile-page/student-profile-model';
import { StudProfileServiceService } from '../../student-panel/profile-page/stud-profile-service.service';
import { LoginModel } from '../../shared/login-page/login-model';
@Component({
  selector: 'app-profile-teacher-page',
  templateUrl: './profile-teacher-page.component.html',
  styleUrls: ['./profile-teacher-page.component.css']
})
export class ProfileTeacherPageComponent implements OnInit {
  profileObject = new StudentProfileModel();
  credential_obj = new LoginModel();
  


  constructor(private profileServiceObejct: StudProfileServiceService, private route : Router) {
    this.credential_obj = JSON.parse(localStorage.getItem("userLoginInfo"));
    this.getTeacherProfile();
   
   }

  ngOnInit() {
  }


   //get req
   getTeacherProfile()
   {
     this.profileServiceObejct.getProfile(this.credential_obj.login_id).subscribe(
       (data:StudentProfileModel)=>{ 
         console.log("data got from server");
         this.profileObject = data;
         this.profileObject.user_password= this.credential_obj.password;
        }    
     ,(error)=>{
       //will display error msgs accordingly
       this.route.navigate(['**']);
     });
    
    }
 
   //post req
 
  updateTeacherProfile()
  {
    this.profileServiceObejct.updateProfile(this.profileObject).subscribe(
      (data:any)=>{ 
        console.log("data got from server");
        this.route.navigate(['teacherModuleContent']); 
       // this.route.navigate(['teacherPanel'+this.credential_obj.login_id+'teacherModuleContent']);
       }    
    ,(error)=>{
      this.route.navigate(['**']);
      //will display error msgs accordingly
    });
  }

}
