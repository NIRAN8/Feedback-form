import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clickMessage = '';
  message = '';

  clickMe() {
    this.clickMessage = 'Please give the feedback!!';
  }
}
