import { CardPart } from '../../model/cards/card_part';
import { BitValue } from '../bit_value';
import { ICardWBusGroup } from '../bus/bus_groups';
import {
  IAluFunctionClBusPart, IInstructionBusPart, IOperationBusPart,
  IPulseBusPart,
  IConditionBusPart
} from '../bus/bus_parts';
import {
  AbortLines, AluFunctionClLines, I2BLines, MemoryLines,
  OperationLines, PulseLines, RegABCDLines, RegAuxLines, RegJMXYLines, ConditionLines
} from '../bus/bus_part_lines';

export interface IControlCard {

  abort: BitValue;
  aluFunc: BitValue;
  auxReg: BitValue;
  i2b: BitValue;
  memory: BitValue;
  regABCD: BitValue;
  regJMXY: BitValue;

  connect(dataBus: ICardWBusGroup): void;
}

export class ControlCard implements IControlCard {

  abort: BitValue;
  aluFunc: BitValue;
  auxReg: BitValue;
  i2b: BitValue;
  memory: BitValue;
  regABCD: BitValue;
  regJMXY: BitValue;

  private abortOut: CardPart;
  private aluFuncOut: CardPart;
  private auxRegOut: CardPart;
  private i2bOut: CardPart;
  private memoryOut: CardPart;
  private regABCDOut: CardPart;
  private regJMXYOut: CardPart;

  private aluFuncClPart: IAluFunctionClBusPart | undefined;
  private aluConditionPart: IConditionBusPart | undefined;
  private instructionPart: IInstructionBusPart | undefined;
  private pulsePart: IPulseBusPart | undefined;
  private operationPart: IOperationBusPart | undefined;

  constructor() {
    this.abort = BitValue.Zero;
    this.abortOut = new CardPart();
    this.aluFunc = BitValue.Zero;
    this.aluFuncOut = new CardPart();
    this.auxReg = BitValue.Zero;
    this.auxRegOut = new CardPart();
    this.i2b = BitValue.Zero;
    this.i2bOut = new CardPart();
    this.memory = BitValue.Zero;
    this.memoryOut = new CardPart();
    this.regABCD = BitValue.Zero;
    this.regABCDOut = new CardPart();
    this.regJMXY = BitValue.Zero;
    this.regJMXYOut = new CardPart();
  }

  connect(busGroup: ICardWBusGroup) {
    // Inputs
    this.operationPart = busGroup.operationBus.operationPart;
    this.operationPart.subscribe(this.update);
    this.pulsePart = busGroup.pulseBus.pulsePart;
    this.pulsePart.subscribe(this.update);
    this.instructionPart = busGroup.controlInstructionBus.instructionPart;
    this.instructionPart.subscribe(this.update);
    this.aluFuncClPart = busGroup.controlInstructionBus.aluFunctionClPart;
    this.aluFuncClPart.subscribe(this.update);
    this.aluConditionPart = busGroup.controlInstructionBus.conditionPart;
    this.aluConditionPart.subscribe(this.update);
    // Outputs
    busGroup.controlInstructionBus.aluFunctionClPart.connect(this.aluFuncOut);
    busGroup.controlXBus.i2bPart.connect(this.i2bOut);
    busGroup.controlXBus.auxRegisterPart.connect(this.auxRegOut);
    busGroup.controlYBus.memoryPart.connect(this.memoryOut);
    busGroup.controlYBus.regJMXYPart.connect(this.regJMXYOut);
    busGroup.controlZBus.regABCDPart.connect(this.regABCDOut);
    busGroup.operationBus.abortPart.connect(this.abortOut);
  }

  private update = () => {
    if (this.operationPart) {
      const operation = this.operationPart.value;

      this.updateInstFetchAndInc();

      if (operation.bit(OperationLines.IMV8)) {
        this.updateMv8();
      } else if (operation.bit(OperationLines.ISET)) {
        this.updateSet();
      } else if (operation.bit(OperationLines.IALU)) {
        this.updateAlu();
      } else if (operation.bit(OperationLines.IGTO)) {
        this.updateGoto();
      }
    }
  }

  private updateInstFetchAndInc() {
    if (this.pulsePart) {
      const pulse = this.pulsePart.value;

      let auxReg = BitValue.Zero;
      let memory = BitValue.Zero;

      if (pulse.bit(PulseLines.A)) {
        // SEL-PC
        auxReg = auxReg.flipBit(RegAuxLines.SPC);
        // MEM-READ
        memory = memory.flipBit(MemoryLines.MER);
      }
      if (pulse.bit(PulseLines.B)) {
        // LD-INC
        auxReg = auxReg.flipBit(RegAuxLines.LIC);
        // LD-INST
        auxReg = auxReg.flipBit(RegAuxLines.LIN);
      }
      if (pulse.bit(PulseLines.C)) {
        // SEL-INC
        auxReg = auxReg.flipBit(RegAuxLines.SIC);
      }
      if (pulse.bit(PulseLines.D)) {
        // LD-PC
        auxReg = auxReg.flipBit(RegAuxLines.LPC);
      }

      if (!this.auxReg.isEqualTo(auxReg)) { this.auxReg = auxReg; }
      this.auxRegOut.value = auxReg;
      if (!this.memory.isEqualTo(memory)) { this.memory = memory; }
      this.memoryOut.value = memory;
    }
  }

