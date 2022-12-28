import { NgModule } from '@angular/core';

import { ComputerComponent } from './computer.component';
import { CardBaysModule } from './lower_enclosure/bays/card_bays.module';
import { StateViewModule } from './state_view/state_view.module';
import { ControlSwitchesModule } from './upper_enclosure/control_switches/control_switches.module';
import { DisplaysModule } from './upper_enclosure/displays/displays.module';

@NgModule({
  declarations: [ComputerComponent],
  imports: [
    CardBaysModule,
    ControlSwitchesModule,
    DisplaysModule,
    StateViewModule
  ],
  exports: [ComputerComponent]
})
export class ComputerModule { }
