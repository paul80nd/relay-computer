import { CardPart } from '../../model/cards/card_part';
import { IControlSwitchesBusGroup } from '../bus/bus_groups';
import { DataSwitchGateLines, RegAuxLines, ResetLines } from '../bus/bus_part_lines';
import { ClockLines } from '../bus/bus_part_lines';

export interface IControlSwitchesCard {

    clock: boolean;
    reset: boolean;
    run: boolean;

    data: CardPart;

    connect(busGroup: IControlSwitchesBusGroup): void;
    hackLoadInstOn(): void;
    hackLoadInstOff(): void;
    toggleClock(): void;
    toggleReset(): void;
    toggleRunStop(): void;
}

export class ControlSwitchesCard implements IControlSwitchesCard {

    public clock: boolean;
    public reset: boolean;
    public run: boolean;

    private clockOut: CardPart;
    public data: CardPart;
    private hackAuxReg: CardPart;
    private hackA2b: CardPart;
    private resetOut: CardPart;

    constructor() {
        this.clockOut = new CardPart();
        this.data = new CardPart();
        this.hackAuxReg = new CardPart();
        this.hackA2b = new CardPart();
        this.resetOut = new CardPart();
    }

    public connect(busGroup: IControlSwitchesBusGroup) {
        // Outputs
        busGroup.controlXBus.clockPart.connect(this.clockOut);
        busGroup.controlXBus.resetPart.connect(this.resetOut);
        busGroup.dataControlBus.dataPart.connect(this.data);
        busGroup.hackA1Bus.a1cAuxRegPart.connect(this.hackAuxReg);
        busGroup.hackA2Bus.a2bPart.connect(this.hackA2b);
    }

    public hackLoadInstOn(): void {
        const sds = this.hackA2b.value.bit(DataSwitchGateLines.SDS);
        const lin = this.hackAuxReg.value.bit(RegAuxLines.LIN);
        if (!sds) { this.hackA2b.value = this.hackA2b.value.flipBit(DataSwitchGateLines.SDS); }
        if (!lin) { this.hackAuxReg.value = this.hackAuxReg.value.flipBit(RegAuxLines.LIN); }
    }

    public hackLoadInstOff(): void {
        const sds = this.hackA2b.value.bit(DataSwitchGateLines.SDS);
        const lin = this.hackAuxReg.value.bit(RegAuxLines.LIN);
        if (lin) { this.hackAuxReg.value = this.hackAuxReg.value.flipBit(RegAuxLines.LIN); }
        if (sds) { this.hackA2b.value = this.hackA2b.value.flipBit(DataSwitchGateLines.SDS); }
    }

    public toggleRunStop(): void {
        this.run = !this.run;
        if (this.run) {
            setTimeout(this.clockRun, 500);
        } else {
            if (this.clockOut.value.bit(ClockLines.CLK)) {
                this.clockOut.value =  this.clockOut.value.flipBit(ClockLines.CLK);
            }
        }
    }

    public toggleClock(): void {
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

    public toggleReset(): void {
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
    }

}

