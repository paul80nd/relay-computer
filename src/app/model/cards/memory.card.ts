import { BitValue } from '../bit_value';
import { ICardYBusGroup } from '../bus/bus_groups';

export interface IMemoryCard {
    connect(dataBus: ICardYBusGroup): void;
}

export class MemoryCard implements IMemoryCard {

    public connect(busGroup: ICardYBusGroup) {
    }
}
