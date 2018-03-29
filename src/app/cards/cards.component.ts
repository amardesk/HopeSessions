import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() text: String;
  @Input() num: number;
  userkey="";
  constructor() {
    console.log("I am a constructor",this.text)
   }

  ngOnInit() {
    console.log(this.text)
  }

}
