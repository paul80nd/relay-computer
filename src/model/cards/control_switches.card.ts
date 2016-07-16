import { Value } from "../value";
import { IControlSwitchesBusGroup } from "../bus/bus_groups";
import { DataSwitchGateLines, RegAuxLines, ResetLines } from "../bus/bus_part_lines";
import { ClockLines } from "../bus/bus_part_lines";

export interface IControlSwitchesCard {
    connect(busGroup: IControlSwitchesBusGroup): void;
    hackLoadInstOn(): void;
    hackLoadInstOff(): void;
}

export class ControlSwitchesCard implements IControlSwitchesCard {

    public clock: boolean;
    public reset: boolean;
    public run: boolean;

    private clockOut: Value;
    private data: Value;
    private hackAuxReg: Value;
    private hackA2b: Value;
    private resetOut: Value;

    constructor() {
        this.clockOut = new Value();
        this.data = new Value();
        this.hackAuxReg = new Value();
        this.hackA2b = new Value();
        this.resetOut = new Value();
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
        let sds = this.hackA2b.getValue().bit(DataSwitchGateLines.SDS);
        let lin = this.hackAuxReg.getValue().bit(RegAuxLines.LIN);
        if (!sds) { this.hackA2b.setValue(this.hackA2b.getValue().flipBit(DataSwitchGateLines.SDS)); }
        if (!lin) { this.hackAuxReg.setValue(this.hackAuxReg.getValue().flipBit(RegAuxLines.LIN)); }
    }

    public hackLoadInstOff(): void {
        let sds = this.hackA2b.getValue().bit(DataSwitchGateLines.SDS);
        let lin = this.hackAuxReg.getValue().bit(RegAuxLines.LIN);
        if (lin) { this.hackAuxReg.setValue(this.hackAuxReg.getValue().flipBit(RegAuxLines.LIN)); }
        if (sds) { this.hackA2b.setValue(this.hackA2b.getValue().flipBit(DataSwitchGateLines.SDS)); }
    }

    public toggleRunStop(): void {
        this.run = !this.run;
    }

    public toggleClock(): void {
        if (!this.clock) {
            this.clock = true;
            if (!this.run) { this.clockOut.setValue(this.clockOut.getValue().flipBit(ClockLines.CLK)); }
            setTimeout(() => {
                this.clock = false;
                if (this.clockOut.getValue().bit(ClockLines.CLK)) {
                    this.clockOut.setValue(this.clockOut.getValue().flipBit(ClockLines.CLK));
                }
            }, 500);
        }
    }

    public toggleReset(): void {
        if (!this.reset) {
            this.reset = true;
            if (!this.run) { this.resetOut.setValue(this.resetOut.getValue().flipBit(ResetLines.RES)); }
            setTimeout(() => {
                this.reset = false;
                if (this.resetOut.getValue().bit(ResetLines.RES)) {
                    this.resetOut.setValue(this.resetOut.getValue().flipBit(ResetLines.RES));
                }
            }, 500);
        }

    }
}

