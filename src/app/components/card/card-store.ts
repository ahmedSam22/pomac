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
  newCard(description: string): string {
    const card = new Card();
    card.desc = description;
    return this._addCard(card);
  }
}
