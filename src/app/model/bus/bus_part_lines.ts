export enum AbortLines {
  /** Abort 8 (8 cycle instruction) */
  AT08,
  /** Abort 10 (10 cycle instruction) */
  AT10,
  /** Abort 12 (12 cycle instruction) */
  AT12,
  /** Abort 14 (14 cycle instruction) */
  AT14
}

export enum AluFunctionClLines {
  /** Condition Load */
  CL,
  /** Function bit 0 */
  F0,
  /** Function bit 1 */
  F1,
  /** Function bit 2 */
  F2
}

export enum AluOperationLines {
  /** ALU Add */
  ADD,
  /** ALU Increment */
  INC,
  /** ALU Shift Left */
  SHL,
  /** ALU And */
  AND,
  /** ALU Or */
  ORR,
  /** ALU Xor */
  XOR,
  /** ALU Not */
  NOT,
  /** Internal Carry */
  ICY,
  /** ALU Clear (Implicit from no op) */
  CLR
}

export enum ClockLines {
  /** Clock */
  CLK
}

export enum ConditionLines {
  /** Sign Condition */
  SN,
  /** Carry Condition */
  CY,
  /** Zero Condition */
  EZ,
  /** Non-Zero Condition */
  NZ
}

export enum DataSwitchGateLines {
  /** Select Data Switches */
  SDS,
  /** Select Address Switches */
  SAS
}

export enum I2BLines {
  /** Immediate To Bus */
  I2B
}

export enum MemoryLines {
  /** Data Bus To Memory */
  B2M,
  /** Memory Read */
  MER,
  /** Memory Write */
  MEW
}

export enum OperationLines {
  /** SET-AB */
  ISET,
  /** MOVE-8 */
  IMV8,
  /** ALU */
  IALU,
  /** GTO */
  IGTO
}

export enum PulseLines {
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  Q,
  R,
  S,
  T
}

export enum RegABCDLines {
  /** Register Load A */
  RLA,
  /** Register Load B */
  RLB,
  /** Register Load C */
  RLC,
  /** Register Load D */
  RLD,
  /** Register Select A */
  RSA,
  /** Register Select B */
  RSB,
  /** Register Select C */
  RSC,
  /** Register Select D */
  RSD
}

export enum RegJMXYLines {
  /** Load Register J1 */
  LJ1,
  /** Load Register J2 */
  LJ2,
  /** Load Register M1 */
  LM1,
  /** Load Register M2 */
  LM2,
  /** Load Register XY */
  LXY,
  /** Load Register X */
  LDX,
  /** Load Register Y */
  LDY,
  /** Select Register J */
  SEJ,
  /** Select Register M */
  SEM,
  /** Select Register M1 */
  SM1,
  /** Select Register M2 */
  SM2,
  /** Select Register XY */
  SXY,
  /** Select Register X */
  SEX,
  /** Select Register Y */
  SEY
}

export enum RegAuxLines {
  /* Load Incrementer Register */
  LIC,
  /* Load Instruction Register */
  LIN,
  /* Load Program Counter */
  LPC,
  /* Select Incrementer Register */
  SIC,
  /* Select Program Counter */
  SPC
}

export enum ResetLines {
  /** Reset (Sequencer) */
  RES
}
