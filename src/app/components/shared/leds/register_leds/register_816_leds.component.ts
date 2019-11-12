import { Component, Input } from '@angular/core';

import { ByteLedsComponent } from './../byte_leds/byte_leds.component';
import { IRegisterYCardPart } from '../../../../model/cards/parts/register_y.cardpart';

@Component({
    providers: [ByteLedsComponent],
    selector: '[rc-register-816-leds]',
    templateUrl: 'register_816_leds.component.html'
})

export class Register816LedsComponent {

    @Input() register: IRegisterYCardPart;
    @Input() descriptionHi: string;
    @Input() descriptionLo: string;
}
