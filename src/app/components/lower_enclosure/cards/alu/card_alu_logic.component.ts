import { Component, Input } from '@angular/core';

import { IAluLogicCard } from '../../../../model/cards/alu_logic.card';

@Component({
  selector: '[rc-card-alu-logic]',
  templateUrl: './card_alu_logic.component.svg'
})

export class CardAluLogicComponent {

  @Input() card: IAluLogicCard;

}
