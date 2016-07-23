import { Component } from "@angular/core";
import { IComputer, IComputerFactory, ComputerFactory } from "../model/computer";

import { CardBayWComponent } from "./card_bay_w.component";
import { CardBayXComponent } from "./card_bay_x.component";
import { CardBayYComponent } from "./card_bay_y.component";
import { CardBayZComponent } from "./card_bay_z.component";
import { DisplayAComponent} from "./displays/display_a.component";
import { DisplayBComponent} from "./displays/display_b.component";
import { ControlSwitchesComponent} from "./control_switches.component";
import { ArchitectureDiagramComponent } from "./architecture_diagram.component";
import { InstructionSetComponent } from "./instruction_set.component";

@Component({
    directives: [
        CardBayWComponent, CardBayXComponent, CardBayYComponent, CardBayZComponent,
        DisplayAComponent, DisplayBComponent,
        ControlSwitchesComponent, ArchitectureDiagramComponent,
        InstructionSetComponent],
    selector: "my-app",
    templateUrl: "computer.html",
})

export class AppComponent {

    public computer: IComputer;

    public ngOnInit() {
        let factory: IComputerFactory = new ComputerFactory();
        this.computer = factory.createComputer();
    }

}
