import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestApiService } from '../rest-api.service.ts.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss']
})
export class StudentAddComponent implements OnInit {
  //List of courses to select from
  courses = ["Engineering", "Computer Science", "Medicine", "Education", "Chemistry", "Business Administration"]
  //Gender 
  genderOptions = ["Female", "Male"]
  //Initializing student object variable
  studentDetails!: Student
  
  //Creating FormControls for input fields
   id = new FormControl('', [Validators.required,Validators.minLength(4), Validators.maxLength(4)])
   fname = new FormControl('', [Validators.required])
   sname = new FormControl('', [Validators.required])
   course = new FormControl('', [Validators.required])
   gender = new FormControl('', [Validators.required])


  addForm: FormGroup = this.builder.group({
    id : this.id,
    course : this.course,
    fname : this.fname,
    sname : this.sname,
    gender : this.gender 
  });


 constructor(
   public  restApi: RestApiService, //containing http request methods */
   public router: Router,
   private builder: FormBuilder
 ) { }

  ngOnInit(): void {
  }

  formError = false;

  addStudent(){ /**addStudent(dataStudent) */
    if (this.addForm.invalid){

    }
    else{
          //Adding input values to studentDetails object variable
          this.studentDetails = {
            id: this.id.value, 
            fname: this.fname.value, 
            sname: this.sname.value,
            gender: this.gender.value, 
            course: this.course.value
            }     
      this.restApi.createStudent(this.studentDetails).subscribe(
        (data:{}) => {
          //Refresh page
          location.reload()
        }
      )  
    }
  }

}
