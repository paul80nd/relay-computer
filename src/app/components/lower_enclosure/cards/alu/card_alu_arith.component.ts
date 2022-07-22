import { Component, Input } from '@angular/core';

import { IAluArithmeticCard } from '../../../../model/cards/alu_arithmetic.card';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-card-alu-arith]',
  templateUrl: './card_alu_arith.component.svg'
})

export class CardAluArithmeticComponent {

  @Input() card!: IAluArithmeticCard;

}
