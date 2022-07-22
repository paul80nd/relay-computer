import { BitValue } from '../bit_value';
import { IObservable, Observable } from '../observable';
import { CardPart } from '../../model/cards/card_part';

/**
 * A bus part represents a number of related lines/wires which carry
 * related signals or form a multi-bit value. Events are raised for
 * the bus part as a whole when any individial line changes.
 */
export interface IBusPart extends IObservable<BitValue> {
  /** Gets the current value on the bus part */
  readonly value: BitValue;
  /** Connects this bus part to a card part value provider */
  connect(provider: CardPart): void;
  /** Disconnect this bus part from a card part value provider */
  disconnect(provider: CardPart): void;
}

/** Bus part for the 4 lines that carry the Abort value */
export interface IAbortBusPart extends IBusPart { }
/** Bus part for the 16 lines that carry the address bus value */
export interface IAddressBusPart extends IBusPart { }
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
/** Bus part for the 1 line that carries the I2B signal */
export interface II2BBusPart extends IBusPart { }
/** Bus part for the 8 lines that carry the instruction bus value */
export interface IInstructionBusPart extends IBusPart { }
/** Bus part for the 3 lines that carry the memory bus operation lines */
export interface IMemoryBusPart extends IBusPart { }
/** Bus part for the 9 lines that carry the operation bus value */
export interface IOperationBusPart extends IBusPart { }
/** Bus part for the 20 lines tht carry the pulse bus value */
export interface IPulseBusPart extends IBusPart { }
/** Bus part for the 8 lines that carry the register ABCD load and select lines */
export interface IRegisterABCDBusPart extends IBusPart { }
/** Bus part for the 14 lines that carry the register JMXY load and select lines */
export interface IRegisterJMXYBusPart extends IBusPart { }
/** Bus part for the 1 line that carries the RES signal */
export interface IResetBusPart extends IBusPart { }

/**
 * Factory providing Bus Part instances
 */
export interface IBusPartFactory {
  getForAbort(): IAbortBusPart;
  getForAddress(): IAddressBusPart;
  getForAluFunctionCl(): IAluFunctionClBusPart;
  getForAluOperation(): IAluOperationBusPart;
  getForAuxRegister(): IAuxRegisterBusPart;
  getForClock(): IClockBusPart;
  getForCondition(): IConditionBusPart;
  getForData(): IDataBusPart;
  getForDataSwitchGate(): IDataSwitchGateBusPart;
  getForI2B(): II2BBusPart;
  getForInstruction(): IInstructionBusPart;
  getForMemory(): IMemoryBusPart;
  getForOperation(): IOperationBusPart;
  getForPulse(): IPulseBusPart;
  getForRegisterABCD(): IRegisterABCDBusPart;
  getForRegisterJMXY(): IRegisterJMXYBusPart;
  getForReset(): IResetBusPart;
}

export class BusPartFactory implements IBusPartFactory {
  getForAbort(): IAbortBusPart { return new BusPart(); }
  getForAddress(): IAbortBusPart { return new BusPart(); }
  getForAluFunctionCl(): IAluFunctionClBusPart { return new BusPart(); }
  getForAluOperation(): IAluOperationBusPart { return new BusPart(); }
  getForAuxRegister(): IAuxRegisterBusPart { return new BusPart(); }
  getForClock(): IClockBusPart { return new BusPart(); }
  getForCondition(): IConditionBusPart { return new BusPart(); }
  getForData(): IDataBusPart { return new BusPart(); }
  getForDataSwitchGate(): IDataSwitchGateBusPart { return new BusPart(); }
  getForI2B(): II2BBusPart { return new BusPart(); }
  getForInstruction(): IInstructionBusPart { return new BusPart(); }
  getForMemory(): IMemoryBusPart { return new BusPart(); }
  getForOperation(): IOperationBusPart { return new BusPart(); }
  getForPulse(): IPulseBusPart { return new BusPart(); }
  getForRegisterABCD(): IRegisterABCDBusPart { return new BusPart(); }
  getForRegisterJMXY(): IRegisterJMXYBusPart { return new BusPart(); }
  getForReset(): IResetBusPart { return new BusPart(); }
}

class BusPart extends Observable<BitValue> implements IBusPart {

  private _value: BitValue;
  private connectedParts: CardPart[];

  constructor() {
    super();
    this._value = BitValue.Zero;
    this.connectedParts = [];
  }

  get value() {
    return this._value;
  }

  connect(part: CardPart) {
    this.connectedParts.push(part);
    part.subscribe(this.update);
  }

  disconnect(part: CardPart) {
    this.connectedParts.splice(this.connectedParts.indexOf(part), 1);
    part.unsubscribe(this.update);
  }

  subscribe(handler: { (e: BitValue): void }): void {
    super.subscribe(handler);
    this.update();
  }

  unsubscribe(handler: { (e: BitValue): void }): void {
    super.unsubscribe(handler);
    this.update();
  }

  private update = () => {
    let newValue = BitValue.Zero;
    if (this.connectedParts.length > 0) {
      newValue = BitValue.combine(this.connectedParts.map(bv => bv.value));
    }

    this._value = newValue;
    this.notifyObservers(this._value);
  }

}
