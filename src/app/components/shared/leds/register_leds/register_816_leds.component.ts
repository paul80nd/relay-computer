import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { IRegisterYCardPart } from '@paul80nd/relay-computer-model';
import { ByteLedsComponent } from '../byte_leds/byte_leds.component';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-register-816-leds]',
  templateUrl: 'register_816_leds.component.svg',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [ByteLedsComponent]
})

export class Register816LedsComponent {

  readonly register = input.required<IRegisterYCardPart>();
  readonly descriptionHi = input.required<string>();
  readonly descriptionLo = input.required<string>();
}
