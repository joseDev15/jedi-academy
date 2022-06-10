import { Student } from './student.model';
import { Component, Input, OnInit, TestabilityRegistry } from '@angular/core';

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  @Input()
  student: Student | undefined;

  constructor() {}

  ngOnInit(): void {}
}
