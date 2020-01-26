import { Component, OnInit } from '@angular/core';
import { NavModuleServiceService } from '../student-panel/side-nav-page/nav-module-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-teacher-panel',
  templateUrl: './teacher-panel.component.html',
  styleUrls: ['./teacher-panel.component.css']
})
export class TeacherPanelComponent implements OnInit {
  moduleListObject = [];
 
  module_id: number;
  errorMessage: string ;
  errorVar: boolean = false;

  constructor(private navModuleSerObject: NavModuleServiceService,private route : Router ) { }

  ngOnInit() {
    this.getModuleList();
  }
  logout()
  {
    localStorage.clear();
    this.route.navigate(['/login']);
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

}
