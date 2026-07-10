import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { BitValue, CardOutput } from '@paul80nd/relay-computer-model';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-tact-switch]',
  templateUrl: 'tact_switch.component.svg',
  changeDetection: ChangeDetectionStrategy.Eager
})

export class TactileSwitchComponent {

  readonly part = input.required<CardOutput>();
  readonly valueIn = input.required<BitValue>();
  readonly description = input.required<[
    string,
    string?
]>();
  readonly color = input.required<string>();
  readonly bitTarget = input.required<number>();

  flipBit() {
    this.part().value = this.part().value.flipBit(this.bitTarget());
  }
}
