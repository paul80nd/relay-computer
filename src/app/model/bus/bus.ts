import { IBusPartFactory } from './bus_parts';
import {
  IAbortBusPart, IAddressBusPart,
  IAluFunctionClBusPart, IAluOperationBusPart, IAuxRegisterBusPart,
  IClockBusPart,
  IConditionBusPart, IDataBusPart, IDataSwitchGateBusPart,
  II2BBusPart, IInstructionBusPart,
  IMemoryBusPart,
  IOperationBusPart, IPulseBusPart,
  IRegisterABCDBusPart, IRegisterJMXYBusPart, IResetBusPart
} from './bus_parts';

/** A bus represents a physical ribbon cable that carries one or more bus parts (collection of lines) */
export interface IBus { }

/** Repesents the Address bus ribbon cable */
export interface IAddressBus extends IBus {
  readonly addressPart: IAddressBusPart;
}

/** Represents the Control and Instruction bus ribbon cable (C/I) */
export interface IControlInstructionBus extends IBus {
  readonly conditionPart: IConditionBusPart;
  readonly aluFunctionClPart: IAluFunctionClBusPart;
  readonly instructionPart: IInstructionBusPart;
}

/** Repesents the X Control bus ribbon cable */
export interface IControlXBus extends IBus {
  readonly auxRegisterPart: IAuxRegisterBusPart;
  readonly clockPart: IClockBusPart;
  readonly i2bPart: II2BBusPart;
  readonly resetPart: IResetBusPart;
}

/** Repesents the Y Control bus ribbon cable */
export interface IControlYBus extends IBus {
  readonly memoryPart: IMemoryBusPart;
  readonly sdsPart: IDataSwitchGateBusPart;
  readonly regJMXYPart: IRegisterJMXYBusPart;
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
  readonly a1bI2bPart: II2BBusPart;
  readonly a1bMemoryPart: IMemoryBusPart;
  readonly a1cAuxRegPart: IAuxRegisterBusPart;
  readonly a1cClPart: IAluFunctionClBusPart;
}

/** Represents the Display A2 bus ribbon cable */
export interface IDisplayA2Bus extends IBus {
  readonly a2abRegPart: IRegisterJMXYBusPart;
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
  readonly addressPart: IAddressBusPart;
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
  readonly address: IAddressBus;
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

  createBusses(): IBusSet {

    // Build shared bus parts
    const abortPart = this.busPartFactory.getForAbort();
    const addressPart = this.busPartFactory.getForAddress();
    const aluFunctionClPart = this.busPartFactory.getForAluFunctionCl();
    const aluOperationPart = this.busPartFactory.getForAluOperation();
    const auxRegisterPart = this.busPartFactory.getForAuxRegister();
    const clockPart = this.busPartFactory.getForClock();
    const conditionPart = this.busPartFactory.getForCondition();
    const dataPart = this.busPartFactory.getForData();
    const i2bPart = this.busPartFactory.getForI2B();
    const instructionPart = this.busPartFactory.getForInstruction();
    const memoryPart = this.busPartFactory.getForMemory();
    const operationPart = this.busPartFactory.getForOperation();
    const pulsePart = this.busPartFactory.getForPulse();
    const regABCDPart = this.busPartFactory.getForRegisterABCD();
    const regJMXYPart = this.busPartFactory.getForRegisterJMXY();
    const resetPart = this.busPartFactory.getForReset();
    const sdsPart = this.busPartFactory.getForDataSwitchGate();

    // Build ribbon cables
    const address = { addressPart };
    const controlInstruction = { aluFunctionClPart, conditionPart, instructionPart };
    const dataControl = { aluFunctionClPart, conditionPart, dataPart };
    const dataInstruction = { dataPart, instructionPart };
    const controlX = { auxRegisterPart, clockPart, i2bPart, resetPart };
    const controlY = { memoryPart, sdsPart, regJMXYPart };
    const controlZ = { regABCDPart, aluOperationPart };
    const registerBC = {
      registerBPart: this.busPartFactory.getForData(),
      registerCPart: this.busPartFactory.getForData()
    };
    const displayA1 = {
      a1aPart: regABCDPart,
      a1bClockPart: clockPart,
      a1bI2bPart: i2bPart,
      a1bMemoryPart: memoryPart,
      a1cAuxRegPart: auxRegisterPart,
      a1cClPart: aluFunctionClPart
    };
    const displayA2 = {
      a2abRegPart: regJMXYPart,
      a2bPart: sdsPart,
      a2cPart: aluOperationPart
    };
    const displayB1 = {
      aluOperationPart, aluFunctionClPart, clockPart,
      conditionPart, dataPart
    };
    const displayB2 = { addressPart, instructionPart };
    const displayB3 = { operationPart };
    const operation = { abortPart, operationPart };
    const pulse = { pulsePart };

    // Bundle up
    return {
      address,
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
      pulse
    };
  }

  createBusForControlSwitches(): IDataControlBus {
    return {
      aluFunctionClPart: this.busPartFactory.getForAluFunctionCl(),
      conditionPart: this.busPartFactory.getForCondition(),
      dataPart: this.busPartFactory.getForData()
    };
  }
}
