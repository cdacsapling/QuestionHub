import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { QuestionModel } from '../module-content-page/question-model';
import { StudQstnServiceService } from './stud-qstn-service.service';
import { NgForm } from '@angular/forms';
import { LoginModel } from '../../shared/login-page/login-model';

@Component({
  selector: 'app-ask-question-content-page',
  templateUrl: './ask-question-content-page.component.html',
  styleUrls: ['./ask-question-content-page.component.css']
})
export class AskQuestionContentPageComponent implements OnInit {
  question_obj = new QuestionModel();
  credential_obj = new LoginModel();
question_desc:string;

  constructor(private askQstnSerObj: StudQstnServiceService, private route: Router) {
   // this.question_obj.module_id = parseInt(localStorage.getItem("mod_id"));
    //alert("module id is "+ this.question_obj.module_id);
   }

  ngOnInit() {
  }

  addQuestion()
  {
   this.question_obj.qstn_create_date = new Date();
    this.question_obj.module_id = parseInt(localStorage.getItem("mod_id"));
    this.credential_obj = JSON.parse(localStorage.getItem("userLoginInfo"));
    this.askQstnSerObj.addQuestionToDb(this.question_obj).subscribe(
      (data:any)=>{ //need to write some code here to show proper error messages
        if(data == 1)
        {
        console.log("data got from server");
        this.route.navigate(['studentPage/'+this.credential_obj.login_id +'/ModuleContent']);
        }
        else
        {
          this.route.navigate(['**']);
        }
       }    
    ,(error)=>{
      this.route.navigate(['**']);
    });
  }
}

