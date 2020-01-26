import { Component, OnInit } from '@angular/core';
import { StudModuleCotentServiceService } from './stud-module-cotent-service.service';
import { AnswerModel } from './answer-model';
import { LoginModel } from '../../shared/login-page/login-model';
import { Route, Router } from '@angular/router';
import { NavModuleServiceService } from '../side-nav-page/nav-module-service.service';

@Component({
  selector: 'app-module-content-page',
  templateUrl: './module-content-page.component.html',
  styleUrls: ['./module-content-page.component.css']
})
export class ModuleContentPageComponent implements OnInit {
  answer_obj = new AnswerModel();
  questionListObject = [];
  get_active_question_id: number;
  msg_show_value = false;
  msg_to_display: string;
  get_answer_desc: string;
  module_id: number;
  answerListObject = [];
  
  constructor(private stdModuleServiceObejct: StudModuleCotentServiceService,
    private route: Router,
    private navModuleSerObject: NavModuleServiceService) {
    this.questionListObject = [];
    //this.getQuesList(parseInt(localStorage.getItem("mod_id")));
    //this.questionListObject = JSON.parse(localStorage.getItem("question_list"));
   }

   //doubt how we going to manage module id for all question list
  ngOnInit() {
    
    this.getQuesList(parseInt(localStorage.getItem("mod_id")));
    
  
  }

  //need to fixe here
  getQuesList(module_id: number)
  {
    this.questionListObject = [];
    //this.module_id = module_id;
     localStorage.mod_id = JSON.stringify(module_id);
     
   this.navModuleSerObject.getallQuestionListByModuleId(module_id).subscribe(
     (data:any)=>{ 
       console.log("data got from server");
       //alert("data updated successfully");
       if(data.length != 0)
       {
         for(var i=0; i<data.length; i++)
         this.questionListObject[i] = data[i];
       }
      
       
      }    
   ,(error)=>{
     //will display error msgs at proper place ex- in body part
     //this.route.navigate(['**']);
   });
  }
  getAnswerList(qstn_id: number)
  {
    this.answerListObject = [];
    this.get_active_question_id = qstn_id+99;
    this.stdModuleServiceObejct.getAllAnswer(qstn_id).subscribe(
      (data:any)=>{ 
        console.log("data got from server");
        //alert("data updated successfully");
        if(data.length != 0)
        {
        for(var i=0; i<data.length; i++)
         this.answerListObject[i] = data[i];
        }
        else
        {

        }
        
       }    
    ,(error)=>{
      //will display error msgs accordingly
    });
  }

  toggle(question_id:number)
  {
    //alert(question_id+" hello");
    this.get_active_question_id=question_id; 
    this.get_answer_desc = "";
  }

  submitAnswer()
  {
    let login_obj: LoginModel;
    //alert(this.get_answer_desc);
     this.answer_obj.answer_desc = this.get_answer_desc;
    this.answer_obj.question_id = this.get_active_question_id;
    this.answer_obj.ans_create_date = new Date();
    login_obj = JSON.parse(localStorage.getItem("userLoginInfo"));
    this.answer_obj.user_sr_id = login_obj.login_id;
   this.stdModuleServiceObejct.submitAnswer(this.answer_obj).subscribe(
      (data:any)=>{ 
        console.log("data got from server");
        this.msg_to_display = "answer added successfully";
        this.msg_show_value = true;
       this.get_active_question_id = 0;
       }    
    ,(error)=>{
      this.route.navigate(['**']);
    });
  }

  getModuleList()
  {
   
    this.stdModuleServiceObejct.getAllModuleList().subscribe(
      (data:any)=>{ 
        console.log("data got from server");
         
        
       }    
    ,(error)=>{
      this.route.navigate(['**']);
    });
    
  }

}
