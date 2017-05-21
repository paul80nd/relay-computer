import { Component, Input } from '@angular/core';

import { AbortLines } from '../../../../model/bus/bus_part_lines';
import { ISequencerCard } from '../../../../model/cards/sequencer.card';

@Component({
    selector: '[rc-card-sequencer-b]',
    templateUrl: 'card_sequencer_b.component.html',
})

export class CardSequencerBComponent {

    public at08Line = AbortLines.AT08;

    @Input() public card: ISequencerCard;

}
