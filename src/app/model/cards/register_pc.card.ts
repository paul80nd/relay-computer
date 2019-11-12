import { CardPart } from '../../model/cards/card_part';
import { BitValue } from '../bit_value';
import { ICardXBusGroup } from '../bus/bus_groups';
import { I2BLines, RegAuxLines } from '../bus/bus_part_lines';
import { IRegisterCardPart, RegisterCardPart } from './parts/register.cardpart';
import { IDataBusPart, II2BBusPart, IInstructionBusPart } from '../bus/bus_parts';

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
