import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { ArchitectureDiagramModule } from './components/archdiag/archdiag.module';
import { CardBaysModule } from './components/lower_enclosure/bays/card_bays.module';
import { ControlSwitchesModule } from './components/upper_enclosure/control_switches/control_switches.module';
import { DisplaysModule } from './components/upper_enclosure/displays/displays.module';
import { DocumentationModule } from './components/docs/docs.module';
import { InstructionSetModule } from './components/instrset/instrset.module';
import { MemoryListModule } from './components/memory_list/memory_list.module';

import { ClarityModule } from '@clr/angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    FormsModule,
    HttpModule,
    ArchitectureDiagramModule,
    BrowserModule,
    CardBaysModule,
    ControlSwitchesModule,
    DisplaysModule,
    DocumentationModule,
    InstructionSetModule,
    MemoryListModule,
    ClarityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
