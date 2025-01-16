import { Component, Input } from '@angular/core';

import { IRegisterPCCard } from '@paul80nd/relay-computer-model';
import { Register16LedsComponent } from '../../../shared/leds/register_leds/register_16_leds.component';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
    selector: '[rc-card-register-pc]',
    templateUrl: 'card_register_pc.component.svg',
    imports: [Register16LedsComponent]
})

export class CardRegisterPCComponent {

  @Input() card!: IRegisterPCCard;

}
