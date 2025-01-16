import { Component, Input } from '@angular/core';

import { IRegisterJCard } from '@paul80nd/relay-computer-model';
import { Register816LedsComponent } from '../../../shared/leds/register_leds/register_816_leds.component';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
    selector: '[rc-card-register-j]',
    templateUrl: 'card_register_j.component.svg',
    imports: [Register816LedsComponent]
})

export class CardRegisterJComponent {

  @Input() card!: IRegisterJCard;

}
