import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card';
import { NgIf } from '@angular/common';
import { visitSiblingRenderNodes } from '@angular/core/src/view/util';

@Component({
  selector: 'app-bootstrapcard',
  templateUrl: './bootstrapcard.component.html',
  styleUrls: ['./bootstrapcard.component.css']
})
export class BootstrapcardComponent implements OnInit {
  months = ["January", "February", "March", "April",
    "May", "June", "July", "August", "September",
    "October", "November", "December"];

    available=true;
  cards: Array<Card> = [
    { text: 'Card 1', number: 1 },
    { text: 'Card 2', number: 2 },
    { text: 'Card 3', number: 3 },
    { text: 'Card 4', number: 4 },
    { text: 'Card 5', number: 5 },
    { text: 'Card 6', number: 6 },
    { text: 'Card 7', number: 7 },
    { text: 'Card 8', number: 8 },
    { text: 'Card 9', number: 9 },
    { text: 'Card 10', number: 10 },
  ];

  deleteCard(text)
  {
console.log(text)
  }

  

  constructor() { console.log("i am constuctor"); }

  ngOnInit() {
    console.log("i am onit");
  }

}
