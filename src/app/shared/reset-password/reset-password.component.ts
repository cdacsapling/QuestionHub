import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  newPassword: String;
  confirmPassword: String;

  constructor(private route : Router) { }

  ngOnInit() {
  }

  resetPassword()
  {
    if(this.newPassword == this.confirmPassword)
    {
     // alert("password updated");
      this.route.navigate(['login']);
    }
    
  }

}
