export class BitValue {

  private static zeroInstance: BitValue = new BitValue(0);

  private value: number;

  static get Zero() { return this.zeroInstance; }

  static combine(values: BitValue[]): BitValue {
    return new BitValue(values.map(v => v.value).reduce((a, b) => a | b));
  }

  static fromUnsignedNumber(value: number): BitValue {
    return new BitValue(value);
  }

  static fromHiLo(valueHi: BitValue, valueLo: BitValue) {
    return new BitValue((valueLo.value & 0xFF) | ((valueHi.value & 0xFF) << 8));
  }

  toUnsignedNumber() {
    return this.value;
  }

  bit(position: number): boolean {
    const bit = Math.pow(2, position);
    return (this.value & bit) === bit;
  }

  isZero(): boolean {
    return this.value === 0;
  }

  isEqualTo(other: BitValue) {
    return this.value === other.value;
  }

  flipBit(position: number): BitValue {
    const bit = Math.pow(2, position);
    return new BitValue(this.value ^ bit);
  }

  increment(): BitValue {
    return new BitValue(this.value + 1);
  }

  not(): BitValue {
    return new BitValue(~this.value);
  }

  shiftLeft(bits: number): BitValue {
    let value = new BitValue(this.value << 1);
    if (value.bit(bits)) { value = value.flipBit(0); }
    value = value.cap(bits);
    return value;
  }

  and(other: BitValue) {
    return new BitValue(this.value & other.value);
  }

  or(other: BitValue) {
    return new BitValue(this.value | other.value);
  }

  xor(other: BitValue) {
    return new BitValue(this.value ^ other.value);
  }

  add(other: BitValue) {
    return new BitValue(this.value + other.value);
  }

  hiPart() {
    return new BitValue((this.value & 0xFF00) >> 8);
  }
  loPart() {
    return new BitValue(this.value & 0xFF);
  }

  cap(bits: number) {
    const mask = Math.pow(2, bits) - 1;
    return new BitValue(this.value & mask);
  }

  private constructor(value: number) {
    this.value = value;
  }

}
