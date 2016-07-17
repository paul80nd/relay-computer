import { Component, Input } from "@angular/core";

import { CardControlAComponent } from "./cards/card_control_a.component";
import { CardControlBComponent } from "./cards/card_control_b.component";
import { CardDecoderComponent } from "./cards/card_decoder.component";
import { CardSequencerBComponent } from "./cards/card_sequencer_b.component";

import { IWBackplane } from "../model/backplanes";

@Component({
    directives: [CardControlAComponent, CardControlBComponent,
        CardDecoderComponent, CardSequencerBComponent],
    selector: "[card-bay-w]",
    templateUrl: "svg/card_bay_w.component.svg",
})

export class CardBayWComponent {

    @Input()
    public backplane: IWBackplane;

}
