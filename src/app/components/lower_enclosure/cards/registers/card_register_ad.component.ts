import { Component, Input } from '@angular/core';

import { IRegisterADCard } from '@paul80nd/relay-computer-model';
import { RegisterLedsComponent } from '../../../shared/leds/register_leds/register_leds.component';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
    selector: '[rc-card-register-ad]',
    templateUrl: 'card_register_ad.component.svg',
    standalone: true,
    imports: [RegisterLedsComponent]
})

export class CardRegisterADComponent {

  @Input() card!: IRegisterADCard;

}
