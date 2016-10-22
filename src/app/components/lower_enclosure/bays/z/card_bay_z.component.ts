import { Component, Input } from "@angular/core";

import { IZBackplane } from "../../../../model/backplanes";

import { svgTemplate } from "./card_bay_z.svg";

@Component({
    selector: "[rc-card-bay-z]",
    template: svgTemplate,
})

export class CardBayZComponent {

    @Input() public backplane: IZBackplane;

}
