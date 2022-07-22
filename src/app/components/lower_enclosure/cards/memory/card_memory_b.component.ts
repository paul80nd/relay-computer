import { Component, Input } from '@angular/core';

import { IMemoryCard } from '../../../../model/cards/memory.card';

@Component({
  selector: '[rc-card-memory-b]',
  templateUrl: 'card_memory_b.component.svg'
})

export class CardMemoryBComponent {

  @Input() card!: IMemoryCard;

}
