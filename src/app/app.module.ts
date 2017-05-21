import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ArchitectureDiagramModule } from './components/archdiag/archdiag.module';
import { CardBaysModule } from './components/lower_enclosure/bays/card_bays.module';
import { ControlSwitchesModule } from './components/upper_enclosure/control_switches/control_switches.module';
import { DisplaysModule } from './components/upper_enclosure/displays/displays.module';
import { InstructionSetModule } from './components/instrset/instrset.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ArchitectureDiagramModule,
    BrowserModule,
    CardBaysModule,
    ControlSwitchesModule,
    DisplaysModule,
    InstructionSetModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
