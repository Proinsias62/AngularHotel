import { Component, OnInit, DoCheck, ViewChild, AfterViewInit, AfterViewChecked, ViewChildren, QueryList, OnDestroy, SkipSelf } from '@angular/core';

//import the interfaces from rooms.ts
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './rooms-list/services/rooms.service';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})

//export the class below and use it in rooms.component.html
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy {

  hotelName = "Kerry Gardens";
  numberOfRooms = 25;

  hideRooms = true;

  title = 'Room List First';

  roomList: RoomList[] = []

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  //roomService = new RoomsService(); Don't use this method, see constructor below

  selectedRoom!: RoomList;


  constructor(@SkipSelf() private roomsService: RoomsService) { }
  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
    console.log("On Destroy Is Called");
  }
  ngAfterViewChecked(): void {
    //throw new Error('Method not implemented.');
    console.log("After View Checked")
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //console.log("OnInit", this.headerComponent);
    this.roomList = this.roomsService.getRooms();
  }

  //Room must follow the shape of the Room
  //interface prescribed in rooms.ts
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 20,
    bookedRooms: 5
  }
  //RoomList interface is described in rooms.ts
  //in this instance it will be an array/object

  ngAfterViewInit(): void {
    //throw new Error('Method not implemented.');
    //console.log("After Init", this.headerComponent);
    this.headerComponent.title = "Rooms View - After Init";
    this.headerChildrenComponent.last.title = "Last Title";
  }

  toggle() {
    console.log("toggling");
    this.hideRooms = !this.hideRooms;
    this.title = this.title.toUpperCase();
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
    console.log(room);
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: "Super Deluxe",
      amenities: "The whole works",
      price: 20000,
      photos:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021'),
      rating: 4.95,
    };
    console.log("ADDING");
    this.roomList = [...this.roomList, room];

  }

  ngDoCheck(): void {
    console.log("On Changes is Called");
  }
}
