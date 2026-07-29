import { describe, it, expect } from 'vitest';
import { parseAssembledProgram } from './program-loader';

describe('parseAssembledProgram', () => {
  it('splits hex byte-pairs into a little-endian offset and program bytes', () => {
    // 00 01 -> offset 0x0100 (256); remaining bytes are the program.
    expect(parseAssembledProgram('0001aabbcc')).toEqual({
      offset: 256,
      prog: [0xaa, 0xbb, 0xcc],
    });
  });

  it('reads the offset low byte first', () => {
    // 34 12 -> 0x1234.
    expect(parseAssembledProgram('341200')).toEqual({ offset: 0x1234, prog: [0x00] });
  });

  it('loads at offset zero with no leading address bytes set', () => {
    expect(parseAssembledProgram('000041')).toEqual({ offset: 0, prog: [0x41] });
  });

  it('rejects non-hex text', () => {
    expect(parseAssembledProgram('hello world')).toBeNull();
    expect(parseAssembledProgram('00zz11')).toBeNull();
  });

  it('accepts upper-case and mixed-case hex (assembler emits lower-case)', () => {
    // 00 AA BB -> offset 0xAA00, program [0xBB].
    expect(parseAssembledProgram('00AABB')).toEqual({ offset: 0xaa00, prog: [0xbb] });
    expect(parseAssembledProgram('00aAbB')).toEqual({ offset: 0xaa00, prog: [0xbb] });
  });

  it('rejects an empty string', () => {
    expect(parseAssembledProgram('')).toBeNull();
  });

  it('rejects input with only an offset and no program bytes', () => {
    // Two bytes = offset only, nothing to load.
    expect(parseAssembledProgram('0001')).toBeNull();
  });

  it('treats trailing odd nibble as its own byte (min 3 bytes still required)', () => {
    // 'aabbc' -> [0xaa, 0xbb, 0x0c]: three bytes, so it parses.
    expect(parseAssembledProgram('aabbc')).toEqual({ offset: 0xbbaa, prog: [0x0c] });
  });
});
