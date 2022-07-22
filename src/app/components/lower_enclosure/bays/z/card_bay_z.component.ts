import { Component, Input } from '@angular/core';

import { IZBackplane } from '../../../../model/backplanes';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-card-bay-z]',
  templateUrl: 'card_bay_z.component.html'
})

export class CardBayZComponent {

  @Input() backplane!: IZBackplane;

}
