import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../rest-api.service.ts.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss']
})
export class StudentAddComponent implements OnInit {

  @Input() studentDetails = { id: 0 , fname: '', sname: '', gender: '', course: ''}

 constructor(
   public  restApi: RestApiService, /**containing http request methods */
   public router: Router
 ) { }

  ngOnInit(): void {
  }

  addStudent(){ /**addStudent(dataStudent) */
    this.restApi.createStudent(this.studentDetails).subscribe(
      (data:{}) => {
        console.log("should work " + data)
      }
    )
  }
}
