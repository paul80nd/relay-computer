import { Component, Input } from '@angular/core';

import { IAluArithmeticCard } from '@paul80nd/relay-computer-model';
import { ByteLedsComponent } from '../../../shared/leds/byte_leds/byte_leds.component';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
    selector: '[rc-card-alu-arith]',
    templateUrl: './card_alu_arith.component.svg',
    imports: [ByteLedsComponent]
})

export class CardAluArithmeticComponent {

  @Input() card!: IAluArithmeticCard;

}