  private updateAlu() {
    if (this.pulsePart && this.instructionPart) {
      const pulse = this.pulsePart.value;
      const instr = this.instructionPart.value;
      let regABCD = BitValue.Zero;
      let abort = BitValue.Zero;
      let aluFunc = BitValue.Zero;

      if (pulse.bit(PulseLines.D)) {
        // REG-LD
        if (instr.bit(3)) {
          regABCD = regABCD.flipBit(RegABCDLines.RLD);
        } else {
          regABCD = regABCD.flipBit(RegABCDLines.RLA);
        }
        // COND-LD
        aluFunc = aluFunc.flipBit(AluFunctionClLines.CL);
        // ABORT
        abort = abort.flipBit(AbortLines.AT08);
      }
      if (pulse.bit(PulseLines.E)) {
        // ALU-FUNC
        if (instr.bit(0)) { aluFunc = aluFunc.flipBit(AluFunctionClLines.F0); }
        if (instr.bit(1)) { aluFunc = aluFunc.flipBit(AluFunctionClLines.F1); }
        if (instr.bit(2)) { aluFunc = aluFunc.flipBit(AluFunctionClLines.F2); }
      }

      if (!this.regABCD.isEqualTo(regABCD)) { this.regABCD = regABCD; }
      this.regABCDOut.value = regABCD;

      if (!this.aluFunc.isEqualTo(aluFunc)) { this.aluFunc = aluFunc; }
      this.aluFuncOut.value = aluFunc;

      if (!this.abort.isEqualTo(abort)) { this.abort = abort; }
      this.abortOut.value = abort;
    }
  }
  private updateSet() {
    if (this.pulsePart && this.instructionPart) {
      const pulse = this.pulsePart.value;
      const instr = this.instructionPart.value;
      let regABCD = BitValue.Zero;
      let i2b = BitValue.Zero;
      let abort = BitValue.Zero;

      if (pulse.bit(PulseLines.D)) {
        // REG-LD
        if (instr.bit(5)) {
          regABCD = regABCD.flipBit(RegABCDLines.RLB);
        } else {
          regABCD = regABCD.flipBit(RegABCDLines.RLA);
        }
        // ABT-8
        abort = abort.flipBit(AbortLines.AT08);
      }
      if (pulse.bit(PulseLines.E)) {
        // IM-TO-BUS
        i2b = i2b.flipBit(I2BLines.I2B);
      }

      if (!this.regABCD.isEqualTo(regABCD)) { this.regABCD = regABCD; }
      this.regABCDOut.value = regABCD;

      if (!this.i2b.isEqualTo(i2b)) { this.i2b = i2b; }
      this.i2bOut.value = i2b;

      if (!this.abort.isEqualTo(abort)) { this.abort = abort; }
      this.abortOut.value = abort;
    }
  }

