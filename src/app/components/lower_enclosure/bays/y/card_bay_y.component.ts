import { Component, Input } from '@angular/core';

import { IYBackplane } from '@paul80nd/relay-computer-model';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-card-bay-y]',
  templateUrl: 'card_bay_y.component.html'
})

export class CardBayYComponent {

  @Input() backplane!: IYBackplane;

}
