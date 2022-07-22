import { Component, Input } from '@angular/core';

import { BitValue } from '../../../../model/bit_value';
import { CardPart } from '../../../../model/cards/card_part';

@Component({
  selector: '[rc-tact-switch]',
  templateUrl: 'tact_switch.component.svg'
})

export class TactileSwitchComponent {

  @Input() part: CardPart;
  @Input() valueIn: BitValue;
  @Input() description: [string, string];
  @Input() color: string;
  @Input() bitTarget: number;

  flipBit() {
    this.part.value = this.part.value.flipBit(this.bitTarget);
  }

}
