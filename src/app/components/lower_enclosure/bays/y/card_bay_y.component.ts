import { Component, Input } from '@angular/core';

import { IYBackplane } from '@paul80nd/relay-computer-model';
import { CardRegisterJComponent } from '../../cards/registers/card_register_j.component';
import { CardRegisterMComponent } from '../../cards/registers/card_register_m.component';
import { CardRegisterXYComponent } from '../../cards/registers/card_register_xy.component';
import { CardMemoryAComponent } from '../../cards/memory/card_memory_a.component';
import { CardMemoryBComponent } from '../../cards/memory/card_memory_b.component';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
    selector: '[rc-card-bay-y]',
    templateUrl: 'card_bay_y.component.svg',
    imports: [CardRegisterJComponent, CardRegisterMComponent, CardRegisterXYComponent, CardMemoryAComponent, CardMemoryBComponent]
})

export class CardBayYComponent {

  @Input() backplane!: IYBackplane;

}
