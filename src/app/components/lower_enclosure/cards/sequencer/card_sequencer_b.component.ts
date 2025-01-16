import { Component, input } from '@angular/core';
import { AbortLines, ISequencerCard } from '@paul80nd/relay-computer-model';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-card-sequencer-b]',
  templateUrl: 'card_sequencer_b.component.svg'
})

export class CardSequencerBComponent {

  at08Line = AbortLines.AT08;
  at10Line = AbortLines.AT10;
  at12Line = AbortLines.AT12;

  readonly card = input.required<ISequencerCard>();
}
