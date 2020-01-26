import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-panel',
  templateUrl: './student-panel.component.html',
  styleUrls: ['./student-panel.component.css']
})
export class StudentPanelComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute) {
    this.route.parent.params.subscribe(params => console.log(params));
   }

  ngOnInit() {
  }

}
