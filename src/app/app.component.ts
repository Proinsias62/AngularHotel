import { Component } from '@angular/core';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  //template: `<h1>Hello Word from Inline Template</h1>
  //<p>Angular is awesome</p>`,
  styleUrls: ['./app.component.scss']
  //styles: ['h1 {color: blue}']
})
export class AppComponent {
  title = 'hotelinventoryapp';

  role = "Admin";
}
