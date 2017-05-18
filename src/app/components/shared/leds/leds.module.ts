import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AluOperationLedLightBarComponent } from "./alu_op_llb/alu_op_llb.component";
import { ByteLedsComponent } from "./byte_leds/byte_leds.component";
import { ByteLedLightBarComponent } from "./byte_llb/byte_llb.component";
import { ByteStackedLedsComponent } from "./byte_stacked_leds/byte_stacked_leds.component";
import { DoubleByteLedsComponent } from "./byte_leds/dbl_byte_leds.component";
import { DoubleByteLedLightBarComponent } from "./byte_llb/dbl_byte_llb.component";
import { RegisterLedsComponent } from "./register_leds/register_leds.component";
import { Register16LedsComponent } from "./register_leds/register_16_leds.component";

@NgModule({
    declarations: [
        AluOperationLedLightBarComponent,
        ByteLedsComponent,
        ByteLedLightBarComponent,
        ByteStackedLedsComponent,
        DoubleByteLedsComponent,
        DoubleByteLedLightBarComponent,
        RegisterLedsComponent,
        Register16LedsComponent,
    ],
    exports: [
        AluOperationLedLightBarComponent,
        ByteLedsComponent,
        ByteLedLightBarComponent,
        ByteStackedLedsComponent,
        DoubleByteLedsComponent,
        DoubleByteLedLightBarComponent,
        RegisterLedsComponent,
        Register16LedsComponent,
    ],
    imports: [CommonModule],
})
export class LedsModule { }
