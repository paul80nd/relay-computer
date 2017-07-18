import { Component, Input } from '@angular/core';

import {
    AluFunctionClLines, ClockLines,
    DataSwitchGateLines, I2BLines, 
    MemoryLines, RegAuxLines,
} from '../../../../model/bus/bus_part_lines';
import { IDisplayACard } from '../../../../model/cards/display_a.card';

@Component({
    selector: '[rc-display-a]',
    templateUrl: './display_a.component.html',
})
export class DisplayAComponent {

    public clLine: number = AluFunctionClLines.CL;
    public licLine: number = RegAuxLines.LIC;
    public linLine: number = RegAuxLines.LIN;
    public lpcLine: number = RegAuxLines.LPC;
    public sicLine: number = RegAuxLines.SIC;
    public spcLine: number = RegAuxLines.SPC;

    public sdsLine: number = DataSwitchGateLines.SDS;
    public sasLine: number = DataSwitchGateLines.SAS;

    public clkLine: number = ClockLines.CLK;
    public i2bLine: number = I2BLines.I2B;
    public b2mLine: number = MemoryLines.B2M;
    public merLine: number = MemoryLines.MER;
    public mewLine: number = MemoryLines.MEW;

    @Input() public card: IDisplayACard;

}
