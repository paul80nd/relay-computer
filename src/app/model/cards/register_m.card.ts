import { ICardYBusGroup } from '../bus/bus_groups';
import { RegJMXYLines } from '../bus/bus_part_lines';
import { IRegisterCardPart, RegisterCardPart } from './parts/register.cardpart';

export interface IRegisterMCard {

    registerM1: IRegisterCardPart;
    registerM2: IRegisterCardPart;

    connect(dataBus: ICardYBusGroup): void;
}

export class RegisterMCard implements IRegisterMCard {

    registerM1: IRegisterCardPart;
    registerM2: IRegisterCardPart;

    constructor() {
        this.registerM1 = new RegisterCardPart(RegJMXYLines.LM1, RegJMXYLines.SM1);
        this.registerM2 = new RegisterCardPart(RegJMXYLines.LM2, RegJMXYLines.SM2);
    }

    connect(busGroup: ICardYBusGroup) {
        const dataPart = busGroup.dataControlBus.dataPart;
        const ctrlPart = busGroup.controlYBus.regJMXYPart;
        this.registerM1.connect(dataPart, ctrlPart, dataPart);
        this.registerM2.connect(dataPart, ctrlPart, dataPart);
    }

}
