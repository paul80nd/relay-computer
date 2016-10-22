import { Component, Input } from "@angular/core";

import { IWBackplane } from "../../../../model/backplanes";

import { svgTemplate } from "./card_bay_w.svg";

@Component({
    selector: "[rc-card-bay-w]",
    template: svgTemplate,
})

export class CardBayWComponent {

    @Input() public backplane: IWBackplane;

}
