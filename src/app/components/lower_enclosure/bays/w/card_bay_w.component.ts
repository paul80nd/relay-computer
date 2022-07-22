import { Component, Input } from '@angular/core';

import { IWBackplane } from '../../../../model/backplanes';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-card-bay-w]',
  templateUrl: './card_bay_w.component.html'
})

export class CardBayWComponent {

  @Input() backplane!: IWBackplane;

}
