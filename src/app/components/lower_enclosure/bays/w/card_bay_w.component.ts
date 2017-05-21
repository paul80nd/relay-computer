import { Component, Input } from '@angular/core';

import { IWBackplane } from '../../../../model/backplanes';

@Component({
    selector: '[rc-card-bay-w]',
    templateUrl: './card_bay_w.component.html',
})

export class CardBayWComponent {

    @Input() public backplane: IWBackplane;

}
