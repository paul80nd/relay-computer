import { Component, Input } from '@angular/core';

import { IIncrementerCard } from '@paul80nd/relay-computer-model';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-card-incrementer-a]',
  templateUrl: 'card_incrementer_a.component.svg'
})

export class CardIncrementerAComponent {

  @Input() card!: IIncrementerCard;

}
