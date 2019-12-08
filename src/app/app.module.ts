import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { ArchitectureDiagramModule } from './components/archdiag/archdiag.module';
import { ComputerModule } from './components/computer.module';
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
    HttpClientModule,
    ArchitectureDiagramModule,
    BrowserModule,
    ComputerModule,
    DocumentationModule,
    InstructionSetModule,
    MemoryListModule,
    ClarityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
