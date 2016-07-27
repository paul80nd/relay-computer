import { Component, Input } from "@angular/core";

import { BitValue } from "../../model/bit_value";

import { svgTemplate } from "./alu_op_llb.svg";

@Component({
    selector: "[rc-alu-op-llb]",
    template: svgTemplate,
})

export class AluOperationLedLightBarComponent  {

    @Input() public value: BitValue;
    @Input() public description: string;
    @Input() public color: string;
    @Input() public bitTarget: number;

}
