import { Component, Input } from '@angular/core';

import { AbortLines, I2BLines } from '../../../../model/bus/bus_part_lines';
import { IControlCard } from '../../../../model/cards/control.card';

@Component({
    selector: '[rc-card-control-a]',
    templateUrl: './card_control_a.component.html',
})

export class CardControlAComponent {

    public at08Line = AbortLines.AT08;

    public i2bLine = I2BLines.I2B;

    @Input() public card: IControlCard;

}
