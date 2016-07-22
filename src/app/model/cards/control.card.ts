import { CardPart } from "../../model/cards/card_part";
import { BitValue } from "../bit_value";
import { ICardWBusGroup } from "../bus/bus_groups";
import {
    IAluFunctionClBusPart, IInstructionBusPart, IOperationBusPart,
    IPulseBusPart,
} from "../bus/bus_parts";
import {
    AbortLines, AluFunctionClLines, I2BLines, OperationLines,
    PulseLines, RegABCDLines,
} from "../bus/bus_part_lines";

export interface IControlCard {

    abort: BitValue;
    aluFunc: BitValue;
    i2b: BitValue;
    regABCD: BitValue;

    connect(dataBus: ICardWBusGroup): void;
}

export class ControlCard implements IControlCard {

    public abort: BitValue;
    public aluFunc: BitValue;
    public i2b: BitValue;
    public regABCD: BitValue;

    private abortOut: CardPart;
    private aluFuncOut: CardPart;
    private i2bOut: CardPart;
    private regABCDOut: CardPart;

    private aluFuncClPart: IAluFunctionClBusPart;
    private instructionPart: IInstructionBusPart;
    private pulsePart: IPulseBusPart;
    private operationPart: IOperationBusPart;

    constructor() {
        this.abort = BitValue.Zero;
        this.abortOut = new CardPart();
        this.aluFunc = BitValue.Zero;
        this.aluFuncOut = new CardPart();
        this.i2b = BitValue.Zero;
        this.i2bOut = new CardPart();
        this.regABCD = BitValue.Zero;
        this.regABCDOut = new CardPart();
    }

    public connect(busGroup: ICardWBusGroup) {
        // Inputs
        this.operationPart = busGroup.operationBus.operationPart;
        this.operationPart.subscribe(this.update);
        this.pulsePart = busGroup.pulseBus.pulsePart;
        this.pulsePart.subscribe(this.update);
        this.instructionPart = busGroup.controlInstructionBus.instructionPart;
        this.instructionPart.subscribe(this.update);
        this.aluFuncClPart = busGroup.controlInstructionBus.aluFunctionClPart;
        this.aluFuncClPart.subscribe(this.update);
        // Outputs
        busGroup.controlZBus.regABCDPart.connect(this.regABCDOut);
        busGroup.operationBus.abortPart.connect(this.abortOut);
        busGroup.controlXBus.i2bPart.connect(this.i2bOut);
        busGroup.controlInstructionBus.aluFunctionClPart.connect(this.aluFuncOut);
    }

    private update = () => {
        if (this.operationPart) {
            let operation = this.operationPart.value;

            if (operation.bit(OperationLines.IMV8)) {
                this.updateMv8();
            } else if (operation.bit(OperationLines.ISET)) {
                this.updateSet();
            } else if (operation.bit(OperationLines.IALU)) {
                this.updateAlu();
            }
        }
    }

    private updateAlu() {
        if (this.pulsePart && this.instructionPart) {
            let pulse = this.pulsePart.value;
            let instr = this.instructionPart.value;
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
            let pulse = this.pulsePart.value;
            let instr = this.instructionPart.value;
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
            let pulse = this.pulsePart.value;
            let instr = this.instructionPart.value;
            let regABCD = BitValue.Zero;
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
                }
                // ABT-8
                abort = abort.flipBit(AbortLines.AT08);
            }

            if (!this.regABCD.isEqualTo(regABCD)) { this.regABCD = regABCD; }
            this.regABCDOut.value = regABCD;

            if (!this.abort.isEqualTo(abort)) { this.abort = abort; }
            this.abortOut.value = abort;
        }
    }

}
