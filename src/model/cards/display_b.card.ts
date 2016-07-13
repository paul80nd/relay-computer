import { BitValue } from "../bit_value";
import { IDisplayBBusGroup } from "../bus/bus_groups";
import { IAluFunctionClBusPart, IAluOperationBusPart,
    IConditionBusPart, IDataBusPart, IInstructionBusPart } from "../bus/bus_parts";

export interface IDisplayBCard {

    data: BitValue;

    connect(dataBus: IDisplayBBusGroup): void;

}

export class DisplayBCard implements IDisplayBCard {

    public alu: BitValue;
    public aluFuncCl: BitValue;
    public condition: BitValue;
    public data: BitValue;
    public instruction: BitValue;

    private aluOpPart: IAluOperationBusPart;
    private aluFuncClPart: IAluFunctionClBusPart;
    private condPart: IConditionBusPart;
    private dataPart: IDataBusPart;
    private instrPart: IInstructionBusPart;

    public connect(busGroup: IDisplayBBusGroup) {

        this.aluOpPart = busGroup.b1Bus.aluOperationPart;
        this.aluOpPart.subscribe(() => this.alu = this.aluOpPart.getValue());

        this.condPart = busGroup.b1Bus.conditionPart;
        this.condPart.subscribe(() => this.condition = this.condPart.getValue());

        this.dataPart = busGroup.b1Bus.dataPart;
        this.dataPart.subscribe(() => this.data = this.dataPart.getValue());

        this.aluFuncClPart = busGroup.b1Bus.aluFuncClPart;
        this.aluFuncClPart.subscribe(() => this.aluFuncCl = this.aluFuncClPart.getValue());

        this.instrPart = busGroup.b2Bus.instructionPart;
        this.instrPart.subscribe(() => this.instruction = this.instrPart.getValue());
    }

}
