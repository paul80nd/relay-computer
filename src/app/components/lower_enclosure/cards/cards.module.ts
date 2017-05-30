import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LedsModule } from '../../shared/leds/leds.module';

import { CardAluArithmeticComponent } from './alu/card_alu_arith.component';
import { CardAluControlComponent } from './alu/card_alu_ctrl.component';
import { CardAluLogicComponent } from './alu/card_alu_logic.component';
import { CardControlAComponent } from './control/card_control_a.component';
import { CardControlBComponent } from './control/card_control_b.component';
import { CardIncrementerBComponent } from './incrementer/card_incrementer_b.component';
import { CardDecoderComponent } from './decoder/card_decoder.component';
import { CardRegisterADComponent } from './registers/card_register_ad.component';
import { CardRegisterBCComponent } from './registers/card_register_bc.component';
import { CardRegisterIComponent } from './registers/card_register_i.component';
import { CardRegisterPCComponent } from './registers/card_register_pc.component';
import { CardSequencerBComponent } from './sequencer/card_sequencer_b.component';

@NgModule({
    declarations: [
        CardAluArithmeticComponent,
        CardAluControlComponent,
        CardAluLogicComponent,
        CardControlAComponent,
        CardControlBComponent,
        CardDecoderComponent,
        CardIncrementerBComponent,
        CardRegisterADComponent,
        CardRegisterBCComponent,
        CardRegisterIComponent,
        CardRegisterPCComponent,
        CardSequencerBComponent,
    ],
    exports: [
        CardAluArithmeticComponent,
        CardAluControlComponent,
        CardAluLogicComponent,
        CardControlAComponent,
        CardControlBComponent,
        CardDecoderComponent,
        CardIncrementerBComponent,
        CardRegisterADComponent,
        CardRegisterBCComponent,
        CardRegisterIComponent,
        CardRegisterPCComponent,
        CardSequencerBComponent,
    ],
    imports: [
        CommonModule,
        LedsModule,
    ],
})
export class CardsModule { }
