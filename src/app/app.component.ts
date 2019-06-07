import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf';
  topics =['java','javascript'];
  userModel = new User('rob','rob@gmail.com',23293,' sdasd','morning',true);

}
