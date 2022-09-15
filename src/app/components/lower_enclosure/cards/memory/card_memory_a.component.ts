import { Component, Input } from '@angular/core';

import { MemoryLines, IMemoryCard } from '@paul80nd/relay-computer-model';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-card-memory-a]',
  templateUrl: 'card_memory_a.component.svg'
})

export class CardMemoryAComponent {

  b2mLine = MemoryLines.B2M;
  merLine = MemoryLines.MER;
  mewLine = MemoryLines.MEW;

  @Input() card!: IMemoryCard;

}
