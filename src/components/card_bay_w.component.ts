import { Component, Input } from "@angular/core";

import { CardDecoderComponent } from "./cards/card_decoder.component";
import { CardSequencerBComponent } from "./cards/card_sequencer_b.component";

import { IWBackplane } from "../model/backplanes";

@Component({
    directives: [CardDecoderComponent, CardSequencerBComponent],
    selector: "[card-bay-w]",
    templateUrl: "svg/card_bay_w.component.svg",
})

export class CardBayWComponent {

    @Input()
    public backplane: IWBackplane;

}
