import { Value } from "../value";
import { ICardZBusGroup } from "../bus/bus_groups";
import { IAluFunctionClBusPart, IAluOperationBusPart, IDataBusPart } from "../bus/bus_parts";
import { AluFunctionClLines, AluOperationLines, ConditionLines } from "../bus/bus_part_lines";
import { BitValue } from "../bit_value";

export interface IAluControlCard {

    condition: Value;
    func: BitValue;
    load: boolean;
    select: boolean;
    operation: Value;

    connect(dataBus: ICardZBusGroup): void;
}

export class AluControlCard implements IAluControlCard {

    public condition: Value;
    public func: BitValue;
    public load: boolean;
    public select: boolean;
    public operation: Value;

    private aluOpPart: IAluOperationBusPart;
    private clPart: IAluFunctionClBusPart;
    private dataPart: IDataBusPart;

    private conditionOut: Value;
    private operationOut: Value;

    constructor() {
        this.condition = new Value();
        this.func = BitValue.Zero;
        this.conditionOut = new Value();
        this.operation = new Value();
        this.operationOut = new Value();
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

            let value = this.dataPart.getValue();
            let ld = this.clPart.getValue().bit(AluFunctionClLines.CL);
            let func = this.clPart.getValue();
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
                if (!this.operationOut.value.isEqualTo(op)) { this.operationOut.value = op; }
            }

            if (ld) {
                // Loading -> Sets Register
                if (!this.load) { this.load = true; }
                if (!this.select) { this.select = true; }

                let z = value.isZero();
                let s = value.bit(7);
                let c = this.aluOpPart.getValue().bit(AluOperationLines.ICY);

                let valueOut = BitValue.Zero;
                if (z) { valueOut = valueOut.flipBit(ConditionLines.EZ); };
                if (!z) { valueOut = valueOut.flipBit(ConditionLines.NZ); };
                if (s) { valueOut = valueOut.flipBit(ConditionLines.SN); };
                if (c) { valueOut = valueOut.flipBit(ConditionLines.CY); };

                if (!valueOut.isEqualTo(this.condition.value)) { this.condition.value = valueOut; }
                if (!this.conditionOut.value.isEqualTo(valueOut)) { this.conditionOut.value = valueOut; }
            } else {
                if (this.load) { this.load = false; }
                if (this.select) { this.select = false; }
            }
        }
    }

    private updateOp = () => {
        if (this.aluOpPart) {

            let value = this.aluOpPart.getValue();
            if (!value.isEqualTo(this.operation.value)) { this.operation.value = value; }
        }
    }
}
