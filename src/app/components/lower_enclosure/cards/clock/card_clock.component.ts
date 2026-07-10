import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import { IClockCard } from '@paul80nd/relay-computer-model';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-card-clock]',
  templateUrl: './card_clock.component.svg',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true
})

export class CardClockComponent {

  readonly card = input.required<IClockCard>();

}
