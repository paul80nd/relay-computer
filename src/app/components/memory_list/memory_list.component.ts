import { Component, Input } from '@angular/core';

import { IMemoryCard } from '../../model/cards/memory.card';

@Component({
    selector: 'rc-memory-list',
    templateUrl: 'memory_list.component.html',
    styleUrls: ['memory_list.component.css'],
})

export class MemoryListComponent {

    public offset = 0;

    @Input() public card: IMemoryCard;

}