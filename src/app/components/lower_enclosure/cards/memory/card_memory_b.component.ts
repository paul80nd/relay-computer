import { Component, Input } from '@angular/core';

import { IMemoryCard } from '../../../../model/cards/memory.card';

@Component({
    selector: "[rc-card-memory-b]",
    templateUrl: 'card_memory_b.component.html',
})

export class CardMemoryBComponent {

    @Input() public card: IMemoryCard;

}