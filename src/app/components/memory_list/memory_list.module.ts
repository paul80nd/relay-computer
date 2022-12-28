import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemoryListComponent } from './memory_list.component';

import { HexPipe } from './hex.pipe';
import { DecPipe } from './dec.pipe';
import { BinPipe } from './bin.pipe';

@NgModule({
  declarations: [
    MemoryListComponent,
    BinPipe,
    DecPipe,
    HexPipe
  ],
  exports: [
    MemoryListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MemoryListModule { }
