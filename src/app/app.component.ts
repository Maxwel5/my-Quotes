import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:string[];

  constructor(){
    this.quotes = ['The pessimist sees difficulty in every opportunity', 'When you wake up each morning, you can choose to be happy or choose to be sad', 'You learn more from failure than from success']
  }
}
