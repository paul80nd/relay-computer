import { describe, it, expect } from 'vitest';
import { HexPipe } from './hex.pipe';

describe('HexPipe', () => {
  const pipe = new HexPipe();

  it('formats and upper-cases a value to the requested digit width', () => {
    expect(pipe.transform(0x0a, '4')).toBe('000A');
    expect(pipe.transform(0xabcd, '4')).toBe('ABCD');
    expect(pipe.transform(255, '2')).toBe('FF');
  });

  it('renders zero as a padded run of zeros', () => {
    expect(pipe.transform(0, '2')).toBe('00');
    expect(pipe.transform(0, '4')).toBe('0000');
  });

  it('left-pads shorter values to the requested width', () => {
    expect(pipe.transform(1, '2')).toBe('01');
    expect(pipe.transform(0x0f, '4')).toBe('000F');
  });

  it('does not pad when the value already fills the width', () => {
    expect(pipe.transform(0xff, '2')).toBe('FF');
    expect(pipe.transform(0xabcd, '4')).toBe('ABCD');
  });

  // Characterisation of current behaviour / known limitations (see TODO.md).
  describe('current behaviour (documented quirks)', () => {
    it('does NOT truncate values wider than the requested width', () => {
      // A value that overflows the field is rendered in full rather than masked.
      expect(pipe.transform(0x1000, '2')).toBe('1000');
    });

    it('does not special-case negative numbers (renders a signed hex string)', () => {
      // In practice registers carry unsigned values, so this path is not exercised.
      expect(pipe.transform(-1, '2')).toBe('-1');
    });
  });
});
