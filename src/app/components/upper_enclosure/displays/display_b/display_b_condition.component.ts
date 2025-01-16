import { Component, Input } from '@angular/core';

import { BitValue } from '@paul80nd/relay-computer-model';
import { ConditionLines } from '@paul80nd/relay-computer-model';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
    selector: '[rc-display-b-condition]',
    templateUrl: 'display_b_condition.component.svg',
    standalone: true
})
export class DisplayBConditionComponent {

  cyLine = ConditionLines.CY;
  snLine = ConditionLines.SN;
  ezLine = ConditionLines.EZ;

  @Input() value!: BitValue;

}
