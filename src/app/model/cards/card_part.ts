import { BitValue } from '../bit_value';
import { Observable } from '../observable';

/**
 * A card part represents a number of related lines/wires which generate
 * related signals or form a multi-bit value. Events are raised for
 * the card part as a whole when any individial line changes.
 */
export class CardPart extends Observable<BitValue> {

  private _value: BitValue;

  constructor() {
    super();
    this._value = BitValue.Zero;
  }

  get value(): BitValue {
    return this._value;
  }

  set value(newValue: BitValue) {
    if (!this._value.isEqualTo(newValue)) {
      this._value = newValue;
      this.notifyObservers(newValue);
    }
  }

  subscribe(handler: (e: BitValue) => void): void {
    super.subscribe(handler);
    this.notifyObservers(this._value);
  }

  unsubscribe(handler: (e: BitValue) => void): void {
    super.unsubscribe(handler);
    this.notifyObservers(this._value);
  }
}
