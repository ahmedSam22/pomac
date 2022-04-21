import { Component, OnInit } from '@angular/core';
import { Card } from '../card/card';
import { List } from '../list/list';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass'],
})
export class BoardComponent implements OnInit {
  newList: string = '';
  lists: List[];
  constructor() {}

  ngOnInit(): void {
    this.setMockData();
  }
  setMockData(): void {
    // this.cardStore = new CardStore();
    const lists: List[] = [
      {
        name: 'Tasks',
        cards: [],
      },
      {
        name: 'Done',
        cards: [],
      },
    ];
    this.lists = lists;
  }

  addList() {
    const list = new List();
    list.name = this.newList;
    list.cards = [];
    this.lists.push(list);
    console.log(this.lists);
  }

}
