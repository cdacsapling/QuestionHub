import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionModel } from '../module-content-page/question-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudQstnServiceService {

  constructor(private httpclientObejct:HttpClient) { }

  addQuestionToDb(question_obj: QuestionModel):Observable<any> {
    let url = "http://localhost:9900/addQuestions";
    return this.httpclientObejct.post(url,question_obj);
  }
}
