import { Component, Input } from '@angular/core';

import { ByteLedsComponent } from './../byte_leds/byte_leds.component';
import { IRegisterCardPart } from '../../../../model/cards/parts/register.cardpart';

@Component({
    providers: [ByteLedsComponent],
    selector: '[rc-register-leds]',
    templateUrl: 'register_leds.component.svg'
})

export class RegisterLedsComponent {

    @Input() register: IRegisterCardPart;
    @Input() description: string;
}
