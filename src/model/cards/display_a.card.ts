import { Value } from "../value";
import { BitValue } from "../bit_value";
import { IDisplayABusGroup } from "../bus/bus_groups";
import { IAuxRegisterBusPart, IAluFunctionClBusPart,
    IAluOperationBusPart, IClockBusPart,
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
    private a2cIn: BitValue;

    private a1aPart: IRegisterABCDBusPart;
    private a1bClockPart: IClockBusPart;
    private a1bI2bPart: II2BBusPart;
    private a1cAuxRegPart: IAuxRegisterBusPart;
    private a1cClPart: IAluFunctionClBusPart;
    private a2bPart: IDataSwitchGateBusPart;
    private a2cPart: IAluOperationBusPart;

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
        this.a2cIn = BitValue.Zero;
    }

    public connect(busGroup: IDisplayABusGroup) {
        // Input/Outputs

        this.a1aPart = busGroup.a1Bus.a1aPart;
        this.a1aPart.subscribe((v) => this.a1aIn = v);
        this.a1aPart.connect(this.a1a);

        this.a1bClockPart = busGroup.a1Bus.a1bClockPart;
        this.a1bClockPart.subscribe((v) => this.a1bClockIn = v);
        this.a1bClockPart.connect(this.a1bClock);

        this.a1bI2bPart = busGroup.a1Bus.a1bI2bPart;
        this.a1bI2bPart.subscribe((v) => this.a1bI2bIn = v);
        this.a1bI2bPart.connect(this.a1bI2b);

        this.a1cAuxRegPart = busGroup.a1Bus.a1cAuxRegPart;
        this.a1cAuxRegPart.subscribe((v) => this.a1cAuxRegIn = v);
        this.a1cAuxRegPart.connect(this.a1cAuxReg);

        this.a2bPart = busGroup.a2Bus.a2bPart;
        this.a2bPart.subscribe((v) => this.a2bIn = v);
        this.a2bPart.connect(this.a2b);

        this.a1cClPart = busGroup.a1Bus.a1cClPart;
        this.a1cClPart.subscribe((v) => this.a1cClIn = v);
        this.a1cClPart.connect(this.a1cCl);

        this.a2cPart = busGroup.a2Bus.a2cPart;
        this.a2cPart.subscribe((v) => this.a2cIn = v);
        this.a2cPart.connect(this.a2c);
    }

}
