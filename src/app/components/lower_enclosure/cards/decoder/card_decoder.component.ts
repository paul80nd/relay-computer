import { Component, Input } from '@angular/core';

import { OperationLines } from '../../../../model/bus/bus_part_lines';
import { IDecoderCard } from '../../../../model/cards/decoder.card';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-card-decoder]',
  templateUrl: './card_decoder.component.svg'
})

export class CardDecoderComponent {

  aluLine = OperationLines.IALU;
  setLine = OperationLines.ISET;
  mv8Line = OperationLines.IMV8;
  gtoLine = OperationLines.IGTO;

  @Input() card!: IDecoderCard;

}
