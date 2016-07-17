import { Value } from "../value";
import { BitValue } from "../bit_value";
import { IDisplayABusGroup } from "../bus/bus_groups";
import { IAuxRegisterBusPart, IAluFunctionClBusPart, IClockBusPart,
    IDataSwitchGateBusPart, II2BBusPart, IRegisterABCDBusPart } from "../bus/bus_parts";

export interface IDisplayACard {
    connect(busGroup: IDisplayABusGroup): void;
}

export class DisplayACard implements IDisplayACard {

    private a1a: Value;
    private a1bClock: Value;
    private a1bI2b: Value;
    private a1cAuxReg: Value;
    private a1cCl: Value;
    private a2b: Value;
    private a2c: Value;

    private a1aIn: BitValue;
    private a1bClockIn: BitValue;
    private a1bI2bIn: BitValue;
    private a1cAuxRegIn: BitValue;
    private a1cClIn: BitValue;
    private a2bIn: BitValue;

    private a1aPart: IRegisterABCDBusPart;
    private a1bClockPart: IClockBusPart;
    private a1bI2bPart: II2BBusPart;
    private a1cAuxRegPart: IAuxRegisterBusPart;
    private a1cClPart: IAluFunctionClBusPart;
    private a2bPart: IDataSwitchGateBusPart;

    constructor() {
        this.a1a = new Value();
        this.a1bClock = new Value();
        this.a1bI2b = new Value();
        this.a1cAuxReg = new Value();
        this.a1cCl = new Value();
        this.a2b = new Value();
        this.a2c = new Value();

        this.a1aIn = BitValue.Zero;
        this.a1bClockIn = BitValue.Zero;
        this.a1bI2bIn = BitValue.Zero;
        this.a1cAuxRegIn = BitValue.Zero;
        this.a1cClIn = BitValue.Zero;
        this.a2bIn = BitValue.Zero;
    }

    public connect(busGroup: IDisplayABusGroup) {
        // Input/Outputs

        this.a1aPart = busGroup.a1Bus.a1aPart;
        this.a1aPart.subscribe(() => this.a1aIn = this.a1aPart.getValue());
        this.a1aPart.connect(this.a1a);

        this.a1bClockPart = busGroup.a1Bus.a1bClockPart;
        this.a1bClockPart.subscribe(() => this.a1bClockIn = this.a1bClockPart.getValue());
        this.a1bClockPart.connect(this.a1bClock);

        this.a1bI2bPart = busGroup.a1Bus.a1bI2bPart;
        this.a1bI2bPart.subscribe(() => this.a1bI2bIn = this.a1bI2bPart.getValue());
        this.a1bI2bPart.connect(this.a1bI2b);

        this.a1cAuxRegPart = busGroup.a1Bus.a1cAuxRegPart;
        this.a1cAuxRegPart.subscribe(() => this.a1cAuxRegIn = this.a1cAuxRegPart.getValue());
        this.a1cAuxRegPart.connect(this.a1cAuxReg);

        this.a2bPart = busGroup.a2Bus.a2bPart;
        this.a2bPart.subscribe(() => this.a2bIn = this.a2bPart.getValue());
        this.a2bPart.connect(this.a2b);

        this.a1cClPart = busGroup.a1Bus.a1cClPart;
        this.a1cClPart.subscribe(() => this.a1cClIn = this.a1cClPart.getValue());
        this.a1cClPart.connect(this.a1cCl);

        // Outputs
        busGroup.a2Bus.a2cPart.connect(this.a2c);
    }

}
