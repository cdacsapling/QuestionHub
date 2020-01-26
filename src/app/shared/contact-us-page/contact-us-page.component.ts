import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us-page',
  templateUrl: './contact-us-page.component.html',
  styleUrls: ['./contact-us-page.component.css']
})
export class ContactUsPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
 
  register(){
    
    // const msg="Query Submitted Successfully! We will contact you soon";
    alert("will get back to you soon");
    this.router.navigate(['login']);

  }

}
