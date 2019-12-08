import { Component, Input } from '@angular/core';

import { IRegisterJCard } from '../../../../model/cards/register_j.card';

@Component({
    selector: '[rc-card-register-j]',
    templateUrl: 'card_register_j.component.svg'
})

export class CardRegisterJComponent {

    @Input() card: IRegisterJCard;

}
