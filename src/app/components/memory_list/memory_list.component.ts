import { Component, Input } from '@angular/core';

import { IMemoryCard, IRegisterPCCard } from '@paul80nd/relay-computer-model';

@Component({
  selector: 'rc-memory-list',
  templateUrl: 'memory_list.component.html',
  styleUrls: ['memory_list.component.css']
})

export class MemoryListComponent {

  offset = 0;

  @Input() card!: IMemoryCard;
  @Input() pc!: IRegisterPCCard;

}
