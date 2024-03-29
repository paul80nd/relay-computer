import { Component, Input } from '@angular/core';

import { BitValue } from '@paul80nd/relay-computer-model';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-alu-op-llb]',
  templateUrl: 'alu_op_llb.component.svg'
})

export class AluOperationLedLightBarComponent {

  @Input() value!: BitValue;
  @Input() description!: string;
  @Input() color!: string;
  @Input() bitTarget!: number;

}
