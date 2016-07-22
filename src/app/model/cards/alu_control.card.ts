import { CardPart } from "../../model/cards/card_part";
import { ICardZBusGroup } from "../bus/bus_groups";
import { IAluFunctionClBusPart, IAluOperationBusPart, IDataBusPart } from "../bus/bus_parts";
import { AluFunctionClLines, AluOperationLines, ConditionLines } from "../bus/bus_part_lines";
import { BitValue } from "../bit_value";

export interface IAluControlCard {

    condition: CardPart;
    func: BitValue;
    load: boolean;
    select: boolean;
    operation: CardPart;

    connect(dataBus: ICardZBusGroup): void;
}

export class AluControlCard implements IAluControlCard {

    public condition: CardPart;
    public func: BitValue;
    public load: boolean;
    public select: boolean;
    public operation: CardPart;

    private aluOpPart: IAluOperationBusPart;
    private clPart: IAluFunctionClBusPart;
    private dataPart: IDataBusPart;

    private conditionOut: CardPart;
    private operationOut: CardPart;

    constructor() {
        this.condition = new CardPart();
        this.func = BitValue.Zero;
        this.conditionOut = new CardPart();
        this.operation = new CardPart();
        this.operationOut = new CardPart();
    }

    public connect(busGroup: ICardZBusGroup) {
        // Inputs
        this.aluOpPart = busGroup.controlZBus.aluOperationPart;
        this.aluOpPart.subscribe(this.update);
        this.aluOpPart.subscribe(this.updateOp);
        this.dataPart = busGroup.dataControlBus.dataPart;
        this.dataPart.subscribe(this.update);
        this.clPart = busGroup.dataControlBus.aluFunctionClPart;
        this.clPart.subscribe(this.update);
        // Outputs
        busGroup.dataControlBus.conditionPart.connect(this.conditionOut);
        busGroup.controlZBus.aluOperationPart.connect(this.operationOut);
    }

    private update = () => {
        if (this.clPart && this.dataPart && this.aluOpPart) {

            let value = this.dataPart.value;
            let ld = this.clPart.value.bit(AluFunctionClLines.CL);
            let func = this.clPart.value;
            let op = BitValue.Zero;

            if (!this.func.isEqualTo(func)) {
                this.func = func;
                if (func.bit(AluFunctionClLines.F2)) {
                    if (func.bit(AluFunctionClLines.F1)) {
                        if (func.bit(AluFunctionClLines.F0)) {
                            op = op.flipBit(AluOperationLines.SHL);
                        } else {
                            op = op.flipBit(AluOperationLines.NOT);
                        }
                    } else {
                        if (func.bit(AluFunctionClLines.F0)) {
                            op = op.flipBit(AluOperationLines.XOR);
                        } else {
                            op = op.flipBit(AluOperationLines.ORR);
                        }
                    }
                } else {
                    if (func.bit(AluFunctionClLines.F1)) {
                        if (func.bit(AluFunctionClLines.F0)) {
                            op = op.flipBit(AluOperationLines.AND);
                        } else {
                            op = op.flipBit(AluOperationLines.INC);
                        }
                    } else {
                        if (func.bit(AluFunctionClLines.F0)) {
                            op = op.flipBit(AluOperationLines.ADD);
                        } else {
                            op = op.flipBit(AluOperationLines.CLR);
                        }
                    }
                }
                this.operationOut.value = op;
            }

            if (ld) {
                // Loading -> Sets Register
                if (!this.load) { this.load = true; }
                if (!this.select) { this.select = true; }

                let z = value.isZero();
                let s = value.bit(7);
                let c = this.aluOpPart.value.bit(AluOperationLines.ICY);

                let valueOut = BitValue.Zero;
                if (z) { valueOut = valueOut.flipBit(ConditionLines.EZ); };
                if (!z) { valueOut = valueOut.flipBit(ConditionLines.NZ); };
                if (s) { valueOut = valueOut.flipBit(ConditionLines.SN); };
                if (c) { valueOut = valueOut.flipBit(ConditionLines.CY); };

                this.condition.value = valueOut;
                this.conditionOut.value = valueOut;
            } else {
                if (this.load) { this.load = false; }
                if (this.select) { this.select = false; }
            }
        }
    }

    private updateOp = () => {
        if (this.aluOpPart) {
            this.operation.value = this.aluOpPart.value;
        }
    }
}
