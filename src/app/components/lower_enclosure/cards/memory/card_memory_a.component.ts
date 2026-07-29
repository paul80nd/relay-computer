import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import { MemoryLines, IMemoryCard } from '@paul80nd/relay-computer-model';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-card-memory-a]',
  templateUrl: 'card_memory_a.component.svg',
  changeDetection: ChangeDetectionStrategy.Eager
})

export class CardMemoryAComponent {

  protected readonly MemoryLines = MemoryLines;

  readonly card = input.required<IMemoryCard>();

}