  private updateMv8() {
    if (this.pulsePart && this.instructionPart) {
      const pulse = this.pulsePart.value;
      const instr = this.instructionPart.value;
      let regABCD = BitValue.Zero;
      let regJMXY = BitValue.Zero;
      let abort = BitValue.Zero;

      if (pulse.bit(PulseLines.C)) {
        // REG-SEL
        if (!instr.bit(2)) {
          if (!instr.bit(1)) {
            if (!instr.bit(0)) {
              regABCD = regABCD.flipBit(RegABCDLines.RSA);
            } else {
              regABCD = regABCD.flipBit(RegABCDLines.RSB);
            }
          } else {
            if (!instr.bit(0)) {
              regABCD = regABCD.flipBit(RegABCDLines.RSC);
            } else {
              regABCD = regABCD.flipBit(RegABCDLines.RSD);
            }
          }
        } else {
          if (!instr.bit(1)) {
            if (!instr.bit(0)) {
              regJMXY = regJMXY.flipBit(RegJMXYLines.SM1);
            } else {
              regJMXY = regJMXY.flipBit(RegJMXYLines.SM2);
            }
          } else {
            if (!instr.bit(0)) {
              regJMXY = regJMXY.flipBit(RegJMXYLines.SEX);
            } else {
              regJMXY = regJMXY.flipBit(RegJMXYLines.SEY);
            }
          }
        }
      }

      if (pulse.bit(PulseLines.D)) {
        // REG-LD
        if (!instr.bit(5)) {
          if (!instr.bit(4)) {
            if (!instr.bit(3)) {
              regABCD = regABCD.flipBit(RegABCDLines.RLA);
            } else {
              regABCD = regABCD.flipBit(RegABCDLines.RLB);
            }
          } else {
            if (!instr.bit(3)) {
              regABCD = regABCD.flipBit(RegABCDLines.RLC);
            } else {
              regABCD = regABCD.flipBit(RegABCDLines.RLD);
            }
          }
        } else {
          if (!instr.bit(4)) {
            if (!instr.bit(3)) {
              regJMXY = regJMXY.flipBit(RegJMXYLines.LM1);
            } else {
              regJMXY = regJMXY.flipBit(RegJMXYLines.LM2);
            }
          } else {
            if (!instr.bit(3)) {
              regJMXY = regJMXY.flipBit(RegJMXYLines.LDX);
            } else {
              regJMXY = regJMXY.flipBit(RegJMXYLines.LDY);
            }
          }
        }
        // ABT-8
        abort = abort.flipBit(AbortLines.AT08);
      }

      if (!this.regABCD.isEqualTo(regABCD)) { this.regABCD = regABCD; }
      this.regABCDOut.value = regABCD;

      if (!this.regJMXY.isEqualTo(regJMXY)) { this.regJMXY = regJMXY; }
      this.regJMXYOut.value = regJMXY;

      if (!this.abort.isEqualTo(abort)) { this.abort = abort; }
      this.abortOut.value = abort;
    }
  }

  private updateGoto() {
    if (this.pulsePart && this.instructionPart && this.aluConditionPart) {
      const pulse = this.pulsePart.value;
      const instr = this.instructionPart.value;
      const alu = this.aluConditionPart.value;

      let auxReg = this.auxReg;
      let memory = this.memory;
      let regJMXY = BitValue.Zero;

      if (pulse.bit(PulseLines.J) || pulse.bit(PulseLines.N)) {
        // SEL-PC & MEM-RD
        auxReg = auxReg.flipBit(RegAuxLines.SPC);
        memory = memory.flipBit(MemoryLines.MER);
      }
      if (pulse.bit(PulseLines.K) || pulse.bit(PulseLines.O)) {
        // LD-INC
        auxReg = auxReg.flipBit(RegAuxLines.LIC);
      }
      if (pulse.bit(PulseLines.K)) {
        // LD-M1/J1
        if (instr.bit(5)) {
          regJMXY = regJMXY.flipBit(RegJMXYLines.LJ1);
        } else {
          regJMXY = regJMXY.flipBit(RegJMXYLines.LM1);
        }
      }
      if (pulse.bit(PulseLines.O)) {
        // LD-M2/J2
        if (instr.bit(5)) {
          regJMXY = regJMXY.flipBit(RegJMXYLines.LJ2);
        } else {
          regJMXY = regJMXY.flipBit(RegJMXYLines.LM2);
        }
      }
      if (pulse.bit(PulseLines.L) || pulse.bit(PulseLines.Q)) {
        // SEL-INC
        auxReg = auxReg.flipBit(RegAuxLines.SIC);
      }
      if (pulse.bit(PulseLines.M) || pulse.bit(PulseLines.R)) {
        // LD-PC
        auxReg = auxReg.flipBit(RegAuxLines.LPC);
      }
      if (pulse.bit(PulseLines.R)) {
        // LD-XY (optional)
        if (instr.bit(0)) {
          regJMXY = regJMXY.flipBit(RegJMXYLines.LXY);
        }
      }
      if (pulse.bit(PulseLines.S)) {
        // SEL-J
        regJMXY = regJMXY.flipBit(RegJMXYLines.SEJ);
      }
      if (pulse.bit(PulseLines.T)) {
        // LD-PC (optional)
        if ((instr.bit(1) && alu.bit(ConditionLines.NZ)) ||
          (instr.bit(2) && alu.bit(ConditionLines.EZ)) ||
          (instr.bit(3) && alu.bit(ConditionLines.CY)) ||
          (instr.bit(4) && alu.bit(ConditionLines.SN))) {
          auxReg = auxReg.flipBit(RegAuxLines.LPC);
        }
      }

      if (!this.auxReg.isEqualTo(auxReg)) { this.auxReg = auxReg; }
      this.auxRegOut.value = auxReg;
      if (!this.memory.isEqualTo(memory)) { this.memory = memory; }
      this.memoryOut.value = memory;
      if (!this.regJMXY.isEqualTo(regJMXY)) { this.regJMXY = regJMXY; }
      this.regJMXYOut.value = regJMXY;
    }
  }

}
