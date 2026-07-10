import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import { BitValue } from '@paul80nd/relay-computer-model';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-alu-op-llb]',
  templateUrl: 'alu_op_llb.component.svg',
  changeDetection: ChangeDetectionStrategy.Eager
})

export class AluOperationLedLightBarComponent {

  readonly value = input.required<BitValue>();
  readonly description = input.required<string>();
  readonly color = input.required<string>();
  readonly bitTarget = input.required<number>();

}
