import { Value } from "../value";
import { BitValue } from "../bit_value";
import { ICardWBusGroup } from "../bus/bus_groups";
import {
    IInstructionBusPart, IOperationBusPart,
    IPulseBusPart,
} from "../bus/bus_parts";
import { OperationLines, PulseLines, RegABCDLines } from "../bus/bus_part_lines";

export interface IControlCard {

    regABCD: BitValue;

    connect(dataBus: ICardWBusGroup): void;
}

export class ControlCard implements IControlCard {

    public regABCD: BitValue;

    private regABCDOut: Value;

    private instructionPart: IInstructionBusPart;
    private pulsePart: IPulseBusPart;
    private operationPart: IOperationBusPart;

    constructor() {
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
    }

    private update = () => {
        if (this.operationPart) {
            let operation = this.operationPart.getValue();

            if (operation.bit(OperationLines.IMV8)) {
                this.updateMv8();
            }
        }
    }

    private updateMv8() {
        if (this.pulsePart && this.instructionPart) {
            let pulse = this.pulsePart.getValue();
            let instr = this.instructionPart.getValue();
            let regABCD = BitValue.Zero;

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
            }

            if (!this.regABCD.isEqualTo(regABCD)) { this.regABCD = regABCD; }
            if (!this.regABCDOut.getValue().isEqualTo(regABCD)) { this.regABCDOut.setValue(regABCD); }
        }
    }

}
