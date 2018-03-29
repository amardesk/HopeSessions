import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrapcard',
  templateUrl: './bootstrapcard.component.html',
  styleUrls: ['./bootstrapcard.component.css']
})
export class BootstrapcardComponent implements OnInit {
  months = ["January", "February", "March", "April",
    "May", "June", "July", "August", "September",
    "October", "November", "December"];


  constructor() { console.log("i am constuctor"); }

  ngOnInit() {
    console.log("i am onit");
  }

}
