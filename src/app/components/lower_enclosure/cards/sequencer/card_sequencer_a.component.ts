import { Component, input } from '@angular/core';
import { AbortLines, ISequencerCard } from '@paul80nd/relay-computer-model';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-card-sequencer-a]',
  templateUrl: 'card_sequencer_a.component.svg'
})

export class CardSequencerAComponent {

  at14Line = AbortLines.AT14;

  readonly card = input.required<ISequencerCard>();
}
