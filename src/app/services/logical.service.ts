import { Card } from './../components/card/card';
import { Injectable } from '@angular/core';
import { CardStore } from '../components/card/card-store';
import { List } from '../components/list/list';

@Injectable({
  providedIn: 'root',
})
export class LogicalService {
  constructor() {}
  lists:Card[] = []
  cardStore:CardStore
  img: string;
  title: string;
  desc: string;
  date: string;
  users: [];

  addTask() {
    const task = new Card();
    // const cardId = this.cardStore.newCard(this.img,this.title,this.desc,this.date,this.users);
    task.image = this.img
    task.title = this.title
    task.desc = this.desc
    task.date = this.date
    task.users = this.users
    // this.lists.cards.push(task);
      this.lists.push(task)
    console.log(this.lists);
    

  }
}
