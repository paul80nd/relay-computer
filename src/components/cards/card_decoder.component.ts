import { Component, Input } from "@angular/core";
import { IDecoderCard } from "../../model/cards/decoder.card";
import { OperationLines } from "../../model/bus/bus_part_lines";

import { svgTemplate } from "./card_decoder.svg";

@Component({
    selector: "[card-decoder]",
    template: svgTemplate,
})

export class CardDecoderComponent {

    public aluLine = OperationLines.IALU;
    public setLine = OperationLines.ISET;
    public mv8Line = OperationLines.IMV8;

    @Input()
    public card: IDecoderCard;

}
