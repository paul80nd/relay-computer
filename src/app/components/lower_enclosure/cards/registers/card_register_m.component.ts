import { Component, Input } from '@angular/core';

import { IRegisterMCard } from '@paul80nd/relay-computer-model';
import { Register816LedsComponent } from '../../../shared/leds/register_leds/register_816_leds.component';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
    selector: '[rc-card-register-m]',
    templateUrl: 'card_register_m.component.svg',
    standalone: true,
    imports: [Register816LedsComponent]
})

export class CardRegisterMComponent {

  @Input() card!: IRegisterMCard;

}
