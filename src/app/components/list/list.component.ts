import { Component, Input, OnInit } from '@angular/core';
import { LogicalService } from 'src/app/services/logical.service';
import { CardStore } from '../card/card-store';
import { List } from './list';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
})
export class ListComponent implements OnInit {
  constructor(public logic : LogicalService) {}
  @Input() list: List;
  @Input() cardStore: CardStore;
  displayAddCard = false;
  ngOnInit(): void {}
  allowDrop($event: any) {
    $event.preventDefault();
  }
  drop($event: any) {
    $event.preventDefault();
    const data = $event.dataTransfer.getData('text');
    let target = $event.target;
    const targetClassName = target.className;
    while (target.className !== 'list') {
      target = target.parentNode;
    }
    target = target.querySelector('.cards');
    if (targetClassName === 'card') {
      $event.target.parentNode.insertBefore(
        document.getElementById(data),
        $event.target
      );
    } else if (targetClassName === 'list__title') {
      if (target.children.length) {
        target.insertBefore(document.getElementById(data), target.children[0]);
      } else {
        target.appendChild(document.getElementById(data));
      }
    } else {
      target.appendChild(document.getElementById(data));
    }
  }


  toggleDisplayAddCard() {
    this.displayAddCard = !this.displayAddCard;
  }
}
