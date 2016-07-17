import { Value } from "../value";
import { BitValue } from "../bit_value";
import { ICardWBusGroup } from "../bus/bus_groups";
import {
    IInstructionBusPart, IOperationBusPart,
    IPulseBusPart,
} from "../bus/bus_parts";
import {
    AbortLines, I2BLines, OperationLines,
    PulseLines, RegABCDLines,
} from "../bus/bus_part_lines";

export interface IControlCard {

    abort: BitValue;
    i2b: BitValue;
    regABCD: BitValue;

    connect(dataBus: ICardWBusGroup): void;
}

export class ControlCard implements IControlCard {

    public abort: BitValue;
    public i2b: BitValue;
    public regABCD: BitValue;

    private abortOut: Value;
    private i2bOut: Value;
    private regABCDOut: Value;

    private instructionPart: IInstructionBusPart;
    private pulsePart: IPulseBusPart;
    private operationPart: IOperationBusPart;

    constructor() {
        this.abort = BitValue.Zero;
        this.abortOut = new Value();
        this.i2b = BitValue.Zero;
        this.i2bOut = new Value();
        this.regABCD = BitValue.Zero;
        this.regABCDOut = new Value();
    }

    public connect(busGroup: ICardWBusGroup) {
        // Inputs
        this.operationPart = busGroup.operationBus.operationPart;
        this.operationPart.subscribe(this.update);
        this.pulsePart = busGroup.pulseBus.pulsePart;
        this.pulsePart.subscribe(this.update);
        this.instructionPart = busGroup.controlInstructionBus.instructionPart;
        this.instructionPart.subscribe(this.update);
        // Outputs
        busGroup.controlZBus.regABCDPart.connect(this.regABCDOut);
        busGroup.operationBus.abortPart.connect(this.abortOut);
        busGroup.controlXBus.i2bPart.connect(this.i2bOut);
    }

    private update = () => {
        if (this.operationPart) {
            let operation = this.operationPart.getValue();

            if (operation.bit(OperationLines.IMV8)) {
                this.updateMv8();
            } else if (operation.bit(OperationLines.ISET)) {
                this.updateSet();
            }
        }
    }

    private updateSet() {
        if (this.pulsePart) {
            let pulse = this.pulsePart.getValue();
            let instr = this.instructionPart.getValue();
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
            if (!this.regABCDOut.getValue().isEqualTo(regABCD)) { this.regABCDOut.setValue(regABCD); }

            if (!this.i2b.isEqualTo(i2b)) { this.i2b = i2b; }
            if (!this.i2bOut.getValue().isEqualTo(i2b)) { this.i2bOut.setValue(i2b); }

            if (!this.abort.isEqualTo(abort)) { this.abort = abort; }
            if (!this.abortOut.getValue().isEqualTo(abort)) { this.abortOut.setValue(abort); }
        }
    }

    private updateMv8() {
        if (this.pulsePart && this.instructionPart) {
            let pulse = this.pulsePart.getValue();
            let instr = this.instructionPart.getValue();
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
            if (!this.regABCDOut.getValue().isEqualTo(regABCD)) { this.regABCDOut.setValue(regABCD); }

            if (!this.abort.isEqualTo(abort)) { this.abort = abort; }
            if (!this.abortOut.getValue().isEqualTo(abort)) { this.abortOut.setValue(abort); }
        }
    }

}
