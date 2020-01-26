import { Injectable } from '@angular/core';
import { ModuleModel } from './module-model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NavModuleServiceService {
  module = [{moduleId: 1, moduleName: "Data Structure"},
  {moduleId: 2, moduleName: "C++"},
  {moduleId: 3, moduleName: "Java"},
  {moduleId: 4, moduleName: "DotNet"},
  {moduleId: 5, moduleName: "Html"},
  {moduleId: 6, moduleName: "CSS"},
  {moduleId: 7, moduleName: "javaScript"},
  {moduleId: 8, moduleName: "Angular"},
  {moduleId: 9, moduleName: "NodeJs"},
  {moduleId: 10, moduleName: "Php"},
  {moduleId: 11, moduleName: "Jquery"}
];
  constructor(private httpclientObejct:HttpClient) {
  }
   showAllModules()
   {
    let url = "http://localhost:9900/getAllModules";
    return this.httpclientObejct.get(url);
    
   }

   getallQuestionListByModuleId(mod_id:number)
  {
     let url = "http://localhost:9900/getAllQuestions?mod_id="+mod_id;
     return this.httpclientObejct.get(url);
    
    //return this.questionList;
  }
 
}
