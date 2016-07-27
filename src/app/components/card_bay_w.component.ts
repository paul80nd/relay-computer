import { Component, Input } from "@angular/core";

import { CardControlAComponent } from "./cards/card_control_a.component";
import { CardControlBComponent } from "./cards/card_control_b.component";
import { CardDecoderComponent } from "./cards/card_decoder.component";
import { CardSequencerBComponent } from "./cards/card_sequencer_b.component";
import { IWBackplane } from "../model/backplanes";

import { svgTemplate } from "./card_bay_w.svg";

@Component({
    directives: [CardControlAComponent, CardControlBComponent,
        CardDecoderComponent, CardSequencerBComponent],
    selector: "[rc-card-bay-w]",
    template: svgTemplate,
})

export class CardBayWComponent {

    @Input() public backplane: IWBackplane;

}
