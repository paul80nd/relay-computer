import { Component, Input } from '@angular/core';

import { IWBackplane } from '@paul80nd/relay-computer-model';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-card-bay-w]',
  templateUrl: './card_bay_w.component.svg'
})

export class CardBayWComponent {

  @Input() backplane!: IWBackplane;

}
