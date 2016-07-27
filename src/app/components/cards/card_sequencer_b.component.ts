import { Component, Input } from "@angular/core";
import { ISequencerCard } from "../../model/cards/sequencer.card";
import { AbortLines } from "../../model/bus/bus_part_lines";
import { svgTemplate } from "./card_sequencer_b.svg";

@Component({
    selector: "[rc-card-sequencer-b]",
    template: svgTemplate,
})

export class CardSequencerBComponent {

  public at08Line = AbortLines.AT08;

  @Input()
  public card: ISequencerCard;

}
