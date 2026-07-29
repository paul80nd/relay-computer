import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { ClockLines, ClockCtrlLines, OperationLines, IDisplayBCard } from '@paul80nd/relay-computer-model';
import { DisplayBConditionComponent } from './display_b_condition.component';
import { DisplayBAluComponent } from './display_b_alu.component';
import { ByteLedLightBarComponent } from '../../../shared/leds/byte_llb/byte_llb.component';
import { DoubleByteLedLightBarComponent } from '../../../shared/leds/byte_llb/dbl_byte_llb.component';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-display-b]',
  templateUrl: './display_b.component.svg',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [DisplayBConditionComponent, DisplayBAluComponent, ByteLedLightBarComponent, DoubleByteLedLightBarComponent]
})
export class DisplayBComponent {

  protected readonly OperationLines = OperationLines;
  protected readonly ClockLines = ClockLines;
  protected readonly ClockCtrlLines = ClockCtrlLines;

  readonly card = input.required<IDisplayBCard>();
}
