import { ICardXBusGroup } from "../bus/bus_groups";
import { RegAuxLines } from "../bus/bus_part_lines";
import { IRegisterCardPart, RegisterCardPart } from "./parts/register.cardpart";

export interface IRegisterICard {

    register: IRegisterCardPart;

    connect(dataBus: ICardXBusGroup): void;
}

export class RegisterICard implements IRegisterICard {

    public register: IRegisterCardPart;

    constructor() {
        this.register = new RegisterCardPart(RegAuxLines.LIN);
    }

    public connect(busGroup: ICardXBusGroup) {
        let dataPart = busGroup.dataInstructionBus.dataPart;
        let ctrlPart = busGroup.controlXBus.auxRegisterPart;
        this.register.connect(dataPart, ctrlPart);
        this.register.connectDirect(busGroup.dataInstructionBus.instructionPart);
    }

}
