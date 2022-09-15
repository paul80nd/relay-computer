import { Component, Input } from '@angular/core';

import { IAluLogicCard } from '@paul80nd/relay-computer-model';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-card-alu-logic]',
  templateUrl: './card_alu_logic.component.svg'
})

export class CardAluLogicComponent {

  @Input() card!: IAluLogicCard;

}
