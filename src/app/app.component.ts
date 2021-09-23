import { Component, OnInit } from '@angular/core';
import { RestApiService } from './rest-api.service.ts.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
/**To get info for cards from database *************/
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
}