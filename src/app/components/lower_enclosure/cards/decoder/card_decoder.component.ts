import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import { OperationLines, IDecoderCard } from '@paul80nd/relay-computer-model';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-card-decoder]',
  templateUrl: './card_decoder.component.svg',
  changeDetection: ChangeDetectionStrategy.Eager
})

export class CardDecoderComponent {

  protected readonly OperationLines = OperationLines;

  readonly card = input.required<IDecoderCard>();

}
