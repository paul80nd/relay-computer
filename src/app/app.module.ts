import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';

import { ArchitectureDiagramModule } from './components/archdiag/archdiag.module';
import { ComputerModule } from './components/computer.module';
import { DocumentationModule } from './components/docs/docs.module';
import { InstructionSetModule } from './components/instrset/instrset.module';

import { ClarityModule } from '@clr/angular';

import {
  ClarityIcons,
  angleIcon,
  clockIcon,
  uploadCloudIcon,
  flaskIcon,
  helpInfoIcon,
  libraryIcon,
  listIcon,
  rulerPencilIcon
} from '@cds/core/icon';

ClarityIcons.addIcons(angleIcon, clockIcon, flaskIcon, uploadCloudIcon, helpInfoIcon, libraryIcon, listIcon, rulerPencilIcon);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    ArchitectureDiagramModule,
    ComputerModule,
    DocumentationModule,
    InstructionSetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
