import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})

//EmployeeComponent is exported and used in container.component.ts
export class EmployeeComponent implements OnInit{

  emplName: string = "John";
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

}
