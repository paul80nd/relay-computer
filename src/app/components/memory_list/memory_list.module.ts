import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemoryListComponent } from './memory_list.component';
import { HexPipe } from './hex.pipe';

@NgModule({
    declarations: [
        MemoryListComponent,
        HexPipe,
    ],
    exports: [
        MemoryListComponent,
    ],
    imports: [
        CommonModule,
    ],
})
export class MemoryListModule { }
