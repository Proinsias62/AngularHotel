import { AfterViewInit, Component, ElementRef, Inject, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './rooms/rooms-list/services/logger.service';
import { localStorageToken } from './localstorage.token';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  //template: `<h1>Hello Word from Inline Template</h1>
  //<p>Angular is awesome</p>`,
  styleUrls: ['./app.component.scss']
  //styles: ['h1 {color: blue}']
})
export class AppComponent implements OnInit, AfterViewInit {


  title = 'hotelinventoryapp';

  @ViewChild('name', { static: true }) name!: ElementRef;
  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  constructor(@Optional() private loggerService: LoggerService, 
  @Inject(localStorageToken) private localStorage: Storage){}

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.loggerService?.Log('AppComponent.ngOnInit(Francis)')
    //this.name.nativeElement.innerText = "Francis Hotel";
    this.localStorage.setItem('name', 'Hilton Tralee');
  }

  ngAfterViewInit(): void {
  //   //throw new Error('Method not implemented.');
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 100;
  }

  // //role = "Admin";
}
