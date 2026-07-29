import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import {
  AluFunctionClLines, AluOperationLines,
  ConditionLines, IAluControlCard
} from '@paul80nd/relay-computer-model';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-card-alu-ctrl]',
  templateUrl: './card_alu_ctrl.component.svg',
  changeDetection: ChangeDetectionStrategy.Eager
})

export class CardAluControlComponent {

  protected readonly ConditionLines = ConditionLines;
  protected readonly AluOperationLines = AluOperationLines;
  protected readonly AluFunctionClLines = AluFunctionClLines;

  readonly card = input.required<IAluControlCard>();
}
