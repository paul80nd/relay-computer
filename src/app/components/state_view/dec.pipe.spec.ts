import { describe, it, expect } from 'vitest';
import { DecPipe } from './dec.pipe';

describe('DecPipe', () => {
  const pipe = new DecPipe();

  describe('unsigned (neg = false)', () => {
    it('renders the plain decimal value regardless of the top bit', () => {
      expect(pipe.transform(200, '2', false)).toBe('200');
      expect(pipe.transform(255, '2', false)).toBe('255');
      expect(pipe.transform(40000, '4', false)).toBe('40000');
    });

    it('renders zero as "0"', () => {
      expect(pipe.transform(0, '2', false)).toBe('0');
    });
  });

  describe("signed 8-bit (len '2', neg = true)", () => {
    it('leaves values below the sign bit positive', () => {
      expect(pipe.transform(0, '2', true)).toBe('0');
      expect(pipe.transform(1, '2', true)).toBe('1');
      expect(pipe.transform(127, '2', true)).toBe('127'); // max positive
    });

    it("two's-complements values at or above the sign bit", () => {
      expect(pipe.transform(128, '2', true)).toBe('-128'); // min negative
      expect(pipe.transform(200, '2', true)).toBe('-56');
      expect(pipe.transform(255, '2', true)).toBe('-1');
    });
  });

  describe("signed 16-bit (len '4', neg = true)", () => {
    it('leaves values below the sign bit positive', () => {
      expect(pipe.transform(32767, '4', true)).toBe('32767'); // max positive
    });

    it("two's-complements values at or above the sign bit", () => {
      expect(pipe.transform(32768, '4', true)).toBe('-32768'); // min negative
      expect(pipe.transform(40000, '4', true)).toBe('-25536');
      expect(pipe.transform(65535, '4', true)).toBe('-1');
    });
  });

  // NB: the sign/mask maths uses bitwise operators (32-bit signed in JS), so this
  // pipe only supports widths up to len '4' (16-bit). len '8' (32-bit) is not
  // exercised by the app and is not covered here — see TODO.md.
});
