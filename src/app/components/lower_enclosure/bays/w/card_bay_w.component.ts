import { Component, Input } from '@angular/core';

import { IWBackplane } from '@paul80nd/relay-computer-model';
import { CardSequencerAComponent } from '../../cards/sequencer/card_sequencer_a.component';
import { CardSequencerBComponent } from '../../cards/sequencer/card_sequencer_b.component';
import { CardControlAComponent } from '../../cards/control/card_control_a.component';
import { CardControlBComponent } from '../../cards/control/card_control_b.component';
import { CardDecoderComponent } from '../../cards/decoder/card_decoder.component';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
    selector: '[rc-card-bay-w]',
    templateUrl: './card_bay_w.component.svg',
    imports: [CardSequencerAComponent, CardSequencerBComponent, CardControlAComponent, CardControlBComponent, CardDecoderComponent]
})

export class CardBayWComponent {

  @Input() backplane!: IWBackplane;

}
