import { Component, Input } from "@angular/core";

import { IXBackplane } from "../model/backplanes";

import { CardRegisterIComponent } from "./cards/card_register_i.component";

@Component({
  directives: [CardRegisterIComponent],
  selector: "[card-bay-x]",
  templateUrl: "svg/card_bay_x.component.svg",
})

export class CardBayXComponent {

  @Input()
  public backplane: IXBackplane;

}
