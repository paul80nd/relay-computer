import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { AbortLines, ISequencerCard } from '@paul80nd/relay-computer-model';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-card-sequencer-b]',
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: 'card_sequencer_b.component.svg'
})

export class CardSequencerBComponent {

  protected readonly AbortLines = AbortLines;

  readonly card = input.required<ISequencerCard>();
}
