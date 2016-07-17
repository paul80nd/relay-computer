import { BitValue } from "./bit_value";
import { Observable } from "./observable";

export class Value extends Observable<BitValue> {

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
            this.notifyObservers(newValue);
        }
    }

    public subscribe(handler: {(e: BitValue): void}): void {
        super.subscribe(handler);
        this.notifyObservers(this.value);
    }

    public unsubscribe(handler: {(e: BitValue): void}): void {
        super.unsubscribe(handler);
        this.notifyObservers(this.value);
    }
}
