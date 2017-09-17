import { Component, Input } from '@angular/core';

import { MemoryLines } from '../../../../model/bus/bus_part_lines';
import { IMemoryCard } from '../../../../model/cards/memory.card';

@Component({
    selector: '[rc-card-memory-a]',
    templateUrl: 'card_memory_a.component.html',
})

export class CardMemoryAComponent {

    public b2mLine = MemoryLines.B2M;
    public merLine = MemoryLines.MER;
    public mewLine = MemoryLines.MEW;

    @Input() public card: IMemoryCard;

}
