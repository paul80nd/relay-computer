import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LedsModule } from '../../shared/leds/leds.module';
import { SwitchesModule } from '../../shared/switches/switches.module';

import { DisplayAComponent } from './display_a/display_a.component';
import { DisplayAA1AComponent } from './display_a/display_a_a1a.component';
import { DisplayAA2CComponent } from './display_a/display_a_a2c.component';
import { DisplayBComponent } from './display_b/display_b.component';
import { DisplayBAluComponent } from './display_b/display_b_alu.component';
import { DisplayBConditionComponent } from './display_b/display_b_condition.component';

@NgModule({
    declarations: [
        DisplayAComponent,
        DisplayAA1AComponent,
        DisplayAA2CComponent,
        DisplayBComponent,
        DisplayBAluComponent,
        DisplayBConditionComponent,
    ],
    exports: [
        DisplayAComponent,
        DisplayBComponent,
    ],
    imports: [
        CommonModule,
        LedsModule,
        SwitchesModule,
    ],
})
export class DisplaysModule { }
