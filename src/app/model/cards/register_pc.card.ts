import { ICardXBusGroup } from '../bus/bus_groups';
import { RegAuxLines } from '../bus/bus_part_lines';
import { IRegisterCardPart, RegisterCardPart } from './parts/register.cardpart';

export interface IRegisterPCCard {

    register: IRegisterCardPart;

    connect(dataBus: ICardXBusGroup): void;
}

export class RegisterPCCard implements IRegisterPCCard {

    register: IRegisterCardPart;

    constructor() {
        this.register = new RegisterCardPart(RegAuxLines.LPC, RegAuxLines.SPC);
    }

    connect(busGroup: ICardXBusGroup) {
        const addressPart = busGroup.addressBus.addressPart;
        const ctrlPart = busGroup.controlXBus.auxRegisterPart;
        this.register.connect(addressPart, ctrlPart, addressPart);
    }
}
