import { AfterContentInit, Component, ContentChild, Host, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/rooms-list/services/rooms.service';

@Component({
  selector: 'hinv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  providers: [RoomsService]

})
export class ContainerComponent implements OnInit, AfterContentInit{

  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;

  constructor(@Host() private roomService: RoomsService){}
  ngAfterContentInit(): void {
    //throw new Error('Method not implemented.');
    console.log("BEFORE INIT", this.employee.emplName)
    console.log("AFTER INIT it should change to Elaine")
    console.log(this.employee)
    this.employee.emplName = "Elaine - AFTER INIT";
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

}
