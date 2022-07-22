import { Component, Input } from '@angular/core';

import { MemoryLines } from '../../../../model/bus/bus_part_lines';
import { IMemoryCard } from '../../../../model/cards/memory.card';

@Component({
  selector: '[rc-card-memory-a]',
  templateUrl: 'card_memory_a.component.svg'
})

export class CardMemoryAComponent {

  b2mLine = MemoryLines.B2M;
  merLine = MemoryLines.MER;
  mewLine = MemoryLines.MEW;

  @Input() card: IMemoryCard;

}
