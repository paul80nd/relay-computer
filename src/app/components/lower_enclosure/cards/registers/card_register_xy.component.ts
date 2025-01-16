import { Component, Input } from '@angular/core';

import { IRegisterXYCard } from '@paul80nd/relay-computer-model';
import { Register816LedsComponent } from '../../../shared/leds/register_leds/register_816_leds.component';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
    selector: '[rc-card-register-xy]',
    templateUrl: 'card_register_xy.component.svg',
    imports: [Register816LedsComponent]
})

export class CardRegisterXYComponent {

  @Input() card!: IRegisterXYCard;

}
