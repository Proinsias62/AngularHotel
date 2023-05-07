import { Injectable } from '@angular/core';
import { RoomList } from '../../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList: RoomList[] = [
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

  constructor() { }

  getRooms() {
    return this.roomList;
  }
}
