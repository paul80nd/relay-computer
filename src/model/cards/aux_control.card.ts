import { Value } from "../value";
import { BitValue } from "../bit_value";
import { IAuxControlBusGroup, IControlSwitchesBusGroup } from "../bus/bus_groups";
import { IDataBusPart, IDataSwitchGateBusPart } from "../bus/bus_parts";

export interface IAuxControlCard {
    connect(busGroup1: IControlSwitchesBusGroup, busGroup2: IAuxControlBusGroup): void;
}

export class AuxControlCard implements IAuxControlCard {

    private data: Value;
    private dataPart: IDataBusPart;
    private sds: IDataSwitchGateBusPart;

    constructor() {
        this.data = new Value();
    }

    public connect(busGroup1: IControlSwitchesBusGroup, busGroup2: IAuxControlBusGroup) {
        // Inputs
        this.dataPart = busGroup1.dataControlBus.dataPart;
        this.dataPart.subscribe(this.update);
        this.sds = busGroup2.controlYBus.sdsPart;
        this.sds.subscribe(this.update);

        // Outputs
        busGroup2.dataControlBus.dataPart.connect(this.data);
    }

    private update = () => {
        // Gates the contents of the data switches to the data bus when SDS selected
        if (this.sds && this.dataPart) {
            let newValue = this.sds.getValue().bit(0) ? this.dataPart.getValue() : BitValue.Zero;
            if (newValue !== this.data.getValue()) {
                this.data.setValue(newValue);
            }
        }
    }

}
