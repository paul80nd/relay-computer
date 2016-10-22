import { Component, Input } from "@angular/core";

import { IXBackplane } from "../../../../model/backplanes";

import { svgTemplate } from "./card_bay_x.svg";

@Component({
  selector: "[rc-card-bay-x]",
  template: svgTemplate,
})

export class CardBayXComponent {

  @Input() public backplane: IXBackplane;

}
