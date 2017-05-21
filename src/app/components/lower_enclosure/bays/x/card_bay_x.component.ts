import { Component, Input } from '@angular/core';

import { IXBackplane } from '../../../../model/backplanes';

@Component({
  selector: '[rc-card-bay-x]',
  templateUrl: 'card_bay_x.component.html',
})

export class CardBayXComponent {

  @Input() public backplane: IXBackplane;

}
