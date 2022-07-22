import { BitValue } from '../bit_value';
import { CardPart } from '../../model/cards/card_part';
import { ICardYBusGroup } from '../bus/bus_groups';
import { IAddressBusPart, IDataBusPart, IMemoryBusPart } from '../bus/bus_parts';
import { MemoryLines } from '../bus/bus_part_lines';

export interface IMemoryCard {

    memoryAddress: BitValue;
    memoryArray: number[];
    memoryData: BitValue;
    memoryEnabled: CardPart;
    memoryCtrl: BitValue;

    connect(dataBus: ICardYBusGroup): void;
    toggleEnabled(): void;
}

export class MemoryCard implements IMemoryCard {

    memoryAddress: BitValue;
    memoryArray: number[];
    memoryData: BitValue;
    memoryCtrl: BitValue;
    memoryEnabled: CardPart;

    private addressPart: IAddressBusPart;
    private dataPart: IDataBusPart;
    private memoryPart: IMemoryBusPart;

    private dataOut: CardPart;

    constructor() {
        this.dataOut = new CardPart();
        this.memoryEnabled = new CardPart();
        this.memoryEnabled.value = this.memoryEnabled.value.flipBit(0);
        this.memoryAddress = BitValue.Zero;
        this.memoryArray = new Array(32768);
        this.memoryData = BitValue.Zero;
        this.memoryCtrl = BitValue.Zero;
    }

    connect(busGroup: ICardYBusGroup) {
        this.addressPart = busGroup.addressBus.addressPart;
        this.addressPart.subscribe(this.update);
        this.dataPart = busGroup.dataControlBus.dataPart;
        this.dataPart.subscribe(this.update);
        this.memoryPart = busGroup.controlYBus.memoryPart;
        this.memoryPart.subscribe(this.update);
        this.memoryEnabled.subscribe(this.update);
        busGroup.dataControlBus.dataPart.connect(this.dataOut);
    }

    private update = () => {

        if (this.addressPart) {
            // Memory Address permanently connected to Address Bus
            const addr = this.addressPart.value;
            if (!this.memoryAddress.isEqualTo(addr)) { this.memoryAddress = addr; }

            if (this.memoryPart) {
                const memoryCtrl = this.memoryPart.value;
                this.memoryCtrl = memoryCtrl;

                if (this.dataPart && this.memoryPart) {
                    if (memoryCtrl.bit(MemoryLines.MER)) {
                        // Memory Read
                        const data = addr.bit(15) ?  BitValue.Zero : BitValue.fromUnsignedNumber(this.memoryArray[addr.toUnsignedNumber()]);
                        if (!this.memoryData.isEqualTo(data)) { this.memoryData = data; }
                        const dataOut = this.memoryEnabled.value.bit(0) ? data : BitValue.Zero;
                        if (!this.dataOut.value.isEqualTo(dataOut)) { this.dataOut.value = dataOut; }
                    } else {
                        // Data Bus to Memory
                        const data = memoryCtrl.bit(MemoryLines.B2M) ? this.dataPart.value : BitValue.Zero;
                        if (!this.memoryData.isEqualTo(data)) { this.memoryData = data; }
                        if (!this.dataOut.value.isEqualTo(BitValue.Zero)) { this.dataOut.value = BitValue.Zero; }
                        if (memoryCtrl.bit(MemoryLines.MEW) && !addr.bit(15)) {
                            // Memory Write
                            this.memoryArray[addr.toUnsignedNumber()] = data.toUnsignedNumber();
                        }
                    }
                }
            }
        }
    }

    toggleEnabled(): void {
        this.memoryEnabled.value = this.memoryEnabled.value.flipBit(0);
    }
}
