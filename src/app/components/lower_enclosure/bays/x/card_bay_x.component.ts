import { Component, Input } from '@angular/core';

import { IXBackplane } from '../../../../model/backplanes';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-card-bay-x]',
  templateUrl: 'card_bay_x.component.html'
})

export class CardBayXComponent {

  @Input() backplane!: IXBackplane;

}
