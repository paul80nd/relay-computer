import { Component, Input } from '@angular/core';

import { CardPart } from '@paul80nd/relay-computer-model';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-byte-switch]',
  templateUrl: 'byte_switch.component.svg'
})

export class ByteSwitchComponent {

  @Input() part!: CardPart;

  flipBit(position: number) {
    this.part.value = this.part.value.flipBit(position);
  }

}
