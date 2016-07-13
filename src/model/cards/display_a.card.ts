import { Value } from "../value";
import { BitValue } from "../bit_value";
import { IDisplayABusGroup } from "../bus/bus_groups";
import { IAuxRegisterBusPart, IDataSwitchGateBusPart } from "../bus/bus_parts";

export interface IDisplayACard {
    connect(busGroup: IDisplayABusGroup): void;
}

export class DisplayACard implements IDisplayACard {

    private a1a: Value;
    private a1cAuxReg: Value;
    private a1cCl: Value;
    private a2b: Value;
    private a2c: Value;

    private a1cAuxRegIn: BitValue;
    private a2bIn: BitValue;

    private a1cAuxRegPart: IAuxRegisterBusPart;
    private a2bPart: IDataSwitchGateBusPart;

    constructor() {
        this.a1a = new Value();
        this.a1cAuxReg = new Value();
        this.a1cCl = new Value();
        this.a2b = new Value();
        this.a2c = new Value();
        this.a1cAuxRegIn = BitValue.Zero;
        this.a2bIn = BitValue.Zero;
    }

    public connect(busGroup: IDisplayABusGroup) {
        // Input/Outputs
        this.a1cAuxRegPart = busGroup.a1Bus.a1cAuxRegPart;
        this.a1cAuxRegPart.subscribe(() => this.a1cAuxRegIn = this.a1cAuxRegPart.getValue());
        this.a1cAuxRegPart.connect(this.a1cAuxReg);

        this.a2bPart = busGroup.a2Bus.a2bPart;
        this.a2bPart.subscribe(() => this.a2bIn = this.a2bPart.getValue());
        this.a2bPart.connect(this.a2b);

        // Outputs
        busGroup.a1Bus.a1aPart.connect(this.a1a);
        busGroup.a1Bus.a1cClPart.connect(this.a1cCl);
        busGroup.a2Bus.a2cPart.connect(this.a2c);
    }

}
