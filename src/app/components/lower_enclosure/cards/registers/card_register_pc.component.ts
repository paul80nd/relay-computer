import { Component, Input } from '@angular/core';

import { IRegisterPCCard } from '../../../../model/cards/register_pc.card';

@Component({
    selector: '[rc-card-register-pc]',
    templateUrl: 'card_register_pc.component.html'
})

export class CardRegisterPCComponent {

    @Input() card: IRegisterPCCard;

}
