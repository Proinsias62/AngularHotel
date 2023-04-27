import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})

export class RoomsComponent {

  hotelName = "Kerry Gardens";
  numberofRooms = "25";

  hideRooms = true;

  toggle() {
    console.log("toggle()");
    this.hideRooms = !this.hideRooms;

  }

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 20,
    bookedRooms: 5
  }

  roomList: RoomList[] = []
    
  
  constructor() {}
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.roomList = [
      {
      roomNumber: 1,
      roomType: 'Deluxe',
      amenities: 'air conditioning, TV, Wi-Fi',
      price: 500,
      photos: 'https://www.istockphoto.com/photo/modern-luxury-bedroom-gm1390233984-447267667',
      checkInTime: new Date('04-21-2023'),
      checkOutTime: new Date('04-22-2023'),
      rating: 2.3,
    },
    {
      roomNumber: 2,
      roomType: 'Family',
      amenities: 'air conditioning, TV, Wi-Fi',
      price: 600,
      photos: 'https://www.istockphoto.com/photo/modern-luxury-bedroom-gm1390233984-447267667',
      checkInTime: new Date('04-21-2023'),
      checkOutTime: new Date('04-22-2023'),
      rating: 3.6998,
    },
    {
      roomNumber: 3,
      roomType: 'Standard',
      amenities: 'TV, Wi-Fi',
      price: 400,
      photos: 'https://www.istockphoto.com/photo/modern-luxury-bedroom-gm1390233984-447267667',
      checkInTime: new Date('04-21-2023'),
      checkOutTime: new Date('04-22-2023'),
      rating: 4.45,

    }]
    
  }

}
