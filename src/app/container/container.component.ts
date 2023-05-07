import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'hinv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, AfterContentInit{

  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;

  constructor(){}
  ngAfterContentInit(): void {
    //throw new Error('Method not implemented.');
    console.log(this.employee)
    this.employee.emplName = "Elaine";
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

}
