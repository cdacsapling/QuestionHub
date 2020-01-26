import { Injectable } from '@angular/core';
import { LoginModel } from './login-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private httpclientObejct:HttpClient) { }

validateUser(cred_data: LoginModel):Observable<any>
{
  let url = "http://localhost:9900/checkCredential";
  return this.httpclientObejct.post(url , cred_data);
}




}
