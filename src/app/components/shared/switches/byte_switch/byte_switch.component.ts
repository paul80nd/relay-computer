import { Component, Input } from '@angular/core';

import { CardPart } from '../../../../model/cards/card_part';

@Component({
    selector: '[rc-byte-switch]',
    templateUrl: 'byte_switch.component.html'
})

export class ByteSwitchComponent {

    @Input() part: CardPart;

    flipBit(position: number) {
        this.part.value = this.part.value.flipBit(position);
    }

}
