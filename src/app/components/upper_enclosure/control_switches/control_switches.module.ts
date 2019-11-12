import { NgModule } from '@angular/core';

import { SwitchesModule } from '../../shared/switches/switches.module';

import { ControlSwitchesComponent } from './control_switches.component';

@NgModule({
    declarations: [ControlSwitchesComponent],
    exports: [ControlSwitchesComponent],
    imports: [SwitchesModule]
})
export class ControlSwitchesModule { }
