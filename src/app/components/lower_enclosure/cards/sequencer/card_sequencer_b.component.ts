import { Component, Input } from '@angular/core';

import { AbortLines } from '../../../../model/bus/bus_part_lines';
import { ISequencerCard } from '../../../../model/cards/sequencer.card';

@Component({
  selector: '[rc-card-sequencer-b]',
  templateUrl: 'card_sequencer_b.component.svg'
})

export class CardSequencerBComponent {

  at08Line = AbortLines.AT08;
  at10Line = AbortLines.AT10;
  at12Line = AbortLines.AT12;

  @Input() card!: ISequencerCard;

}
