import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { IRegisterCardPart } from '@paul80nd/relay-computer-model'
import { ByteLedsComponent } from '../byte_leds/byte_leds.component';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-register-leds]',
  templateUrl: 'register_leds.component.svg',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [ByteLedsComponent]
})

export class RegisterLedsComponent {

  readonly register = input.required<IRegisterCardPart>();
  readonly description = input.required<string>();
}
