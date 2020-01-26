import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuestionModel } from './question-model';
import { AnswerModel } from './answer-model';
@Injectable({
  providedIn: 'root'
})
export class StudModuleCotentServiceService {
 
  // questionList = [
  //   {question_id:1, question_desc:"What is Java?"},
  //   {question_id:2, question_desc:"What is Operating System?"},
  //   {question_id:3, question_desc:"What is Exception Handling?"},
  //   {question_id:4, question_desc:"Differnce between final, finally and finalize?"},
  //   {question_id:5, question_desc:"What is Packeges?"}
  // ];
  constructor(private httpclientObejct:HttpClient) { }

  getAllModuleList(): Observable<any>
  {
    let url = "http://localhost:9900/getModules";
    return this.httpclientObejct.get(url);
  }

  submitAnswer(answer: AnswerModel):Observable<any> {
    let url = "http://localhost:9900/addAnswer";
    return this.httpclientObejct.post(url,answer);
  }
  getAllAnswer(qstn_id: number):Observable<any> {
    let url = "http://localhost:9900/getAllAnswer?qstn_id="+qstn_id;
    return this.httpclientObejct.get(url);
  }




}