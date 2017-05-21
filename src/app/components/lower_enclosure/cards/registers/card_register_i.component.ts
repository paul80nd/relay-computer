import { Component, Input } from '@angular/core';

import { IRegisterICard } from '../../../../model/cards/register_i.card';

@Component({
    selector: '[rc-card-register-i]',
    templateUrl: 'card_register_i.component.html',
})

export class CardRegisterIComponent {

    @Input() public card: IRegisterICard;

}
