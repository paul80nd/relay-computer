import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

import { ArchitectureDiagramModule } from "./archdiag/archdiag.module";
import { CardBaysModule } from "./lower_enclosure/bays/card_bays.module";
import { ControlSwitchesModule } from "./upper_enclosure/control_switches/control_switches.module";
import { DisplaysModule } from "./upper_enclosure/displays/displays.module";
import { InstructionSetModule } from "./instrset/instrset.module";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    ArchitectureDiagramModule,
    BrowserModule,
    CardBaysModule,
    ControlSwitchesModule,
    DisplaysModule,
    InstructionSetModule,
  ],
})

export class AppModule { }
