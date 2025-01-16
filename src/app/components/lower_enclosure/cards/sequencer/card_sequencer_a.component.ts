import { Component, Input } from '@angular/core';

import { AbortLines, ISequencerCard } from '@paul80nd/relay-computer-model';
import { NgFor } from '@angular/common';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
    selector: '[rc-card-sequencer-a]',
    templateUrl: 'card_sequencer_a.component.svg',
    standalone: true,
    imports: [NgFor]
})

export class CardSequencerAComponent {

  at14Line = AbortLines.AT14;

  @Input() card!: ISequencerCard;

}
