import { Component } from '@angular/core';
import { Quote } from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:quote = [
    {quote:'', author:''}
    {quote:'', author:''}
    {quote:'', author:''}
    {quote:'', author:''}
    {quote:'', author:''}
  ];

  constructor(){
    this.quotes = ['The pessimist sees difficulty in every opportunity', 'When you wake up each morning, you can choose to be happy or choose to be sad', 'You learn more from failure than from success']
  }
}
