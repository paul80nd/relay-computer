import { Component, Input } from "@angular/core";

import { BitValue } from "../../../../model/bit_value";
import { ConditionLines } from "../../../../model/bus/bus_part_lines";

import { svgTemplate } from "./display_b_condition.svg";

@Component({
    selector: "[rc-display-b-condition]",
    template: svgTemplate,
})
export class DisplayBConditionComponent {

    public cyLine = ConditionLines.CY;
    public snLine = ConditionLines.SN;
    public ezLine = ConditionLines.EZ;

    @Input() public value: BitValue;

}
