import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() text: String;
  @Input() num: number;
  @Output() position = new EventEmitter<number>()
  userkey = "";
  constructor() {
    console.log("I am a constructor", this.text)
  }

 

  deleteChild(number) {
    this.position.emit(number)
  }
  ngOnInit() {
    console.log(this.text)
  }

}
