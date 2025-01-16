import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateViewComponent } from './state_view.component';
import { HexPipe } from './hex.pipe';
import { RegisterViewComponent } from './components/register_view.component';
import { DecPipe } from './dec.pipe';

@NgModule({
    exports: [
        StateViewComponent
    ],
    imports: [
        CommonModule,
        StateViewComponent,
        RegisterViewComponent,
        DecPipe,
        HexPipe
    ]
})
export class StateViewModule { }
