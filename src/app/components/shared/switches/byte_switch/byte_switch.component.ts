import { Component, input } from '@angular/core';
import { CardOutput } from '@paul80nd/relay-computer-model';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-byte-switch]',
  templateUrl: 'byte_switch.component.svg'
})

export class ByteSwitchComponent {

  readonly part = input.required<CardOutput>();

  flipBit(position: number) {
    this.part().value = this.part().value.flipBit(position);
  }
}
