import { Component, Input, OnInit } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
})
export class CardComponent implements OnInit {
  constructor() {}
  @Input() card: Card;

  ngOnInit(): void {
    console.log(this.card);
  }
  dragStart(ev:any) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
}
