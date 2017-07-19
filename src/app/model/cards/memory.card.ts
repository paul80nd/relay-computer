import { BitValue } from '../bit_value';
import { CardPart } from '../../model/cards/card_part';
import { ICardYBusGroup } from '../bus/bus_groups';
import { IMemoryBusPart } from '../bus/bus_parts';


export interface IMemoryCard {

    enabled: boolean;
    memoryCtrl: BitValue;

    connect(dataBus: ICardYBusGroup): void;
    toggleEnabled(): void;
}

export class MemoryCard implements IMemoryCard {

    public enabled: boolean;
    public memoryCtrl: BitValue;

    private memoryPart: IMemoryBusPart;

    constructor() {
        this.enabled = true;
        this.memoryCtrl = BitValue.Zero;
    }

    public connect(busGroup: ICardYBusGroup) {
        this.memoryPart = busGroup.controlYBus.memoryPart;
        this.memoryPart.subscribe(this.update);
    }

    private update = () => {
        if (this.memoryPart) {
            const memoryCtrl = this.memoryPart.value;
            this.memoryCtrl = memoryCtrl;
        }
    }

    public toggleEnabled(): void {
        this.enabled = !this.enabled;
    }
}
