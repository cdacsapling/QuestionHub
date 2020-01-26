import { Component, OnInit } from '@angular/core';
import { ModuleModel } from './module-model';
import { NavModuleServiceService } from './nav-module-service.service';
import { Router } from '@angular/router';

//doubt we will only show askQuestion option on module page not for other pages
@Component({
  selector: 'app-side-nav-page',
  templateUrl: './side-nav-page.component.html',
  styleUrls: ['./side-nav-page.component.css']
})
export class SideNavPageComponent implements OnInit {
  moduleListObject = [];
  questionListObject = [];
  module_id: number;
  errorMessage: string ;
  errorVar: boolean = false;
  constructor(private navModuleSerObject: NavModuleServiceService,private route : Router) { 
    this.module_id = 1;
  }

  ngOnInit() {
    this.getModuleList();
    this.getQuesList(this.module_id);
  }

  getModuleList()
  {
    this.navModuleSerObject.showAllModules().subscribe(
      (data:any)=>{ 
        console.log("data got from server");
        for(var i=0; i< data.length; i++)
        this.moduleListObject[i] = data[i];
        this.errorVar = false;
       }    
    ,(error)=>{
      this.errorMessage = error;
      this.errorVar = true;
    });
  }

  //need to fixe here
   getQuesList(module_id: number)
   {
     //this.module_id = module_id;
      localStorage.mod_id = JSON.stringify(module_id);
      
    this.navModuleSerObject.getallQuestionListByModuleId(module_id).subscribe(
      (data:any)=>{ 
        console.log("data got from server");
        //alert("data updated successfully");
        if(data.length != 0)
        {
          localStorage.removeItem("question_list");
          for(var i=0; i<data.length; i++)
          this.questionListObject[i] = data[i];
          localStorage.setItem("question_list",JSON.stringify(this.questionListObject));
        }
       
        
       }    
    ,(error)=>{
      //will display error msgs at proper place ex- in body part
      this.route.navigate(['**']);
    });
   }
}
