import { Component, Input } from '@angular/core';

import { IRegisterXYCard } from '../../../../model/cards/register_xy.card';

@Component({
  selector: '[rc-card-register-xy]',
  templateUrl: 'card_register_xy.component.svg'
})

export class CardRegisterXYComponent {

  @Input() card: IRegisterXYCard;

}
