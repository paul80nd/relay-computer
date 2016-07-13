import { IBusPartFactory } from "./bus_parts";
import {
    IAluFunctionClBusPart, IAluOperationBusPart, IAuxRegisterBusPart,
    IConditionBusPart, IDataBusPart, IDataSwitchGateBusPart,
    IInstructionBusPart, IOperationBusPart, IRegisterABCDBusPart,
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
    readonly aluFuncClPart: IAluFunctionClBusPart;
    readonly conditionPart: IConditionBusPart;
    readonly dataPart: IDataBusPart;
}

/** Represents the Display B2 bus ribbon cable */
export interface IDisplayB2Bus extends IBus {
    readonly instructionPart: IInstructionBusPart;
}

/** Represents the Operation bus cable (OP) */
export interface IOperationBus extends IBus {
    readonly operationPart: IOperationBusPart;
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
    readonly registerBC: IRegisterBCBus;
    readonly operation: IOperationBus;
}


export class BusFactory implements IBusFactory {

    constructor(private busPartFactory: IBusPartFactory) { }

    public createBusses(): IBusSet {

        // Build shared bus parts
        let aluFunctionClPart = this.busPartFactory.getForAluFunctionCl();
        let aluOperationPart = this.busPartFactory.getForAluOperation();
        let auxRegisterPart = this.busPartFactory.getForAuxRegister();
        let conditionPart = this.busPartFactory.getForCondition();
        let dataPart = this.busPartFactory.getForData();
        let instructionPart = this.busPartFactory.getForInstruction();
        let operationPart = this.busPartFactory.getForOperation();
        let regABCDPart = this.busPartFactory.getForRegisterABCD();
        let sdsPart = this.busPartFactory.getForDataSwitchGate();

        // Build ribbon cables
        let ctrlInstr = { instructionPart };
        let dataCtrl: IDataControlBus = { aluFunctionClPart, conditionPart, dataPart };
        let dataInstr: IDataInstructionBus = { dataPart, instructionPart };
        let ctrlX = { auxRegisterPart };
        let ctrlY = { sdsPart };
        let ctrlZ: IControlZBus = { regABCDPart, aluOperationPart };
        let regBC: IRegisterBCBus = {
            registerBPart: this.busPartFactory.getForData(),
            registerCPart: this.busPartFactory.getForData(),
        };
        let dispA1: IDisplayA1Bus = { a1aPart: regABCDPart, a1cAuxRegPart: auxRegisterPart, a1cClPart: aluFunctionClPart };
        let dispA2: IDisplayA2Bus = { a2bPart: sdsPart, a2cPart: aluOperationPart };
        let dispB1: IDisplayB1Bus = { aluOperationPart, aluFuncClPart: aluFunctionClPart, conditionPart, dataPart };
        let dispB2 = { instructionPart };
        let op = { operationPart };

        // Bundle up
        return {
            controlInstruction: ctrlInstr,
            controlX: ctrlX,
            controlY: ctrlY,
            controlZ: ctrlZ,
            dataControl: dataCtrl,
            dataInstruction: dataInstr,
            displayA1: dispA1,
            displayA2: dispA2,
            displayB1: dispB1,
            displayB2: dispB2,
            operation: op,
            registerBC: regBC,
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
