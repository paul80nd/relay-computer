import { Component, Input } from '@angular/core';

import { IIncrementerCard } from '../../../../model/cards/incrementer.card';

@Component({
    selector: '[rc-card-incrementer-a]',
    templateUrl: 'card_incrementer_a.component.html',
})

export class CardIncrementerAComponent {

    @Input() public card: IIncrementerCard;

}
