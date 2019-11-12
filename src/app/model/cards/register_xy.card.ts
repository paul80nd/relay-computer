import { ICardYBusGroup } from '../bus/bus_groups';
import { RegJMXYLines } from '../bus/bus_part_lines';
import { IRegisterYCardPart, RegisterYCardPart } from './parts/register_y.cardpart';

export interface IRegisterXYCard {

    register: IRegisterYCardPart;

    connect(dataBus: ICardYBusGroup): void;
}

export class RegisterXYCard implements IRegisterXYCard {

    register: IRegisterYCardPart;

    constructor() {
        this.register = new RegisterYCardPart(
            RegJMXYLines.LDX, RegJMXYLines.SEX,
            RegJMXYLines.LDY, RegJMXYLines.SEY);
    }

    connect(busGroup: ICardYBusGroup) {
        const dataPart = busGroup.dataControlBus.dataPart;
        const ctrlPart = busGroup.controlYBus.regJMXYPart;
        this.register.connect(dataPart, ctrlPart, dataPart);
    }

}
