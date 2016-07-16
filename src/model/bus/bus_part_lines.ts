export enum AluFunctionClLines {
    /** Condition Load */
    CL
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
    ICY
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
    SDS
}

export enum OperationLines {
    /** SET-AB */
    ISET,
    /** MOVE-8 */
    IMV8,
    /** ALU */
    IALU
}

export enum PulseLines {
    A,
    B,
    C,
    D,
    E
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

export enum RegAuxLines {
    /* Load Instruction Register */
    LIN
}

export enum ResetLines {
    /** Reset (Sequencer) */
    RES
}
