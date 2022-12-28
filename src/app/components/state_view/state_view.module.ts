import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateViewComponent } from './state_view.component';
import { HexPipe } from './hex.pipe';

@NgModule({
  declarations: [
    StateViewComponent,
    HexPipe
  ],
  exports: [
    StateViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StateViewModule { }
