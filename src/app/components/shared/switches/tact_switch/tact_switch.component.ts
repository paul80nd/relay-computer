import { Component, Input } from '@angular/core';

import { BitValue, CardPart } from '@paul80nd/relay-computer-model';
import { NgClass, NgIf } from '@angular/common';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
    selector: '[rc-tact-switch]',
    templateUrl: 'tact_switch.component.svg',
    standalone: true,
    imports: [NgClass, NgIf]
})

export class TactileSwitchComponent {

  @Input() part!: CardPart;
  @Input() valueIn!: BitValue;
  @Input() description!: [string, string?];
  @Input() color!: string;
  @Input() bitTarget!: number;

  flipBit() {
    this.part.value = this.part.value.flipBit(this.bitTarget);
  }

}
