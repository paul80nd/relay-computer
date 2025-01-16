import { Component, Input, input } from '@angular/core';
import { ByteLedsComponent } from './../byte_leds/byte_leds.component';
import { IRegisterYCardPart } from '@paul80nd/relay-computer-model';
import { ByteLedsComponent as ByteLedsComponent_1 } from '../byte_leds/byte_leds.component';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  providers: [ByteLedsComponent],
  selector: '[rc-register-816-leds]',
  templateUrl: 'register_816_leds.component.svg',
  imports: [ByteLedsComponent_1]
})

export class Register816LedsComponent {

  @Input() register!: IRegisterYCardPart;
  readonly descriptionHi = input.required<string>();
  readonly descriptionLo = input.required<string>();
}
