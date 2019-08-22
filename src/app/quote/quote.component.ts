import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
// import { EventEmitter } from 'events';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input() quote: Quote;

  @Output() isComplete = new EventEmitter<boolean>();

  quotes: Quote[] = [
    new Quote('Change your thoughts and you change your world', 'Max Sim', 'Solos', new Date(2019, 8, 14)),
    new Quote('When you wake up each morning, you can choose to be happy or choose to be sad', 'Audrey Cheng', 'Solos', new Date(2019, 5, 23)),
    new Quote('You learn more from failure than from success', 'Vicky Kam', 'Solos', new Date(2019, 3, 7)),
    new Quote('One life is all we have and we live it as we believe in living it', 'Phillip g', 'Solos', new Date(2018, 11, 18)),
    new Quote('Those who realize their folly are not true fools', 'Salat F', 'Solos', new Date(2019, 2, 14)),
  ];

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Accept to delete ${this.quotes[index].quote}?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  upvotes = 0;
  downvotes = 0;
  timePass = 0;
  tPassed(){
    this.timePass = 0;
  }
  upVote(i){
    this.quotes[i].upvote +=1;
  }
  
  downVote(i){
    this.quotes[i].downvote +=1;
  }
  
  startNum:number
  lastNum:number
  ctr:number
  
  hUpvote(){
  
    this.startNum = 0
    this.lastNum = 0
  
     for(this.ctr=0 ; this.ctr < this.quotes.length; this.ctr++) {
      this.lastNum = this.quotes[this.ctr].upvote;
      if(this.lastNum > this.startNum){
        this.startNum = this.lastNum
      }
    }
        
    return  this.startNum
  }
  

  constructor() { }

  ngOnInit() {
  }

}
