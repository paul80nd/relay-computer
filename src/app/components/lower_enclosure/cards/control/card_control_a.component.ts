import { Component, Input } from '@angular/core';

import { AbortLines, I2BLines, MemoryLines, IControlCard } from '@paul80nd/relay-computer-model';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-card-control-a]',
  templateUrl: './card_control_a.component.svg'
})

export class CardControlAComponent {

  at08Line = AbortLines.AT08;

  i2bLine = I2BLines.I2B;

  merLine = MemoryLines.MER;

  @Input() card!: IControlCard;

}
