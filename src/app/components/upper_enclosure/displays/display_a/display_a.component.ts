import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import {
  AluFunctionClLines, ClockLines,
  DataSwitchGateLines, I2BLines,
  MemoryLines, RegAuxLines, IDisplayACard
} from '@paul80nd/relay-computer-model';
import { DisplayAA1AComponent } from './display_a_a1a.component';
import { DisplayAA2AComponent } from './display_a_a2a.component';
import { TactileSwitchComponent } from '../../../shared/switches/tact_switch/tact_switch.component';
import { DisplayAA2BComponent } from './display_a_a2b.component';
import { DisplayAA2CComponent } from './display_a_a2c.component';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
    selector: '[rc-display-a]',
    templateUrl: './display_a.component.svg',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [DisplayAA1AComponent, DisplayAA2AComponent, TactileSwitchComponent, DisplayAA2BComponent, DisplayAA2CComponent]
})
export class DisplayAComponent {

  protected readonly AluFunctionClLines = AluFunctionClLines;
  protected readonly RegAuxLines = RegAuxLines;
  protected readonly DataSwitchGateLines = DataSwitchGateLines;
  protected readonly ClockLines = ClockLines;
  protected readonly I2BLines = I2BLines;
  protected readonly MemoryLines = MemoryLines;

  readonly card = input.required<IDisplayACard>();

}
