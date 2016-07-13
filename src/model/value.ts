import { BitValue } from "./bit_value";
import { Observable } from "./observable";

export class Value extends Observable {

    private value: BitValue;

    constructor() {
        super();
        this.value = BitValue.Zero;
    }

    public getValue() {
        return this.value;
    }

    public setValue(newValue: BitValue) {
        if (!this.value.isEqualTo(newValue)) {
            this.value = newValue;
            this.notifyObservers();
        }
    }
}
