import { Component, Input } from '@angular/core';

import { IClockCard } from '@paul80nd/relay-computer-model';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
    selector: '[rc-card-clock]',
    templateUrl: './card_clock.component.svg',
    standalone: true
})

export class CardClockComponent {

  @Input() card!: IClockCard;

}
