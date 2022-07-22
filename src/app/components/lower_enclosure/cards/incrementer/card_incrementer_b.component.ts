import { Component, Input } from '@angular/core';

import { IIncrementerCard } from '../../../../model/cards/incrementer.card';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-card-incrementer-b]',
  templateUrl: 'card_incrementer_b.component.svg'
})

export class CardIncrementerBComponent {

  @Input() card!: IIncrementerCard;

}
