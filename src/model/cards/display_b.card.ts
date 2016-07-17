import { BitValue } from "../bit_value";
import { IDisplayBBusGroup } from "../bus/bus_groups";

export interface IDisplayBCard {

    data: BitValue;

    connect(dataBus: IDisplayBBusGroup): void;

}

export class DisplayBCard implements IDisplayBCard {

    public alu: BitValue;
    public aluFuncCl: BitValue;
    public clock: BitValue;
    public condition: BitValue;
    public data: BitValue;
    public instruction: BitValue;
    public operation: BitValue;

    public connect(busGroup: IDisplayBBusGroup) {
        busGroup.b1Bus.aluFunctionClPart.subscribe((v) => this.aluFuncCl = v);
        busGroup.b1Bus.aluOperationPart.subscribe((v) => this.alu = v);
        busGroup.b1Bus.clockPart.subscribe((v) => this.clock = v);
        busGroup.b1Bus.conditionPart.subscribe((v) => this.condition = v);
        busGroup.b1Bus.dataPart.subscribe((v) => this.data = v);
        busGroup.b2Bus.instructionPart.subscribe((v) => this.instruction = v);
        busGroup.b3Bus.operationPart.subscribe((v) => this.operation = v);
    }

}
