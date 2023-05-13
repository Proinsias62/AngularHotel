import { Component, OnInit, Self } from '@angular/core';
import { RoomsService } from '../rooms/rooms-list/services/rooms.service';

@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  //providers: [RoomsService]
})

//EmployeeComponent is exported and used in container.component.ts
export class EmployeeComponent implements OnInit{

  emplName: string = "John";

  constructor(private roomsService: RoomsService){

  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

}
