import { CardPart } from './card_part';
import { BitValue } from '../bit_value';
import { IDisplayABusGroup } from '../bus/bus_groups';
import {
  IAluFunctionClBusPart, IAluOperationBusPart,
  IAuxRegisterBusPart, IClockBusPart,
  IDataSwitchGateBusPart, II2BBusPart,
  IMemoryBusPart, IRegisterABCDBusPart, IRegisterJMXYBusPart
} from '../bus/bus_parts';

export interface IDisplayACard {

  a1a: CardPart;
  a1bClock: CardPart;
  a1bI2b: CardPart;
  a1bMemory: CardPart;
  a1cAuxReg: CardPart;
  a1cCl: CardPart;
  a2abReg: CardPart;
  a2b: CardPart;
  a2c: CardPart;

  a1aIn: BitValue;
  a1bClockIn: BitValue;
  a1bI2bIn: BitValue;
  a1bMemoryIn: BitValue;
  a1cAuxRegIn: BitValue;
  a1cClIn: BitValue;
  a2abRegIn: BitValue;
  a2bIn: BitValue;
  a2cIn: BitValue;

  connect(busGroup: IDisplayABusGroup): void;
}

export class DisplayACard implements IDisplayACard {

  a1a: CardPart;
  a1bClock: CardPart;
  a1bI2b: CardPart;
  a1bMemory: CardPart;
  a1cAuxReg: CardPart;
  a1cCl: CardPart;
  a2abReg: CardPart;
  a2b: CardPart;
  a2c: CardPart;

  a1aIn: BitValue;
  a1bClockIn: BitValue;
  a1bI2bIn: BitValue;
  a1bMemoryIn: BitValue;
  a1cAuxRegIn: BitValue;
  a1cClIn: BitValue;
  a2abRegIn: BitValue;
  a2bIn: BitValue;
  a2cIn: BitValue;

  private a1aPart: IRegisterABCDBusPart | undefined;
  private a1bClockPart: IClockBusPart | undefined;
  private a1bI2bPart: II2BBusPart | undefined;
  private a1bMemoryPart: IMemoryBusPart | undefined;
  private a1cAuxRegPart: IAuxRegisterBusPart | undefined;
  private a1cClPart: IAluFunctionClBusPart | undefined;
  private a2abRegPart: IRegisterJMXYBusPart | undefined;
  private a2bPart: IDataSwitchGateBusPart | undefined;
  private a2cPart: IAluOperationBusPart | undefined;

  constructor() {
    this.a1a = new CardPart();
    this.a1bClock = new CardPart();
    this.a1bI2b = new CardPart();
    this.a1bMemory = new CardPart();
    this.a1cAuxReg = new CardPart();
    this.a1cCl = new CardPart();
    this.a2abReg = new CardPart();
    this.a2b = new CardPart();
    this.a2c = new CardPart();

    this.a1aIn = BitValue.Zero;
    this.a1bClockIn = BitValue.Zero;
    this.a1bI2bIn = BitValue.Zero;
    this.a1bMemoryIn = BitValue.Zero;
    this.a1cAuxRegIn = BitValue.Zero;
    this.a1cClIn = BitValue.Zero;
    this.a2abRegIn = BitValue.Zero;
    this.a2bIn = BitValue.Zero;
    this.a2cIn = BitValue.Zero;
  }

  connect(busGroup: IDisplayABusGroup) {
    // Input/Outputs

    this.a1aPart = busGroup.a1Bus.a1aPart;
    this.a1aPart.subscribe(v => this.a1aIn = v);
    this.a1aPart.connect(this.a1a);

    this.a1bClockPart = busGroup.a1Bus.a1bClockPart;
    this.a1bClockPart.subscribe(v => this.a1bClockIn = v);
    this.a1bClockPart.connect(this.a1bClock);

    this.a1bI2bPart = busGroup.a1Bus.a1bI2bPart;
    this.a1bI2bPart.subscribe(v => this.a1bI2bIn = v);
    this.a1bI2bPart.connect(this.a1bI2b);

    this.a1bMemoryPart = busGroup.a1Bus.a1bMemoryPart;
    this.a1bMemoryPart.subscribe(v => this.a1bMemoryIn = v);
    this.a1bMemoryPart.connect(this.a1bMemory);

    this.a1cAuxRegPart = busGroup.a1Bus.a1cAuxRegPart;
    this.a1cAuxRegPart.subscribe(v => this.a1cAuxRegIn = v);
    this.a1cAuxRegPart.connect(this.a1cAuxReg);

    this.a2abRegPart = busGroup.a2Bus.a2abRegPart;
    this.a2abRegPart.subscribe(v => this.a2abRegIn = v);
    this.a2abRegPart.connect(this.a2abReg);

    this.a2bPart = busGroup.a2Bus.a2bPart;
    this.a2bPart.subscribe(v => this.a2bIn = v);
    this.a2bPart.connect(this.a2b);

    this.a1cClPart = busGroup.a1Bus.a1cClPart;
    this.a1cClPart.subscribe(v => this.a1cClIn = v);
    this.a1cClPart.connect(this.a1cCl);

    this.a2cPart = busGroup.a2Bus.a2cPart;
    this.a2cPart.subscribe(v => this.a2cIn = v);
    this.a2cPart.connect(this.a2c);
  }

}
