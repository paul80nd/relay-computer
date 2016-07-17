import { IBusPartFactory } from "./bus_parts";
import {
    IAbortBusPart,
    IAluFunctionClBusPart, IAluOperationBusPart, IAuxRegisterBusPart,
    IClockBusPart,
    IConditionBusPart, IDataBusPart, IDataSwitchGateBusPart,
    IInstructionBusPart, IOperationBusPart, IPulseBusPart,
    IRegisterABCDBusPart, IResetBusPart,
} from "./bus_parts";

/** A bus represents a physical ribbon cable that carries one or more bus parts (collection of lines) */
export interface IBus { }

/** Represents the Control and Instruction bus ribbon cable (C/I) */
export interface IControlInstructionBus extends IBus {
    readonly instructionPart: IInstructionBusPart;
}

/** Repesents the X Control bus ribbon cable */
export interface IControlXBus extends IBus {
    readonly auxRegisterPart: IAuxRegisterBusPart;
    readonly clockPart: IClockBusPart;
    readonly resetPart: IResetBusPart;
}

/** Repesents the Y Control bus ribbon cable */
export interface IControlYBus extends IBus {
    readonly sdsPart: IDataSwitchGateBusPart;
}

/** Repesents the Z Control bus ribbon cable  */
export interface IControlZBus extends IBus {
    readonly aluOperationPart: IAluOperationBusPart;
    readonly regABCDPart: IRegisterABCDBusPart;
}

/** Repesents the Data and Control bus ribbon cable (D/C) */
export interface IDataControlBus extends IBus {
    readonly aluFunctionClPart: IAluFunctionClBusPart;
    readonly conditionPart: IConditionBusPart;
    readonly dataPart: IDataBusPart;
}

/** Repesents the Data and Instruction bus ribbon cable (D/I) */
export interface IDataInstructionBus extends IBus {
    readonly dataPart: IDataBusPart;
    readonly instructionPart: IInstructionBusPart;
}

/** Represents the Display A1 bus ribbon cable */
export interface IDisplayA1Bus extends IBus {
    readonly a1aPart: IRegisterABCDBusPart;
    readonly a1bClockPart: IClockBusPart;
    readonly a1cAuxRegPart: IAuxRegisterBusPart;
    readonly a1cClPart: IAluFunctionClBusPart;
}

/** Represents the Display A2 bus ribbon cable */
export interface IDisplayA2Bus extends IBus {
    readonly a2bPart: IDataSwitchGateBusPart;
    readonly a2cPart: IAluOperationBusPart;
}

/** Represents the Display B1 bus ribbon cable */
export interface IDisplayB1Bus extends IBus {
    readonly aluOperationPart: IAluOperationBusPart;
    readonly aluFunctionClPart: IAluFunctionClBusPart;
    readonly clockPart: IClockBusPart;
    readonly conditionPart: IConditionBusPart;
    readonly dataPart: IDataBusPart;
}

/** Represents the Display B2 bus ribbon cable */
export interface IDisplayB2Bus extends IBus {
    readonly instructionPart: IInstructionBusPart;
}

/** Represents the Display B3 bus ribbon cable */
export interface IDisplayB3Bus extends IBus {
    readonly operationPart: IOperationBusPart;
}

/** Represents the Operation bus cable (OP) */
export interface IOperationBus extends IBus {
    readonly abortPart: IAbortBusPart;
    readonly operationPart: IOperationBusPart;
}

/** Represents the Pulse bus cable */
export interface IPulseBus extends IBus {
    readonly pulsePart: IPulseBusPart;
}

/** Repesents the Register B and C bus ribbon cable (B/C) */
export interface IRegisterBCBus extends IBus {
    readonly registerBPart: IDataBusPart;
    readonly registerCPart: IDataBusPart;
}


/**
 * Factory providing Bus instances
 */
export interface IBusFactory {
    createBusses(): IBusSet;
    createBusForControlSwitches(): IDataControlBus;
}

/** Collection of the Busses */
export interface IBusSet {
    readonly controlInstruction: IControlInstructionBus;
    readonly dataControl: IDataControlBus;
    readonly dataInstruction: IDataInstructionBus;
    readonly controlX: IControlXBus;
    readonly controlY: IControlYBus;
    readonly controlZ: IControlZBus;
    readonly displayA1: IDisplayA1Bus;
    readonly displayA2: IDisplayA2Bus;
    readonly displayB1: IDisplayB1Bus;
    readonly displayB2: IDisplayB2Bus;
    readonly displayB3: IDisplayB3Bus;
    readonly registerBC: IRegisterBCBus;
    readonly operation: IOperationBus;
    readonly pulse: IPulseBus;
}


export class BusFactory implements IBusFactory {

    constructor(private busPartFactory: IBusPartFactory) { }

    public createBusses(): IBusSet {

        // Build shared bus parts
        let abortPart = this.busPartFactory.getForAbort();
        let aluFunctionClPart = this.busPartFactory.getForAluFunctionCl();
        let aluOperationPart = this.busPartFactory.getForAluOperation();
        let auxRegisterPart = this.busPartFactory.getForAuxRegister();
        let clockPart = this.busPartFactory.getForClock();
        let conditionPart = this.busPartFactory.getForCondition();
        let dataPart = this.busPartFactory.getForData();
        let instructionPart = this.busPartFactory.getForInstruction();
        let operationPart = this.busPartFactory.getForOperation();
        let pulsePart = this.busPartFactory.getForPulse();
        let regABCDPart = this.busPartFactory.getForRegisterABCD();
        let resetPart = this.busPartFactory.getForReset();
        let sdsPart = this.busPartFactory.getForDataSwitchGate();

        // Build ribbon cables
        let controlInstruction = { instructionPart };
        let dataControl = { aluFunctionClPart, conditionPart, dataPart };
        let dataInstruction = { dataPart, instructionPart };
        let controlX = { auxRegisterPart, clockPart, resetPart };
        let controlY = { sdsPart };
        let controlZ = { regABCDPart, aluOperationPart };
        let registerBC = {
            registerBPart: this.busPartFactory.getForData(),
            registerCPart: this.busPartFactory.getForData(),
        };
        let displayA1 = {
            a1aPart: regABCDPart,
            a1bClockPart: clockPart,
            a1cAuxRegPart: auxRegisterPart,
            a1cClPart: aluFunctionClPart };
        let displayA2 = { a2bPart: sdsPart, a2cPart: aluOperationPart };
        let displayB1 = { aluOperationPart, aluFunctionClPart, clockPart,
            conditionPart, dataPart };
        let displayB2 = { instructionPart };
        let displayB3 = { operationPart };
        let operation = { abortPart, operationPart };
        let pulse = { pulsePart };

        // Bundle up
        return {
            controlInstruction,
            controlX,
            controlY,
            controlZ,
            dataControl,
            dataInstruction,
            displayA1,
            displayA2,
            displayB1,
            displayB2,
            displayB3,
            operation,
            registerBC,
            pulse,
        };
    }

    public createBusForControlSwitches(): IDataControlBus {
        return {
            aluFunctionClPart: this.busPartFactory.getForAluFunctionCl(),
            conditionPart: this.busPartFactory.getForCondition(),
            dataPart: this.busPartFactory.getForData(),
        };
    }
}
