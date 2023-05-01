import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { RoomList } from '../rooms';
import { ChangeDetectionStrategy } from '@angular/compiler';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})

export class RoomsListComponent implements OnInit {

  @Input() rooms: RoomList[] = [];

  @Output() selectedRoom = new EventEmitter<RoomList>();

  //Passes information to the parent component rooms.component
  selectRoom(room: RoomList){
    this.selectedRoom.emit(room);
  }
  ngOnInit(): void {   
  }
  constructor() {};

}
