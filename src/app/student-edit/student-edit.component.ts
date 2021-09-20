import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestApiService } from '../rest-api.service.ts.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  studentData: any = {} 

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.restApi.getStudent(this.id).subscribe(
      (data: {}) => {
        this.studentData = data;
      }
    )
  }

  updateStudent(){
    if(window.confirm("Are you sure you want to save changes?")){
      this.restApi.updateStudent(this.id, this.studentData).subscribe(
        (data: {}) => {
          this.router.navigate(['/student-list'])
        }
      )
    }    
  }
}
