import { Component, Input } from '@angular/core';

import { IXBackplane } from '@paul80nd/relay-computer-model';
import { CardRegisterIComponent } from '../../cards/registers/card_register_i.component';
import { CardRegisterPCComponent } from '../../cards/registers/card_register_pc.component';
import { CardIncrementerAComponent } from '../../cards/incrementer/card_incrementer_a.component';
import { CardIncrementerBComponent } from '../../cards/incrementer/card_incrementer_b.component';
import { CardClockComponent } from '../../cards/clock/card_clock.component';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
    selector: '[rc-card-bay-x]',
    templateUrl: 'card_bay_x.component.svg',
    imports: [CardRegisterIComponent, CardRegisterPCComponent, CardIncrementerAComponent, CardIncrementerBComponent, CardClockComponent]
})

export class CardBayXComponent {

  @Input() backplane!: IXBackplane;

}
