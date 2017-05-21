import { Component, Input } from '@angular/core';

import { IAluArithmeticCard } from '../../../../model/cards/alu_arithmetic.card';

@Component({
    selector: '[rc-card-alu-arith]',
    templateUrl: './card_alu_arith.component.html',
})

export class CardAluArithmeticComponent {

    @Input() public card: IAluArithmeticCard;

}
