import { Component, Input } from '@angular/core';

import { IRegisterBCCard } from '../../../../model/cards/register_bc.card';

@Component({
    selector: '[rc-card-register-bc]',
    templateUrl: 'card_register_bc.component.html'
})

export class CardRegisterBCComponent {

    @Input() card: IRegisterBCCard;

}
