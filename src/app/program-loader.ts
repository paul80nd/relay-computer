/**
 * A program parsed from an assembled hex string, ready to hand to
 * `memory.loadProgram(offset, prog)`.
 */
export interface AssembledProgram {
  /** Little-endian load address taken from the first two bytes. */
  offset: number;
  /** The program bytes (everything after the two offset bytes). */
  prog: number[];
}

/**
 * Parses the clipboard contents of the assembler/IDE (editor.relaycomputer.co.uk)
 * as an assembled program: a stream of hex byte-pairs where the first two bytes
 * are the little-endian load offset (low byte first) and the remainder is the
 * program itself.
 *
 * Returns null when the text isn't a recognisable program — non-hex characters,
 * or fewer than three bytes (i.e. no program after the offset).
 *
 * Hex is accepted in either case; the assembler emits lower-case, but hand-typed
 * or edited input may use upper-case.
 */
export function parseAssembledProgram(text: string): AssembledProgram | null {
  if (!/^[0-9a-fA-F]*$/.test(text)) {
    return null;
  }
  const parts = text.match(/.{1,2}/g);
  if (!parts) {
    return null;
  }
  const values = parts.map(p => parseInt(p, 16));
  if (values.length <= 2) {
    return null;
  }
  const offset = values[0] + (values[1] << 8);
  const prog = values.slice(2);
  return { offset, prog };
}
