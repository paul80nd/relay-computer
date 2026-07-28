import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import { AbortLines, I2BLines, MemoryLines, IControlCard, AluFunctionClLines } from '@paul80nd/relay-computer-model';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-card-control-a]',
  templateUrl: './card_control_a.component.svg',
  changeDetection: ChangeDetectionStrategy.Eager
})

export class CardControlAComponent {

  protected readonly AbortLines = AbortLines;
  protected readonly AluFunctionClLines = AluFunctionClLines;
  protected readonly I2BLines = I2BLines;
  protected readonly MemoryLines = MemoryLines;

  readonly card = input.required<IControlCard>();

}
