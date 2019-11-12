import { ICardYBusGroup } from '../bus/bus_groups';
import { RegABCDLines, RegJMXYLines } from '../bus/bus_part_lines';
import { IRegisterCardPart, RegisterCardPart } from './parts/register.cardpart';

export interface IRegisterXYCard {

    registerX: IRegisterCardPart;
    registerY: IRegisterCardPart;

    connect(dataBus: ICardYBusGroup): void;
}

export class RegisterXYCard implements IRegisterXYCard {

    registerX: IRegisterCardPart;
    registerY: IRegisterCardPart;

    constructor() {
        this.registerX = new RegisterCardPart(RegJMXYLines.LDX, RegJMXYLines.SEX);
        this.registerY = new RegisterCardPart(RegJMXYLines.LDY, RegJMXYLines.SEY);
    }

    connect(busGroup: ICardYBusGroup) {
        const dataPart = busGroup.dataControlBus.dataPart;
        const ctrlPart = busGroup.controlYBus.regJMXYPart;
        this.registerX.connect(dataPart, ctrlPart, dataPart);
        this.registerY.connect(dataPart, ctrlPart, dataPart);
    }

}
