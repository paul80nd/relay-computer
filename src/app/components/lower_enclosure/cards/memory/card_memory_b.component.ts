import { Component, Input } from '@angular/core';

import { IMemoryCard } from '@paul80nd/relay-computer-model';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-card-memory-b]',
  templateUrl: 'card_memory_b.component.svg'
})

export class CardMemoryBComponent {

  @Input() card!: IMemoryCard;

}
