import { BitValue } from "../bit_value";
import { IObservable, Observable } from "../observable";
import { Value } from "../value";

/**
 * A bus part represents a number of related lines/wires which carry
 * related signals or form a multi-bit value. Events are raised for
 * the bus part as a whole when any individial line changes.
 */
export interface IBusPart extends IObservable {
    /** Gets the current value on the bus part */
    getValue(): BitValue;
    /** Connects this bus part to a value provider */
    connect(provider: Value): void;
    /** Disconnect this bus part from a value provider */
    disconnect(provider: Value): void;
}

/** Bus part for the 1 line that carries the CL signal */
export interface IAluFunctionClBusPart extends IBusPart { }
/** Bus part for the 8 lines that carry the ALU operations */
export interface IAluOperationBusPart extends IBusPart { }
/** Bus part for the 5 lines that carry the auxilary register load and select lines */
export interface IAuxRegisterBusPart extends IBusPart { }
/** Bus part for the 1 line that carries the CLK signal */
export interface IClockBusPart extends IBusPart { }
/** Bus part for the 4 lines that carry the condition register outputs */
export interface IConditionBusPart extends IBusPart { }
/** Bus part for the 8 lines that carry the data bus value */
export interface IDataBusPart extends IBusPart { }
/** Bus part for the 2 lines the gate the data switches to the data/address bus */
export interface IDataSwitchGateBusPart extends IBusPart { }
/** Bus part for the 8 lines that carry the instruction bus value */
export interface IInstructionBusPart extends IBusPart { }
/** Bus part for the 9 lines that carry the operation bus value */
export interface IOperationBusPart extends IBusPart { }
/** Bus part for the 20 lines tht carry the pulse bus value */
export interface IPulseBusPart extends IBusPart { }
/** Bus part for the 8 lines that carry the register ABCD load and select lines */
export interface IRegisterABCDBusPart extends IBusPart { }
/** Bus part for the 1 line that carries the RES signal */
export interface IResetBusPart extends IBusPart { }

/**
 * Factory providing Bus Part instances
 */
export interface IBusPartFactory {
    getForAluFunctionCl(): IAluFunctionClBusPart;
    getForAluOperation(): IAluOperationBusPart;
    getForAuxRegister(): IAuxRegisterBusPart;
    getForClock(): IClockBusPart;
    getForCondition(): IConditionBusPart;
    getForData(): IDataBusPart;
    getForDataSwitchGate(): IDataSwitchGateBusPart;
    getForInstruction(): IInstructionBusPart;
    getForOperation(): IOperationBusPart;
    getForPulse(): IPulseBusPart;
    getForRegisterABCD(): IRegisterABCDBusPart;
    getForReset(): IResetBusPart;
}

export class BusPartFactory implements IBusPartFactory {
    public getForAluFunctionCl(): IAluFunctionClBusPart { return new BusPart(); }
    public getForAluOperation(): IAluOperationBusPart { return new BusPart(); }
    public getForAuxRegister(): IAuxRegisterBusPart { return new BusPart(); }
    public getForClock(): IClockBusPart { return new BusPart(); }
    public getForCondition(): IConditionBusPart { return new BusPart(); }
    public getForData(): IDataBusPart { return new BusPart(); }
    public getForDataSwitchGate(): IDataSwitchGateBusPart { return new BusPart(); }
    public getForInstruction(): IInstructionBusPart { return new BusPart(); }
    public getForOperation(): IOperationBusPart { return new BusPart(); }
    public getForPulse(): IPulseBusPart { return new BusPart(); }
    public getForRegisterABCD(): IRegisterABCDBusPart { return new BusPart(); }
    public getForReset(): IResetBusPart { return new BusPart(); }
}

class BusPart extends Observable implements IBusPart {

    private value: BitValue;
    private connectedValues: Value[];

    constructor() {
        super();
        this.value = BitValue.Zero;
        this.connectedValues = [];
    }

    public getValue() {
        return this.value;
    }

    public connect(value: Value) {
        this.connectedValues.push(value);
        value.subscribe(this.update);
    }

    public disconnect(value: Value) {
        this.connectedValues.splice(this.connectedValues.indexOf(value), 1);
        value.unsubscribe(this.update);
    }

    private update = () => {
        this.value = BitValue.combine(this.connectedValues.map(bv => bv.getValue()));
        this.notifyObservers();
    }
}

