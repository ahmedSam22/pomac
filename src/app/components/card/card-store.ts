import { Card } from './card';

export class CardStore {
  cards: any = {};
  lastid = -1;
  _addCard(card: Card) {
    card.id = String(++this.lastid);
    this.cards[card.id] = card;
    return card.id;
  }
  getCard(cardId: Number | any) {
    return this.cards[cardId];
  }
  newCard(
    img: string,
    title: string,
    description: string,
    date: string,
    users: []
  ): string {
    const card = new Card();
    card.image = img;
    card.title = title;
    card.desc = description;
    card.date = date;
    card.users = users;

    return this._addCard(card);
  }
}
