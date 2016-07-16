import { Component, Input } from "@angular/core";
import { ISequencerCard } from "../../model/cards/sequencer.card";

import { svgTemplate } from "./card_sequencer_b.svg";

@Component({
    selector: "[card-sequencer-b]",
    template: svgTemplate,
})

export class CardSequencerBComponent {

  @Input()
  public card: ISequencerCard;

}
