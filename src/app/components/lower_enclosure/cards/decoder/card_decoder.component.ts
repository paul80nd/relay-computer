import { Component, Input } from '@angular/core';

import { OperationLines } from '../../../../model/bus/bus_part_lines';
import { IDecoderCard } from '../../../../model/cards/decoder.card';

@Component({
    selector: '[rc-card-decoder]',
    templateUrl: './card_decoder.component.html'
})

export class CardDecoderComponent {

    aluLine = OperationLines.IALU;
    setLine = OperationLines.ISET;
    mv8Line = OperationLines.IMV8;

    @Input() card: IDecoderCard;

}
