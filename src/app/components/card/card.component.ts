import { Component, Input, OnInit } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() card: Card;
}
