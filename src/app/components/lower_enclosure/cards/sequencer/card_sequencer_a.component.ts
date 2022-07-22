import { Component, Input } from '@angular/core';

import { AbortLines } from '../../../../model/bus/bus_part_lines';
import { ISequencerCard } from '../../../../model/cards/sequencer.card';

@Component({
  selector: '[rc-card-sequencer-a]',
  templateUrl: 'card_sequencer_a.component.svg'
})

export class CardSequencerAComponent {

  at14Line = AbortLines.AT14;

  @Input() card!: ISequencerCard;

}
