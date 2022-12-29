import { Component, Input } from '@angular/core';

import { IXBackplane } from '@paul80nd/relay-computer-model';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-card-bay-x]',
  templateUrl: 'card_bay_x.component.svg'
})

export class CardBayXComponent {

  @Input() backplane!: IXBackplane;

}
