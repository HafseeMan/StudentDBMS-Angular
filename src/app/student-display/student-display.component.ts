import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service.ts.service';


@Component({
  selector: 'app-student-display',
  templateUrl: './student-display.component.html',
  styleUrls: ['./student-display.component.scss']
})
export class StudentDisplayComponent implements OnInit {

  Students: any = []
  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit(): void {
    this.loadStudents()
  }

  //Get student list from json
  loadStudents(){
    return this.restApi.getStudents().subscribe(
      (data: {}) => {
        //Load data from json to this local array
        this.Students = data; 
      }
    )
  }

  deleteStudent(id: number){
    if( window.confirm('Are you sure, you want to delete?')){
      this.restApi.deleteStudent(id).subscribe(
        data => {
          this.loadStudents()
        })
    }
   }
}
