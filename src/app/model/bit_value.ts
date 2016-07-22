export class BitValue {

    private static zeroInstance: BitValue = new BitValue(0);

    private value: number;

    public static get Zero() { return this.zeroInstance; }

    public static combine(values: BitValue[]): BitValue {
        return new BitValue(values.map(v => v.value).reduce((a, b) => a | b));
    }

    public bit(position: number): boolean {
        let bit = Math.pow(2, position);
        return (this.value & bit) === bit;
    }

    public isZero(): boolean {
        return this.value === 0;
    }

    public isEqualTo(other: BitValue) {
        return this.value === other.value;
    }

    public flipBit(position: number): BitValue {
        let bit = Math.pow(2, position);
        return new BitValue(this.value ^ bit);
    }

    public increment(): BitValue {
        return new BitValue(this.value + 1);
    }

    public not(): BitValue {
        return new BitValue(~this.value);
    }

    public shiftLeft(bits: number): BitValue {
        let value = new BitValue(this.value << 1);
        if (value.bit(bits)) { value = value.flipBit(0); }
        value = value.cap(bits);
        return value;
    }

    public and(other: BitValue) {
        return new BitValue(this.value & other.value);
    }

    public or(other: BitValue) {
        return new BitValue(this.value | other.value);
    }

    public xor(other: BitValue) {
        return new BitValue(this.value ^ other.value);
    }

    public add(other: BitValue) {
        return new BitValue(this.value + other.value);
    }

    public cap(bits: number) {
        let mask = Math.pow(2, bits) - 1;
        return new BitValue(this.value & mask);
    }

    private constructor(value: number) {
        this.value = value;
    }

}
