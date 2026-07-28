import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import { AluFunctionClLines, RegABCDLines, RegJMXYLines, RegAuxLines, IControlCard } from '@paul80nd/relay-computer-model';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-card-control-b]',
  templateUrl: './card_control_b.component.svg',
  changeDetection: ChangeDetectionStrategy.Eager
})

export class CardControlBComponent {

  protected readonly RegABCDLines = RegABCDLines;
  protected readonly RegJMXYLines = RegJMXYLines;
  protected readonly AluFunctionClLines = AluFunctionClLines;
  protected readonly RegAuxLines = RegAuxLines;

  readonly card = input.required<IControlCard>();

}
