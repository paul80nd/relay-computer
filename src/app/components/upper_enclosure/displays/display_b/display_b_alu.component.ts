import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import {
  AluFunctionClLines,
  AluOperationLines,
  BitValue
} from '@paul80nd/relay-computer-model';
import { AluOperationLedLightBarComponent } from '../../../shared/leds/alu_op_llb/alu_op_llb.component';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
    selector: '[rc-display-b-alu]',
    templateUrl: 'display_b_alu.component.svg',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [AluOperationLedLightBarComponent]
})
export class DisplayBAluComponent {

  protected readonly AluOperationLines = AluOperationLines;
  protected readonly AluFunctionClLines = AluFunctionClLines;

  readonly alu = input.required<BitValue>();
  readonly aluFuncCl = input.required<BitValue>();

}
