
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from './login-model';
import { NgForm } from '@angular/forms';
import { LoginServiceService } from './login-service.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
   credential = new LoginModel();
   errorMsg = false;
  msgPara: string;
  constructor(private loginSerObject:LoginServiceService,
    private route : Router,
    //private router:ActivateRoute
    ) { 
    }

  ngOnInit() {
  }
  logIn()
  {
    console.log(this.credential.login_id+" "+ this.credential.password);
    if(this.credential.login_id != undefined && this.credential.password != undefined)
    {
     
      this.loginSerObject.validateUser(this.credential).subscribe(
        (data:LoginModel)=>{ 
         // console.log(data.userNumber +"data got from server");
         localStorage.removeItem("userLoginInfo");
          localStorage.setItem("userLoginInfo", JSON.stringify(this.credential));
          if(data.role != null)
          {
            if(data.role == "student")
            {
              this.route.navigate(['/studentPage/'+this.credential.login_id]);
            }
            else
            {
              this.route.navigate(['/teacherPanel/'+this.credential.login_id]);
            }
            this.errorMsg = false;
          }
          else
          {
            this.errorMsg = true;
            this.msgPara = "Try Again. Invalid Credential.";
          }
         }    
      ,(error)=>{
        console.log("function is here");
        this.errorMsg = true;
        this.msgPara = "Try Again. Invalid Credential.";
      });
      
    }
    
  }
}
