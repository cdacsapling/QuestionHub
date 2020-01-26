import { Component, OnInit } from '@angular/core';
import { StudentProfileModel } from './student-profile-model';
import { StudProfileServiceService } from './stud-profile-service.service';
import { NgForm } from '@angular/forms';
import { LoginModel } from '../../shared/login-page/login-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  profileObject =  new StudentProfileModel();
  credential = new LoginModel();
  credential_obj = new LoginModel();

  constructor(private profileServiceObejct: StudProfileServiceService,private route : Router) {
    
    this.credential_obj = JSON.parse(localStorage.getItem("userLoginInfo"));
    this.getStudentProfile();
   }

  ngOnInit() {
  }

  //get req
  getStudentProfile()
  {
    
    this.profileServiceObejct.getProfile(this.credential_obj.login_id).subscribe(
      (data:StudentProfileModel)=>{ 
        console.log(data.user_login_id +"data got from server");
        //alert("data updated successfully");
        this.profileObject = data;
        this.profileObject.user_password= this.credential_obj.password;
       }    
    ,(error)=>{
      this.route.navigate(['**']);
    });
    
  }


  //post req
  updateProf()
  {
    
    this.profileServiceObejct.updateProfile(this.profileObject).subscribe(
      (data:StudentProfileModel)=>{ 
        console.log(data.user_login_id +"data got from server");
         
        this.route.navigate(['studentPage/'+this.credential_obj.login_id+'ModuleContent']);
       }    
    ,(error)=>{
      this.route.navigate(['**']);
    });
    
  }

}
