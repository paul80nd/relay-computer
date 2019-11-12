import { ICardYBusGroup } from '../bus/bus_groups';
import { RegJMXYLines } from '../bus/bus_part_lines';
import { IRegisterCardPart, RegisterCardPart } from './parts/register.cardpart';

export interface IRegisterJCard {

    registerJ1: IRegisterCardPart;
    registerJ2: IRegisterCardPart;

    connect(dataBus: ICardYBusGroup): void;
}

export class RegisterJCard implements IRegisterJCard {

    registerJ1: IRegisterCardPart;
    registerJ2: IRegisterCardPart;

    constructor() {
        this.registerJ1 = new RegisterCardPart(RegJMXYLines.LJ1);
        this.registerJ2 = new RegisterCardPart(RegJMXYLines.LJ2);
    }

    connect(busGroup: ICardYBusGroup) {
        const dataPart = busGroup.dataControlBus.dataPart;
        const ctrlPart = busGroup.controlYBus.regJMXYPart;
        this.registerJ1.connect(dataPart, ctrlPart, dataPart);
        this.registerJ2.connect(dataPart, ctrlPart, dataPart);
    }

}
