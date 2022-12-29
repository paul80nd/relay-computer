import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateViewComponent } from './state_view.component';
import { HexPipe } from './hex.pipe';
import { RegisterViewComponent } from './components/register_view.component';

@NgModule({
  declarations: [
    StateViewComponent,
    RegisterViewComponent,
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
