import { Component, Input, input } from '@angular/core';
import { BitValue, CardPart } from '@paul80nd/relay-computer-model';
import { NgClass } from '@angular/common';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-tact-switch]',
  templateUrl: 'tact_switch.component.svg',
  imports: [NgClass]
})

export class TactileSwitchComponent {

  readonly part = input.required<CardPart>();
  readonly valueIn = input.required<BitValue>();
  @Input() description!: [string, string?];
  readonly color = input.required<string>();
  readonly bitTarget = input.required<number>();

  flipBit() {
    this.part().value = this.part().value.flipBit(this.bitTarget());
  }
}
