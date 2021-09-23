import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentDisplayComponent } from './student-display/student-display.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentAddComponent } from './student-add/student-add.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'student-display' },
  { path: 'student-display', component: StudentDisplayComponent },
  { path: 'student-edit/:id', component:  StudentEditComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
