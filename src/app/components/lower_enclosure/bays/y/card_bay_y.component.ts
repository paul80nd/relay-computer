import { Component, Input } from '@angular/core';

import { IYBackplane } from '../../../../model/backplanes';

@Component({
    selector: '[rc-card-bay-y]',
    templateUrl: 'card_bay_y.component.html',
})

export class CardBayYComponent {

    @Input() public backplane: IYBackplane;

}