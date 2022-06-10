import { Student } from './student/student.model';
import { Component } from '@angular/core';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  students:Student[] =[
   {name: 'luke',isJedi:true,temple:'Coruscant'},
   {name: 'leia',isJedi:false},
   {name: 'Han solo',isJedi:false}
]
}
