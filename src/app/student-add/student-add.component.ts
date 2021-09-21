import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestApiService } from '../rest-api.service.ts.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss']
})
export class StudentAddComponent implements OnInit {

  @Input() studentDetails = { id: 0 , fname: '', sname: '', gender: '', course: ''}

  addForm = new FormGroup({
    id : new FormControl('', Validators.required),
    course : new FormControl('', Validators.required),
    fname : new FormControl('', Validators.required),
    sname : new FormControl('', Validators.required),
    gender : new FormControl('', Validators.required)
  });

 constructor(
   public  restApi: RestApiService, //containing http request methods */
   public router: Router
 ) { }

  ngOnInit(): void {
  }

  formError = false;

  addStudent(){ /**addStudent(dataStudent) */

    if (this.addForm.invalid){
      this.formError = true;
    }
    else{
      this.restApi.createStudent(this.studentDetails).subscribe(
        (data:{}) => {
          location.reload()
        }
      )  
    }
    
  }
}
