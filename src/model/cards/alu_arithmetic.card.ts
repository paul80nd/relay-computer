import { BitValue } from "../bit_value";
import { Value } from "../value";
import { ICardZBusGroup } from "../bus/bus_groups";
import { IAluOperationBusPart, IDataBusPart } from "../bus/bus_parts";
import { AluOperationLines } from "../bus/bus_part_lines";

export interface IAluArithmeticCard {

    carryOut: boolean;
    value: BitValue;
    carryIn: boolean;

    connect(dataBus: ICardZBusGroup): void;
}

export class AluArithmeticCard implements IAluArithmeticCard {

    public carryOut: boolean;
    public value: BitValue;
    public carryIn: boolean;

    private inputBPart: IDataBusPart;
    private inputCPart: IDataBusPart;
    private aluOpPart: IAluOperationBusPart;

    private valueOut: Value;
    private aluOpOut: Value;

    constructor() {
        this.value = BitValue.Zero;
        this.valueOut = new Value();
        this.aluOpOut = new Value();
    }

    public connect(busGroup: ICardZBusGroup) {
        // Inputs
        this.inputBPart = busGroup.registerBCBus.registerBPart;
        this.inputBPart.subscribe(this.update);
        this.inputCPart = busGroup.registerBCBus.registerCPart;
        this.inputCPart.subscribe(this.update);
        this.aluOpPart = busGroup.controlZBus.aluOperationPart;
        this.aluOpPart.subscribe(this.update);
        // Outputs
        busGroup.dataControlBus.dataPart.connect(this.valueOut);
        busGroup.controlZBus.aluOperationPart.connect(this.aluOpOut);
    }

    private update = () => {
        if (this.inputBPart && this.inputCPart && this.aluOpPart) {
            let b = this.inputBPart.getValue();
            let c = this.inputCPart.getValue();
            let add = this.aluOpPart.getValue().bit(AluOperationLines.ADD);
            let inc = this.aluOpPart.getValue().bit(AluOperationLines.INC);

            let value = inc ? b.increment() : b.add(c);
            let carryOut = value.bit(8);
            value = value.cap(8);

            if (!this.value.isEqualTo(value)) { this.value = value; }
            if (!this.carryOut === carryOut) { this.carryOut = carryOut; }
            if (!this.carryIn === inc) { this.carryIn = inc; }

            let valueOut = (add || inc) ? value : BitValue.Zero;
            if (!this.valueOut.getValue().isEqualTo(valueOut)) { this.valueOut.setValue(valueOut); }

            if (!this.aluOpOut.getValue().bit(AluOperationLines.ICY) === carryOut) {
                this.aluOpOut.setValue(this.aluOpOut.getValue().flipBit(AluOperationLines.ICY));
            }
        }
    }
}
