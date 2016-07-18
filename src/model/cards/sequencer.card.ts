import { CardPart } from "../../model/cards/card_part";
import { BitValue } from "../bit_value";
import { ICardWBusGroup } from "../bus/bus_groups";
import { IAbortBusPart, IClockBusPart, IResetBusPart } from "../bus/bus_parts";
import { ClockLines, PulseLines, ResetLines } from "../bus/bus_part_lines";

export interface ISequencerCard {

    abort: BitValue;
    fsm: BitValue;

    connect(dataBus: ICardWBusGroup): void;
}

export class SequencerCard implements ISequencerCard {

    public abort: BitValue;
    public fsm: BitValue;
    public pulse: BitValue;

    private lastClock: boolean;

    private pulseOut: CardPart;

    private resetPart: IResetBusPart;
    private clockPart: IClockBusPart;
    private abortPart: IAbortBusPart;

    constructor() {
        this.abort = BitValue.Zero;
        this.fsm = BitValue.Zero;
        this.pulse = BitValue.Zero;
        this.pulseOut = new CardPart();
    }

    public connect(busGroup: ICardWBusGroup) {
        // Inputs
        this.resetPart = busGroup.controlXBus.resetPart;
        this.resetPart.subscribe(this.reset);
        this.clockPart = busGroup.controlXBus.clockPart;
        this.clockPart.subscribe(this.clock);
        this.abortPart = busGroup.operationBus.abortPart;
        this.abortPart.subscribe(this.abortChanged);
        // Outputs
        busGroup.pulseBus.pulsePart.connect(this.pulseOut);
    }

    private reset = () => {
        let reset = this.resetPart.value.bit(ResetLines.RES);
        if (reset) {
            if (!this.fsm.bit(0) && !this.fsm.bit(1) && !this.fsm.bit(2)) {
                this.fsm = this.fsm.flipBit(0);
                this.derrivePulses();
            }
        }
    }

    private abortChanged = () => {
        if (this.abortPart && this.fsm.bit(5)) {
            let abort = this.abortPart.value;

            if (!this.abort.isEqualTo(abort)) { this.abort = abort; }
        }
    }

    private clock = () => {
        let clock = this.clockPart.value.bit(ClockLines.CLK);
        if (clock !== this.lastClock) {
            this.lastClock = clock;
            this.fsm = this.fsm.shiftLeft(24);
            if (this.fsm.bit(9)) {
                this.fsm = this.fsm.flipBit(9);
                this.fsm = this.fsm.flipBit(0);
            }
            if (this.fsm.bit(0)) {
                this.abort = BitValue.Zero;
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
        this.pulseOut.value = pulse;

    }


}
