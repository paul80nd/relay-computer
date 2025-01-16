import { Component, Input } from '@angular/core';

import { IIncrementerCard } from '@paul80nd/relay-computer-model';
import { DoubleByteLedsComponent } from '../../../shared/leds/byte_leds/dbl_byte_leds.component';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
    selector: '[rc-card-incrementer-a]',
    templateUrl: 'card_incrementer_a.component.svg',
    standalone: true,
    imports: [DoubleByteLedsComponent]
})

export class CardIncrementerAComponent {

  @Input() card!: IIncrementerCard;

}
