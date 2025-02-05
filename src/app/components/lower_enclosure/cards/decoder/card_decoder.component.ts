import { Component, input } from '@angular/core';

import { OperationLines, IDecoderCard } from '@paul80nd/relay-computer-model';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-card-decoder]',
  templateUrl: './card_decoder.component.svg',
  standalone: true
})

export class CardDecoderComponent {

  aluLine = OperationLines.IALU;
  setLine = OperationLines.ISET;
  mv8Line = OperationLines.IMV8;
  gtoLine = OperationLines.IGTO;
  mscLine = OperationLines.IMSC;

  readonly card = input.required<IDecoderCard>();

}
