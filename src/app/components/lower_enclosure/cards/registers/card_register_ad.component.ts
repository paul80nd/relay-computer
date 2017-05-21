import { Component, Input } from '@angular/core';

import { IRegisterADCard } from '../../../../model/cards/register_ad.card';

@Component({
    selector: '[rc-card-register-ad]',
    templateUrl: 'card_register_ad.component.html',
})

export class CardRegisterADComponent {

    @Input() public card: IRegisterADCard;

}
