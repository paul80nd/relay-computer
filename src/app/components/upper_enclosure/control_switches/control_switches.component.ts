import { Component, Input } from '@angular/core';

import { IControlSwitchesCard } from '../../../model/cards/control_switches.card';

@Component({
    selector: '[rc-control-switches]',
    templateUrl: './control_switches.component.html',
})
export class ControlSwitchesComponent {

    @Input() public card: IControlSwitchesCard;

    public deposit: boolean;
    public depositNext: boolean;

    public changeDeposit(up: boolean): void {
        if (!this.deposit && !this.depositNext) {
            if (up) {
                this.deposit = false;
                this.depositNext = true;
                this.card.depositNext();
            } else {
                this.deposit = true;
                this.depositNext = false;
                this.card.deposit();
            }
            setTimeout(() => {
                this.deposit = false;
                this.depositNext = false;
            }, 500);
        }
    }

}
