import { BitValue } from '../bit_value';
import { CardPart } from '../../model/cards/card_part';
import { ICardYBusGroup } from '../bus/bus_groups';
import { IAddressBusPart, IMemoryBusPart } from '../bus/bus_parts';


export interface IMemoryCard {

    enabled: boolean;
    memoryAddress: BitValue;
    memoryData: BitValue;
    memoryCtrl: BitValue;

    connect(dataBus: ICardYBusGroup): void;
    toggleEnabled(): void;
}

export class MemoryCard implements IMemoryCard {

    public enabled: boolean;
    public memoryAddress: BitValue;
    public memoryData: BitValue;
    public memoryCtrl: BitValue;

    private addressPart: IAddressBusPart;
    private memoryPart: IMemoryBusPart;

    constructor() {
        this.enabled = true;
        this.memoryAddress = BitValue.Zero;
        this.memoryData = BitValue.Zero;
        this.memoryCtrl = BitValue.Zero;
    }

    public connect(busGroup: ICardYBusGroup) {   
        this.addressPart = busGroup.addressBus.addressPart;
        this.addressPart.subscribe(this.update);
        this.memoryPart = busGroup.controlYBus.memoryPart;
        this.memoryPart.subscribe(this.update);
    }

    private update = () => {
        if (this.addressPart) {
            const addr = this.addressPart.value;
            if (!this.memoryAddress.isEqualTo(addr)) { this.memoryAddress = addr; }
        }
        if (this.memoryPart) {
            const memoryCtrl = this.memoryPart.value;
            this.memoryCtrl = memoryCtrl;
        }
    }

    public toggleEnabled(): void {
        this.enabled = !this.enabled;
    }
}
