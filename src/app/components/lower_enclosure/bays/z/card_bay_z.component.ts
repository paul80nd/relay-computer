import { Component, Input } from '@angular/core';

import { IZBackplane } from '../../../../model/backplanes';

@Component({
  selector: '[rc-card-bay-z]',
  templateUrl: 'card_bay_z.component.html'
})

export class CardBayZComponent {

  @Input() backplane!: IZBackplane;

}
