import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import { IAluLogicCard } from '@paul80nd/relay-computer-model';
import { ByteStackedLedsComponent } from '../../../shared/leds/byte_stacked_leds/byte_stacked_leds.component';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-card-alu-logic]',
  templateUrl: './card_alu_logic.component.svg',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [ByteStackedLedsComponent]
})

export class CardAluLogicComponent {

  readonly card = input.required<IAluLogicCard>();

}
