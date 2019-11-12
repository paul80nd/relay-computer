import { BitValue } from '../bit_value';
import { CardPart } from '../../model/cards/card_part';
import { IControlSwitchesBusGroup } from '../bus/bus_groups';
import { DataSwitchGateLines, MemoryLines, RegABCDLines, RegAuxLines, ResetLines } from '../bus/bus_part_lines';
import { ClockLines } from '../bus/bus_part_lines';

export interface IControlSwitchesCard {

    clock: boolean;
    reset: boolean;
    run: boolean;

    data: CardPart;

    connect(busGroup: IControlSwitchesBusGroup): void;
    deposit(): void;
    depositNext(): void;
    examine(): void;
    examineNext(): void;
    loadAddr(): void;
    toggleClock(): void;
    toggleReset(): void;
    toggleRunStop(): void;
}

enum AuxInstruction {
    Deposit,
    DepositNext,
    Examine,
    ExamineNext,
    LoadAddr
}

export class ControlSwitchesCard implements IControlSwitchesCard {

    clock: boolean;
    reset: boolean;
    run: boolean;

    private auxInstr: AuxInstruction;
    private auxRegOut: CardPart;
    private auxState: number;
    private clockOut: CardPart;
    data: CardPart;
    private memoryOut: CardPart;
    private regABCDOut: CardPart;
    private resetOut: CardPart;
    private sdsOut: CardPart;

    constructor() {
        this.auxState = 0;
        this.auxRegOut = new CardPart();
        this.clockOut = new CardPart();
        this.data = new CardPart();
        this.memoryOut = new CardPart();
        this.regABCDOut = new CardPart();
        this.resetOut = new CardPart();
        this.sdsOut = new CardPart();
    }

    connect(busGroup: IControlSwitchesBusGroup) {
        // Outputs
        busGroup.controlXBus.clockPart.connect(this.clockOut);
        busGroup.controlXBus.resetPart.connect(this.resetOut);
        busGroup.controlXBus.auxRegisterPart.connect(this.auxRegOut);
        busGroup.controlYBus.sdsPart.connect(this.sdsOut);
        busGroup.controlYBus.memoryPart.connect(this.memoryOut);
        busGroup.controlZBus.regABCDPart.connect(this.regABCDOut);
        busGroup.dataControlBus.dataPart.connect(this.data);
    }

    deposit(): void {
        if (this.auxState == 0) {
            this.auxInstr = AuxInstruction.Deposit;
            this.startAuxClock();
        }
    }
    depositNext(): void {
        if (this.auxState == 0) {
            this.auxInstr = AuxInstruction.DepositNext;
            this.startAuxClock();
        }
    }
    examine(): void {
        if (this.auxState == 0) {
            this.auxInstr = AuxInstruction.Examine;
            this.startAuxClock();
        }
    }
    examineNext(): void {
        if (this.auxState == 0) {
            this.auxInstr = AuxInstruction.ExamineNext;
            this.startAuxClock();
        }
    }
    loadAddr(): void {
        if (this.auxState == 0) {
            this.auxInstr = AuxInstruction.LoadAddr;
            this.startAuxClock();
        }
    }

    private startAuxClock(): void {
        this.auxState = 1;
        setTimeout(this.auxClockRun, 333);
    }

