import { Component, Input } from '@angular/core';

import { AbortLines, ISequencerCard } from '@paul80nd/relay-computer-model';
import { NgFor } from '@angular/common';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
    selector: '[rc-card-sequencer-b]',
    templateUrl: 'card_sequencer_b.component.svg',
    standalone: true,
    imports: [NgFor]
})

export class CardSequencerBComponent {

  at08Line = AbortLines.AT08;
  at10Line = AbortLines.AT10;
  at12Line = AbortLines.AT12;

  @Input() card!: ISequencerCard;

}
