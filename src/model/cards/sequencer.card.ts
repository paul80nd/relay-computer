import { Value } from "../value";
import { BitValue } from "../bit_value";
import { ICardWBusGroup } from "../bus/bus_groups";
import { IClockBusPart, IResetBusPart } from "../bus/bus_parts";
import { ClockLines, PulseLines, ResetLines } from "../bus/bus_part_lines";

export interface ISequencerCard {

    fsm: BitValue;

    connect(dataBus: ICardWBusGroup): void;
}

export class SequencerCard implements ISequencerCard {

    public fsm: BitValue;
    public pulse: BitValue;

    private lastClock: boolean;

    private pulseOut: Value;

    private resetPart: IResetBusPart;
    private clockPart: IClockBusPart;

    constructor() {
        this.fsm = BitValue.Zero;
        this.pulse = BitValue.Zero;
        this.pulseOut = new Value();
    }

    public connect(busGroup: ICardWBusGroup) {
        // Inputs
        this.resetPart = busGroup.controlXBus.resetPart;
        this.resetPart.subscribe(this.reset);
        this.clockPart = busGroup.controlXBus.clockPart;
        this.clockPart.subscribe(this.clock);
        // Outputs
        busGroup.pulseBus.pulsePart.connect(this.pulseOut);
    }

    private reset = () => {
        let reset = this.resetPart.getValue().bit(ResetLines.RES);
        if (reset) {
            if (!this.fsm.bit(0) && !this.fsm.bit(1) && !this.fsm.bit(2)) {
                this.fsm = this.fsm.flipBit(0);
                this.derrivePulses();
            }
        }
    }

    private clock = () => {
        let clock = this.clockPart.getValue().bit(ClockLines.CLK);
        if (clock !== this.lastClock) {
            this.lastClock = clock;
            this.fsm = this.fsm.shiftLeft(24);
            if (this.fsm.bit(9)) {
                this.fsm = this.fsm.flipBit(9);
                this.fsm = this.fsm.flipBit(0);
            }
            this.derrivePulses();
        }
    }

    private derrivePulses = () => {
        let pulse = BitValue.Zero;
        let fsm = this.fsm;

        // P-C = S5
        if (fsm.bit(5) || fsm.bit(6)) { pulse = pulse.flipBit(PulseLines.C); }
        // P-D = S5'
        if (fsm.bit(5)) { pulse = pulse.flipBit(PulseLines.D); }
        // P-E = S4 | S5
        if (fsm.bit(4) || fsm.bit(5) || fsm.bit(6)) { pulse = pulse.flipBit(PulseLines.E); }

        this.pulse = pulse;

        if (!this.pulseOut.getValue().isEqualTo(pulse)) { this.pulseOut.setValue(pulse); }

    }


}
