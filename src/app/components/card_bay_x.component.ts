import { Component, Input } from "@angular/core";

import { IXBackplane } from "../model/backplanes";
import { CardRegisterIComponent } from "./cards/card_register_i.component";

import { svgTemplate } from "./card_bay_x.svg";

@Component({
  directives: [CardRegisterIComponent],
  selector: "[rc-card-bay-x]",
  template: svgTemplate,
})

export class CardBayXComponent {

  @Input() public backplane: IXBackplane;

}
