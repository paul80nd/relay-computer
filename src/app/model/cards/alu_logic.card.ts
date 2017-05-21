import { CardPart } from '../../model/cards/card_part';
import { BitValue } from '../bit_value';
import { ICardZBusGroup } from '../bus/bus_groups';
import { IAluOperationBusPart, IDataBusPart } from '../bus/bus_parts';
import { AluOperationLines } from '../bus/bus_part_lines';

export interface IAluLogicCard {

    notValue: BitValue;
    shlValue: BitValue;
    orValue: BitValue;
    xorValue: BitValue;
    andValue: BitValue;

    connect(dataBus: ICardZBusGroup): void;
}

export class AluLogicCard implements IAluLogicCard {

    public notValue: BitValue;
    public shlValue: BitValue;
    public orValue: BitValue;
    public xorValue: BitValue;
    public andValue: BitValue;

    private inputBPart: IDataBusPart;
    private inputCPart: IDataBusPart;
    private aluOpPart: IAluOperationBusPart;

    private valueOut: CardPart;

    constructor() {
        this.notValue = BitValue.Zero;
        this.shlValue = BitValue.Zero;
        this.orValue = BitValue.Zero;
        this.xorValue = BitValue.Zero;
        this.andValue = BitValue.Zero;
        this.valueOut = new CardPart();
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
    }

    private update = () => {
        if (this.inputBPart && this.inputCPart && this.aluOpPart) {
            let b = this.inputBPart.value;
            let c = this.inputCPart.value;

            let notValue = b.not().cap(8);
            let shlValue = b.shiftLeft(8);
            let orValue = b.or(c);
            let xorValue = b.xor(c);
            let andValue = b.and(c);

            if (!this.notValue.isEqualTo(notValue)) { this.notValue = notValue; }
            if (!this.shlValue.isEqualTo(shlValue)) { this.shlValue = shlValue; }
            if (!this.orValue.isEqualTo(orValue)) { this.orValue = orValue; }
            if (!this.xorValue.isEqualTo(xorValue)) { this.xorValue = xorValue; }
            if (!this.andValue.isEqualTo(andValue)) { this.andValue = andValue; }

            let alu = this.aluOpPart.value;
            let valueOut = BitValue.Zero;
            if (alu.bit(AluOperationLines.NOT)) { valueOut = valueOut.or(notValue); };
            if (alu.bit(AluOperationLines.SHL)) { valueOut = valueOut.or(shlValue); };
            if (alu.bit(AluOperationLines.ORR)) { valueOut = valueOut.or(orValue); };
            if (alu.bit(AluOperationLines.XOR)) { valueOut = valueOut.or(xorValue); };
            if (alu.bit(AluOperationLines.AND)) { valueOut = valueOut.or(andValue); };
            this.valueOut.value = valueOut;
        }
    }
}
