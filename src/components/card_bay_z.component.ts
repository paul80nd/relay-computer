import { Component, Input } from "@angular/core";

import { IZBackplane } from "../model/backplanes";

import { CardRegisterADComponent } from "./cards/card_register_ad.component";
import { CardRegisterBCComponent } from "./cards/card_register_bc.component";
import { CardAluControlComponent } from "./cards/card_alu_ctrl.component";
import { CardAluArithmeticComponent } from "./cards/card_alu_arith.component";
import { CardAluLogicComponent } from "./cards/card_alu_logic.component";

@Component({
    directives: [
        CardRegisterADComponent,
        CardRegisterBCComponent,
        CardAluControlComponent,
        CardAluArithmeticComponent,
        CardAluLogicComponent],
    selector: "[card-bay-z]",
    templateUrl: "svg/card_bay_z.component.svg",
})

export class CardBayZComponent {

    @Input()
    public backplane: IZBackplane;

}
