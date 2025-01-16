import { NgModule } from '@angular/core';

import { SwitchesModule } from '../../shared/switches/switches.module';

import { ControlSwitchesComponent } from './control_switches.component';

@NgModule({
    exports: [ControlSwitchesComponent],
    imports: [SwitchesModule, ControlSwitchesComponent]
})
export class ControlSwitchesModule { }
