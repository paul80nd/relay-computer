import { Value } from "../value";
import { IControlSwitchesBusGroup } from "../bus/bus_groups";
import { DataSwitchGateLines, RegAuxLines } from "../bus/bus_part_lines";

export interface IControlSwitchesCard {
    connect(busGroup: IControlSwitchesBusGroup): void;
    hackLoadInstOn(): void;
    hackLoadInstOff(): void;
}

export class ControlSwitchesCard implements IControlSwitchesCard {

    private data: Value;
    private hackAuxReg: Value;
    private hackA2b: Value;

    constructor() {
        this.data = new Value();
        this.hackAuxReg = new Value();
        this.hackA2b = new Value();
    }

    public connect(busGroup: IControlSwitchesBusGroup) {
        // Outputs
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
}

