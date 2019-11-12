import { Component, Input } from '@angular/core';

import { ByteLedsComponent } from './../byte_leds/byte_leds.component';
import { IRegisterCardPart } from '../../../../model/cards/parts/register.cardpart';

@Component({
    providers: [ByteLedsComponent],
    selector: '[rc-register-leds-flip]',
    templateUrl: 'register_leds_flip.component.html'
})

export class RegisterLedsFlipComponent {

    @Input() register: IRegisterCardPart;
    @Input() description: string;
}
