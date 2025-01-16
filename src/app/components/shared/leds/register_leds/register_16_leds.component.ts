import { Component, Input, input } from '@angular/core';
import { ByteLedsComponent } from './../byte_leds/byte_leds.component';
import { IRegisterCardPart } from '@paul80nd/relay-computer-model';
import { DoubleByteLedsComponent } from '../byte_leds/dbl_byte_leds.component';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  providers: [ByteLedsComponent],
  selector: '[rc-register-16-leds]',
  templateUrl: 'register_16_leds.component.svg',
  imports: [DoubleByteLedsComponent]
})

export class Register16LedsComponent {

  @Input() register!: IRegisterCardPart;
  readonly description = input.required<string>();
}
