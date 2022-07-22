import { BitValue } from '../bit_value';
import { IDisplayBBusGroup } from '../bus/bus_groups';

export interface IDisplayBCard {

  address: BitValue;
  alu: BitValue;
  aluFuncCl: BitValue;
  clock: BitValue;
  condition: BitValue;
  data: BitValue;
  instruction: BitValue;
  operation: BitValue;

  connect(dataBus: IDisplayBBusGroup): void;

}

export class DisplayBCard implements IDisplayBCard {

  address: BitValue = BitValue.Zero;
  alu: BitValue = BitValue.Zero;
  aluFuncCl: BitValue = BitValue.Zero;
  clock: BitValue = BitValue.Zero;
  condition: BitValue = BitValue.Zero;
  data: BitValue = BitValue.Zero;
  instruction: BitValue = BitValue.Zero;
  operation: BitValue = BitValue.Zero;

  connect(busGroup: IDisplayBBusGroup) {
    busGroup.b1Bus.aluFunctionClPart.subscribe(v => this.aluFuncCl = v);
    busGroup.b1Bus.aluOperationPart.subscribe(v => this.alu = v);
    busGroup.b1Bus.clockPart.subscribe(v => this.clock = v);
    busGroup.b1Bus.conditionPart.subscribe(v => this.condition = v);
    busGroup.b1Bus.dataPart.subscribe(v => this.data = v);
    busGroup.b2Bus.addressPart.subscribe(v => this.address = v);
    busGroup.b2Bus.instructionPart.subscribe(v => this.instruction = v);
    busGroup.b3Bus.operationPart.subscribe(v => this.operation = v);
  }

}
