import { Component, Input } from '@angular/core';

import { IZBackplane } from '@paul80nd/relay-computer-model';
import { CardRegisterADComponent } from '../../cards/registers/card_register_ad.component';
import { CardRegisterBCComponent } from '../../cards/registers/card_register_bc.component';
import { CardAluControlComponent } from '../../cards/alu/card_alu_ctrl.component';
import { CardAluArithmeticComponent } from '../../cards/alu/card_alu_arith.component';
import { CardAluLogicComponent } from '../../cards/alu/card_alu_logic.component';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
    selector: '[rc-card-bay-z]',
    templateUrl: 'card_bay_z.component.svg',
    standalone: true,
    imports: [CardRegisterADComponent, CardRegisterBCComponent, CardAluControlComponent, CardAluArithmeticComponent, CardAluLogicComponent]
})

export class CardBayZComponent {

  @Input() backplane!: IZBackplane;

}
