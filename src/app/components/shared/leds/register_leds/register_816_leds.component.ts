import { Component, Input } from '@angular/core';

import { ByteLedsComponent } from './../byte_leds/byte_leds.component';
import { IRegisterYCardPart } from '@paul80nd/relay-computer-model';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  providers: [ByteLedsComponent],
  selector: '[rc-register-816-leds]',
  templateUrl: 'register_816_leds.component.svg'
})

export class Register816LedsComponent {

  @Input() register!: IRegisterYCardPart;
  @Input() descriptionHi!: string;
  @Input() descriptionLo!: string;
}
