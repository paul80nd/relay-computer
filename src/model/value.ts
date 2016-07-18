import { BitValue } from "./bit_value";
import { Observable } from "./observable";

export class Value extends Observable<BitValue> {

    private _value: BitValue;

    constructor() {
        super();
        this._value = BitValue.Zero;
    }

    public get value(): BitValue {
        return this._value;
    }

    public set value(newValue: BitValue) {
        if (!this._value.isEqualTo(newValue)) {
            this._value = newValue;
            this.notifyObservers(newValue);
        }
    }

    public subscribe(handler: {(e: BitValue): void}): void {
        super.subscribe(handler);
        this.notifyObservers(this._value);
    }

    public unsubscribe(handler: {(e: BitValue): void}): void {
        super.unsubscribe(handler);
        this.notifyObservers(this._value);
    }
}
