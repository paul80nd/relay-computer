import { Component, Input } from '@angular/core';

import { IIncrementerCard } from '../../../../model/cards/incrementer.card';

@Component({
  selector: '[rc-card-incrementer-b]',
  templateUrl: 'card_incrementer_b.component.svg'
})

export class CardIncrementerBComponent {

  @Input() card: IIncrementerCard;

}
