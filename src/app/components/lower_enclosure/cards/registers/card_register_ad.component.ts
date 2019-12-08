import { Component, Input } from '@angular/core';

import { IRegisterADCard } from '../../../../model/cards/register_ad.card';

@Component({
    selector: '[rc-card-register-ad]',
    templateUrl: 'card_register_ad.component.svg'
})

export class CardRegisterADComponent {

    @Input() card: IRegisterADCard;

}
