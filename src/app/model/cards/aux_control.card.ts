import { CardPart } from '../../model/cards/card_part';
import { BitValue } from '../bit_value';
import { IAuxControlBusGroup, IControlSwitchesBusGroup } from '../bus/bus_groups';
import { IAddressBusPart, IDataBusPart, IDataSwitchGateBusPart } from '../bus/bus_parts';
import { DataSwitchGateLines } from '../bus/bus_part_lines';

export interface IAuxControlCard {
    connect(busGroup1: IControlSwitchesBusGroup, busGroup2: IAuxControlBusGroup): void;
}

export class AuxControlCard implements IAuxControlCard {

    private addr: CardPart;
    private data: CardPart;
    private dataPart: IDataBusPart;
    private sds: IDataSwitchGateBusPart;

    constructor() {
        this.addr = new CardPart();
        this.data = new CardPart();
    }

    connect(busGroup1: IControlSwitchesBusGroup, busGroup2: IAuxControlBusGroup) {
        // Inputs
        this.dataPart = busGroup1.dataControlBus.dataPart;
        this.dataPart.subscribe(this.update);
        this.sds = busGroup2.controlYBus.sdsPart;
        this.sds.subscribe(this.update);

        // Outputs
        busGroup2.dataControlBus.dataPart.connect(this.data);
        busGroup2.addressBus.addressPart.connect(this.addr);
    }

    private update = () => {
        // Gates the contents of the data switches to the data bus when SDS/SAS selected
        if (this.sds && this.dataPart) {
            this.data.value = this.sds.value.bit(DataSwitchGateLines.SDS) ? this.dataPart.value : BitValue.Zero;
            this.addr.value = this.sds.value.bit(DataSwitchGateLines.SAS) ? this.dataPart.value : BitValue.Zero;
        }
    };

}
