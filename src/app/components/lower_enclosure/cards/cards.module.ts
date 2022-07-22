import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LedsModule } from '../../shared/leds/leds.module';

import { CardAluArithmeticComponent } from './alu/card_alu_arith.component';
import { CardAluControlComponent } from './alu/card_alu_ctrl.component';
import { CardAluLogicComponent } from './alu/card_alu_logic.component';
import { CardControlAComponent } from './control/card_control_a.component';
import { CardControlBComponent } from './control/card_control_b.component';
import { CardIncrementerAComponent } from './incrementer/card_incrementer_a.component';
import { CardIncrementerBComponent } from './incrementer/card_incrementer_b.component';
import { CardDecoderComponent } from './decoder/card_decoder.component';
import { CardMemoryAComponent } from './memory/card_memory_a.component';
import { CardMemoryBComponent } from './memory/card_memory_b.component';
import { CardRegisterADComponent } from './registers/card_register_ad.component';
import { CardRegisterBCComponent } from './registers/card_register_bc.component';
import { CardRegisterIComponent } from './registers/card_register_i.component';
import { CardRegisterPCComponent } from './registers/card_register_pc.component';
import { CardSequencerAComponent } from './sequencer/card_sequencer_a.component';
import { CardSequencerBComponent } from './sequencer/card_sequencer_b.component';
import { CardRegisterJComponent } from './registers/card_register_j.component';
import { CardRegisterMComponent } from './registers/card_register_m.component';
import { CardRegisterXYComponent } from './registers/card_register_xy.component';

@NgModule({
  declarations: [
    CardAluArithmeticComponent,
    CardAluControlComponent,
    CardAluLogicComponent,
    CardControlAComponent,
    CardControlBComponent,
    CardDecoderComponent,
    CardIncrementerAComponent,
    CardIncrementerBComponent,
    CardMemoryAComponent,
    CardMemoryBComponent,
    CardRegisterADComponent,
    CardRegisterBCComponent,
    CardRegisterJComponent,
    CardRegisterMComponent,
    CardRegisterIComponent,
    CardRegisterPCComponent,
    CardRegisterXYComponent,
    CardSequencerAComponent,
    CardSequencerBComponent
  ],
  exports: [
    CardAluArithmeticComponent,
    CardAluControlComponent,
    CardAluLogicComponent,
    CardControlAComponent,
    CardControlBComponent,
    CardDecoderComponent,
    CardIncrementerAComponent,
    CardIncrementerBComponent,
    CardMemoryAComponent,
    CardMemoryBComponent,
    CardRegisterADComponent,
    CardRegisterBCComponent,
    CardRegisterIComponent,
    CardRegisterJComponent,
    CardRegisterMComponent,
    CardRegisterPCComponent,
    CardRegisterXYComponent,
    CardSequencerAComponent,
    CardSequencerBComponent
  ],
  imports: [
    CommonModule,
    LedsModule
  ]
})
export class CardsModule { }
