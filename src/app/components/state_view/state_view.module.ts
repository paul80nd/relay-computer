import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateViewComponent } from './state_view.component';
import { HexPipe } from './hex.pipe';
import { RegisterViewComponent } from './components/register_view.component';
import { DecPipe } from './dec.pipe';

@NgModule({
  declarations: [
    StateViewComponent,
    RegisterViewComponent,
    DecPipe,
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
