import { Component, Input } from "@angular/core";

import { IZBackplane } from "../model/backplanes";
import { CardAluControlComponent } from "./cards/card_alu_ctrl.component";
import { CardAluArithmeticComponent } from "./cards/card_alu_arith.component";
import { CardAluLogicComponent } from "./cards/card_alu_logic.component";
import { CardRegisterADComponent } from "./cards/card_register_ad.component";
import { CardRegisterBCComponent } from "./cards/card_register_bc.component";

import { svgTemplate } from "./card_bay_z.svg";

@Component({
    directives: [
        CardRegisterADComponent,
        CardRegisterBCComponent,
        CardAluControlComponent,
        CardAluArithmeticComponent,
        CardAluLogicComponent],
    selector: "[rc-card-bay-z]",
    template: svgTemplate,
})

export class CardBayZComponent {

    @Input()
    public backplane: IZBackplane;

}
