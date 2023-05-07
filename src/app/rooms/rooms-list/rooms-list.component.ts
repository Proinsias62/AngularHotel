import { Component, Input, Output, OnInit, EventEmitter,ChangeDetectionStrategy, OnChanges, SimpleChanges, OnDestroy  } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RoomsListComponent implements OnInit, OnChanges, OnDestroy {

  @Input() rooms: RoomList[] = [];

  @Input() title: string = "";

  @Output() selectedRoom = new EventEmitter<RoomList>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();
    }
    
  }

  //Passes information to the parent component rooms.component
  selectRoom(room: RoomList){
    this.selectedRoom.emit(room);
  }
  ngOnInit(): void {   
  }

  constructor() {}ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
    console.log("On Destroy is Called");
  }
;

}
