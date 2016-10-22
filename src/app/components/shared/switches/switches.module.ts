import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ByteSwitchComponent } from "./byte_switch/byte_switch.component";
import { TactileSwitchComponent } from "./tact_switch/tact_switch.component";

@NgModule({
    declarations: [
        ByteSwitchComponent,
        TactileSwitchComponent,
    ],
    exports: [
        ByteSwitchComponent,
        TactileSwitchComponent,
    ],
    imports: [CommonModule],
})
export class SwitchesModule { }
