import { CardPart } from '../../model/cards/card_part';
import { BitValue } from '../bit_value';
import { ICardWBusGroup } from '../bus/bus_groups';
import { IInstructionBusPart } from '../bus/bus_parts';
import { OperationLines } from '../bus/bus_part_lines';

export interface IDecoderCard {

  operation: BitValue;

  connect(dataBus: ICardWBusGroup): void;
}

export class DecoderCard implements IDecoderCard {

  operation: BitValue;

  private instrPart: IInstructionBusPart | undefined;

  private operationOut: CardPart;

  constructor() {
    this.operation = BitValue.Zero;
    this.operationOut = new CardPart();
  }

  connect(busGroup: ICardWBusGroup) {
    // Inputs
    this.instrPart = busGroup.controlInstructionBus.instructionPart;
    this.instrPart.subscribe(this.update);
    // Outputs
    busGroup.operationBus.operationPart.connect(this.operationOut);
  }

  private update = () => {
    if (this.instrPart) {
      const opCode = this.instrPart.value;
      let oper = BitValue.Zero;

      if (opCode.bit(7) && opCode.bit(6)) {
        // 11xxxxxx GOTO
        oper = oper.flipBit(OperationLines.IGTO);
      }
      if (opCode.bit(7) && !opCode.bit(6) && !opCode.bit(5) && !opCode.bit(4)) {
        // 1000xxxx ALU
        oper = oper.flipBit(OperationLines.IALU);
      } else if (!opCode.bit(7)) {
        if (opCode.bit(6)) {
          // 01xxxxxx SET-AB
          oper = oper.flipBit(OperationLines.ISET);
        } else {
          // 00xxxxxx MOVE-8
          oper = oper.flipBit(OperationLines.IMV8);
        }
      }

      if (!this.operation.isEqualTo(oper)) { this.operation = oper; }
      this.operationOut.value = oper;
    }
  }
}