    private auxClockRun = () => {
        if (this.auxState > 0) {

            let auxReg = BitValue.Zero;
            let memory = BitValue.Zero;
            let regABCD = BitValue.Zero;
            let sds = BitValue.Zero;

            if (this.auxState == 1 || this.auxState == 2 || this.auxState == 3) {
                // PULSE A
                if (this.auxInstr == AuxInstruction.Deposit || this.auxInstr == AuxInstruction.DepositNext) {
                    // Sel-PC, Sel-DS and B2M
                    auxReg = auxReg.flipBit(RegAuxLines.SPC);
                    sds = sds.flipBit(DataSwitchGateLines.SDS);
                    memory = memory.flipBit(MemoryLines.B2M);
                }
                if (this.auxInstr == AuxInstruction.Examine || this.auxInstr == AuxInstruction.ExamineNext) {
                    // Sel-PC and Mem-Rd
                    auxReg = auxReg.flipBit(RegAuxLines.SPC);
                    memory = memory.flipBit(MemoryLines.MER);
                }
                if (this.auxInstr == AuxInstruction.LoadAddr) {
                    // Sel-AS
                    sds = sds.flipBit(DataSwitchGateLines.SAS);
                }
            }

            if (this.auxState == 1 || this.auxState == 2) {
                // PULSE B
                if (this.auxInstr == AuxInstruction.Deposit || this.auxInstr == AuxInstruction.DepositNext) {
                    // Mem-WR
                    memory = memory.flipBit(MemoryLines.MEW);
                }
                if (this.auxInstr == AuxInstruction.DepositNext || this.auxInstr == AuxInstruction.ExamineNext) {
                    // Ld-INC
                    auxReg = auxReg.flipBit(RegAuxLines.LIC);
                }
                if (this.auxInstr == AuxInstruction.Examine || this.auxInstr == AuxInstruction.ExamineNext) {
                    // Ld-A
                    regABCD = regABCD.flipBit(RegABCDLines.RLA);
                }
                if (this.auxInstr == AuxInstruction.LoadAddr) {
                    // Ld-PC
                    auxReg = auxReg.flipBit(RegAuxLines.LPC);
                }
            }

            if (this.auxState == 5 || this.auxState == 6) {
                // PULSE C
                if (this.auxInstr == AuxInstruction.DepositNext || this.auxInstr == AuxInstruction.ExamineNext) {
                    // Sel-INC
                    auxReg = auxReg.flipBit(RegAuxLines.SIC);
                }
            }

            if (this.auxState == 5) {
                // PULSE D
                if (this.auxInstr == AuxInstruction.DepositNext || this.auxInstr == AuxInstruction.ExamineNext) {
                    // Ld-PC
                    auxReg = auxReg.flipBit(RegAuxLines.LPC);
                }
            }

            if (!this.auxRegOut.value.isEqualTo(auxReg)) { this.auxRegOut.value = auxReg; }
            if (!this.memoryOut.value.isEqualTo(memory)) { this.memoryOut.value = memory; }
            if (!this.regABCDOut.value.isEqualTo(regABCD)) { this.regABCDOut.value = regABCD; }
            if (!this.sdsOut.value.isEqualTo(sds)) { this.sdsOut.value = sds; }

            if (this.auxState == 4) {
                // AUX-RESET (Short)
                if (this.auxInstr == AuxInstruction.Deposit || this.auxInstr == AuxInstruction.Examine || this.auxInstr == AuxInstruction.LoadAddr) {
                    this.auxState = 0;
                    return;     // Fall from method without setting callback timeout
                }
            }
            if (this.auxState == 7) {
                // AUX-RESET (Long)
                this.auxState = 0;
                return;
            }

            this.auxState += 1;
            setTimeout(this.auxClockRun, 333);
        }
    };

    toggleRunStop(): void {
        this.run = !this.run;
        if (this.run) {
            setTimeout(this.clockRun, 500);
        } else {
            if (this.clockOut.value.bit(ClockLines.CLK)) {
                this.clockOut.value =  this.clockOut.value.flipBit(ClockLines.CLK);
            }
        }
    }

    toggleClock(): void {
        if (!this.clock) {
            this.clock = true;
            if (!this.run) { this.clockOut.value = this.clockOut.value.flipBit(ClockLines.CLK); }
            setTimeout(() => {
                this.clock = false;
                if (this.clockOut.value.bit(ClockLines.CLK)) {
                    this.clockOut.value = this.clockOut.value.flipBit(ClockLines.CLK);
                }
            }, 500);
        }
    }

    toggleReset(): void {
        if (!this.reset) {
            this.reset = true;
            if (!this.run) { this.resetOut.value = this.resetOut.value.flipBit(ResetLines.RES); }
            setTimeout(() => {
                this.reset = false;
                if (this.resetOut.value.bit(ResetLines.RES)) {
                    this.resetOut.value = this.resetOut.value.flipBit(ResetLines.RES);
                }
            }, 500);
        }

    }

    private clockRun = () => {
        if (this.run) {
            this.clockOut.value = this.clockOut.value.flipBit(ClockLines.CLK);
            setTimeout(this.clockRun, 500);
        }
    };

}
