import { BitValue } from "../../bit_value";
import { Value } from "../../value";
import { IBusPart, IDataBusPart, IRegisterABCDBusPart } from "../../bus/bus_parts";

export interface IRegisterCardPart {

    value: Value;
    load: boolean;
    select: boolean;

    isSelectable: boolean;

    connect(dataPart: IDataBusPart, ctrlPart: IBusPart): void;
    connect(dataPart: IDataBusPart, ctrlPart: IBusPart, dataPartOut: IDataBusPart): void;
    connectDirect(registerConnect: IDataBusPart): void;
}

export class RegisterCardPart implements IRegisterCardPart {

    public value: Value;
    public load: boolean;
    public select: boolean;

    public isSelectable: boolean;

    private dataPart: IDataBusPart;
    private ctrlPart: IRegisterABCDBusPart;

    private valueOut: Value;

    constructor(private loadLine: number, private selectLine: number = undefined) {

        this.isSelectable = (selectLine !== undefined);

        this.value = new Value();
        this.valueOut = new Value();
    }

    public connect(dataPartIn: IDataBusPart, ctrlPart: IBusPart, dataPartOut: IDataBusPart = undefined) {
        // Inputs
        this.dataPart = dataPartIn;
        this.dataPart.subscribe(this.update);
        this.ctrlPart = ctrlPart;
        this.ctrlPart.subscribe(this.update);
        // Outputs
        if (dataPartOut) { dataPartOut.connect(this.valueOut); }
    }
    public connectDirect(registerConnect: IDataBusPart) {
        // Outputs
        registerConnect.connect(this.value);
    }

    private update = () => {
        if (this.dataPart && this.ctrlPart) {

            let value = this.dataPart.getValue();
            let ld = this.ctrlPart.getValue().bit(this.loadLine);
            let sel = this.selectLine ? this.ctrlPart.getValue().bit(this.selectLine) : false;

            if (ld && sel) {
                // Loading and Selecting -> Clears Register
                if (!this.load) { this.load = true; }
                if (!this.select) { this.select = true; }
                if (!this.value.value.isZero()) { this.value.value = BitValue.Zero; }
                if (!this.valueOut.value.isZero()) { this.valueOut.value = BitValue.Zero; }
            } else if (ld) {
                // Loading -> Sets Register
                if (!this.load) { this.load = true; }
                if (!this.select) { this.select = true; }
                if (!value.isEqualTo(this.value.value)) { this.value.value = value; }
                if (!this.valueOut.value.isZero()) { this.valueOut.value = BitValue.Zero; }
            } else if (sel) {
                // Selecting -> Gate Register
                if (this.load) { this.load = false; }
                if (!this.select) { this.select = true; }
                if (!this.value.value.isEqualTo(this.valueOut.value)) {
                    this.valueOut.value = this.value.value;
                }
            } else {
                if (this.load) { this.load = false; }
                if (this.select) { this.select = false; }
                if (!this.valueOut.value.isZero()) { this.valueOut.value = BitValue.Zero; }
            }
        }
    }
}
