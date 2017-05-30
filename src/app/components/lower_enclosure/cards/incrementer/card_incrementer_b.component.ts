import { Component, Input } from '@angular/core';

import { IRegisterPCCard } from '../../../../model/cards/register_pc.card';

@Component({
    selector: '[rc-card-incrementer-b]',
    templateUrl: 'card_incrementer_b.component.html',
})

export class CardIncrementerBComponent {

    @Input() public card: IRegisterPCCard;

}
