import { BitValue } from '../bit_value';
import { CardPart } from '../../model/cards/card_part';
import { ICardZBusGroup } from '../bus/bus_groups';
import { IAluOperationBusPart, IDataBusPart } from '../bus/bus_parts';
import { AluOperationLines } from '../bus/bus_part_lines';

export interface IAluArithmeticCard {

  carryOut: boolean;
  value: BitValue;
  carryIn: boolean;

  connect(dataBus: ICardZBusGroup): void;
}

export class AluArithmeticCard implements IAluArithmeticCard {

  carryOut: boolean = false;
  value: BitValue;
  carryIn: boolean = false;

  private inputBPart: IDataBusPart | undefined;
  private inputCPart: IDataBusPart | undefined;
  private aluOpPart: IAluOperationBusPart | undefined;

  private valueOut: CardPart;
  private aluOpOut: CardPart;

  constructor() {
    this.value = BitValue.Zero;
    this.valueOut = new CardPart();
    this.aluOpOut = new CardPart();
  }

  connect(busGroup: ICardZBusGroup) {
    // Inputs
    this.inputBPart = busGroup.registerBCBus.registerBPart;
    this.inputBPart.subscribe(this.update);
    this.inputCPart = busGroup.registerBCBus.registerCPart;
    this.inputCPart.subscribe(this.update);
    this.aluOpPart = busGroup.controlZBus.aluOperationPart;
    this.aluOpPart.subscribe(this.update);
    // Outputs
    busGroup.dataControlBus.dataPart.connect(this.valueOut);
    busGroup.controlZBus.aluOperationPart.connect(this.aluOpOut);
  }

  private update = () => {
    if (this.inputBPart && this.inputCPart && this.aluOpPart) {
      const b = this.inputBPart.value;
      const c = this.inputCPart.value;
      const add = this.aluOpPart.value.bit(AluOperationLines.ADD);
      const inc = this.aluOpPart.value.bit(AluOperationLines.INC);

      let value = inc ? b.increment() : b.add(c);
      const carryOut = value.bit(8);
      value = value.cap(8);

      if (!this.value.isEqualTo(value)) { this.value = value; }
      if (!this.carryOut === carryOut) { this.carryOut = carryOut; }
      if (!this.carryIn === inc) { this.carryIn = inc; }

      this.valueOut.value = (add || inc) ? value : BitValue.Zero;

      if (!this.aluOpOut.value.bit(AluOperationLines.ICY) === carryOut) {
        this.aluOpOut.value = this.aluOpOut.value.flipBit(AluOperationLines.ICY);
      }
    }
  }
}
