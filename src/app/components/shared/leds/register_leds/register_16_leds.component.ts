import { Component, Input } from '@angular/core';

import { ByteLedsComponent } from './../byte_leds/byte_leds.component';
import { IRegisterCardPart } from '../../../../model/cards/parts/register.cardpart';

@Component({
  providers: [ByteLedsComponent],
  selector: '[rc-register-16-leds]',
  templateUrl: 'register_16_leds.component.svg'
})

export class Register16LedsComponent {

  @Input() register: IRegisterCardPart;
  @Input() description: string;
}
