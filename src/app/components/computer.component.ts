import { Component, input } from '@angular/core';
import { IComputer } from '@paul80nd/relay-computer-model'
import { DisplayAComponent } from './upper_enclosure/displays/display_a/display_a.component';
import { DisplayBComponent } from './upper_enclosure/displays/display_b/display_b.component';
import { ControlSwitchesComponent } from './upper_enclosure/control_switches/control_switches.component';
import { CardBayWComponent } from './lower_enclosure/bays/w/card_bay_w.component';
import { CardBayXComponent } from './lower_enclosure/bays/x/card_bay_x.component';
import { CardBayYComponent } from './lower_enclosure/bays/y/card_bay_y.component';
import { CardBayZComponent } from './lower_enclosure/bays/z/card_bay_z.component';
import { StateViewComponent } from './state_view/state_view.component';

@Component({
  selector: 'rc-computer',
  templateUrl: './computer.component.svg',
  imports: [DisplayAComponent, DisplayBComponent, ControlSwitchesComponent, CardBayWComponent, CardBayXComponent, CardBayYComponent, CardBayZComponent, StateViewComponent]
})

export class ComputerComponent {

  readonly computer = input.required<IComputer>();

}
