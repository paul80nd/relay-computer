import { Value } from "../value";
import { ICardZBusGroup } from "../bus/bus_groups";
import { IAluFunctionClBusPart, IAluOperationBusPart, IDataBusPart } from "../bus/bus_parts";
import { AluFunctionClLines, AluOperationLines, ConditionLines } from "../bus/bus_part_lines";
import { BitValue } from "../bit_value";

export interface IAluControlCard {

    condition: Value;
    load: boolean;
    select: boolean;

    connect(dataBus: ICardZBusGroup): void;
}

export class AluControlCard implements IAluControlCard {

    public condition: Value;
    public load: boolean;
    public select: boolean;
    public operation: Value;

    private aluOpPart: IAluOperationBusPart;
    private clPart: IAluFunctionClBusPart;
    private dataPart: IDataBusPart;

    private conditionOut: Value;

    constructor() {
        this.condition = new Value();
        this.conditionOut = new Value();
        this.operation = new Value();
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
    }

    private update = () => {
        if (this.clPart && this.dataPart && this.aluOpPart) {

            let value = this.dataPart.getValue();
            let ld = this.clPart.getValue().bit(AluFunctionClLines.CL);

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

                if (!valueOut.isEqualTo(this.condition.getValue())) { this.condition.setValue(valueOut); }
                if (!this.conditionOut.getValue().isEqualTo(valueOut)) { this.conditionOut.setValue(valueOut); }
            } else {
                if (this.load) { this.load = false; }
                if (this.select) { this.select = false; }
            }
        }
    }

    private updateOp = () => {
        if (this.aluOpPart) {

            let value = this.aluOpPart.getValue();
            if (!value.isEqualTo(this.operation.getValue())) { this.operation.setValue(value); }
        }
    }
}
