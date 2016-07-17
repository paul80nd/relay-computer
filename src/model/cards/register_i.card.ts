import { Value } from "../value";
import { BitValue } from "../bit_value";
import { ICardXBusGroup } from "../bus/bus_groups";
import { I2BLines, RegAuxLines } from "../bus/bus_part_lines";
import { IRegisterCardPart, RegisterCardPart } from "./parts/register.cardpart";
import { IDataBusPart, II2BBusPart, IInstructionBusPart } from "../bus/bus_parts";

export interface IRegisterICard {

    register: IRegisterCardPart;

    connect(dataBus: ICardXBusGroup): void;
}

export class RegisterICard implements IRegisterICard {

    public register: IRegisterCardPart;

    private i2b: boolean;
    private dataOut: Value;

    private i2bPart: II2BBusPart;
    private instrPart: IInstructionBusPart;
    private dataPart: IDataBusPart;

    constructor() {
        this.register = new RegisterCardPart(RegAuxLines.LIN);
        this.dataOut = new Value();
    }

    public connect(busGroup: ICardXBusGroup) {
        this.instrPart = busGroup.dataInstructionBus.instructionPart;
        this.dataPart = busGroup.dataInstructionBus.dataPart;
        let ctrlPart = busGroup.controlXBus.auxRegisterPart;
        this.register.connect(this.dataPart, ctrlPart);
        this.register.connectDirect(busGroup.dataInstructionBus.instructionPart);

        this.i2bPart = busGroup.controlXBus.i2bPart;
        this.i2bPart.subscribe(this.i2bHandler);
        this.dataPart.connect(this.dataOut);
    }

    private i2bHandler = () => {
        if (this.i2bPart && this.instrPart) {
            let i2b = this.i2bPart.getValue().bit(I2BLines.I2B);
            if (this.i2b !== i2b) {
                this.i2b = i2b;
                let value = BitValue.Zero;
                if (i2b) {
                    value = this.instrPart.getValue();
                    value = value.cap(5);
                    if (value.bit(4)) {
                        value = value.flipBit(5);
                        value = value.flipBit(6);
                        value = value.flipBit(7);
                    }
                }
                if (!this.dataOut.getValue().isEqualTo(value)) { this.dataOut.setValue(value); }
            }
        }
    }
}
