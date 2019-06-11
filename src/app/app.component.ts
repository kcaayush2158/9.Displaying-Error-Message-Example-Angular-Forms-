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
  topichasError = true;

  userModel = new User('','rob@gmail.com',2,' default','morning',true);


}
