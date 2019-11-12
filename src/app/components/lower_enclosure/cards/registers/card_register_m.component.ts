import { Component, Input } from '@angular/core';

import { IRegisterMCard } from '../../../../model/cards/register_m.card';

@Component({
    selector: '[rc-card-register-m]',
    templateUrl: 'card_register_m.component.html'
})

export class CardRegisterMComponent {

    @Input() card: IRegisterMCard;

}
