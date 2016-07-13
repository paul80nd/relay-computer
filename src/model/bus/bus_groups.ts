import { IBusFactory } from "./bus";
import {
    IControlXBus, IControlYBus, IControlZBus,
    IDataControlBus, IDataInstructionBus,
    IDisplayA1Bus, IDisplayA2Bus,
    IDisplayB1Bus, IDisplayB2Bus, IRegisterBCBus,
} from "./bus";

/** A Bus Group represents a collection of busses typically used against a certain card type (i.e. Z group)  */
export interface IBusGroup { }


/** Represents the collection of busses that make up the Aux Control Card group connectors */
export interface IAuxControlBusGroup extends IBusGroup {
    readonly controlYBus: IControlYBus;
    readonly dataControlBus: IDataControlBus;
}

/** Represents the collection of busses that make up the X Card group connectors */
export interface ICardXBusGroup extends IBusGroup {
    readonly controlXBus: IControlXBus;
    readonly dataInstructionBus: IDataInstructionBus;
}

/** Represents the collection of busses that make up the Z Card group connectors */
export interface ICardZBusGroup extends IBusGroup {
    readonly controlZBus: IControlZBus;
    readonly dataControlBus: IDataControlBus;
    readonly registerBCBus: IRegisterBCBus;
}

/** Represents the collection of busses that make up the Control Switches group connectors */
export interface IControlSwitchesBusGroup extends IBusGroup {
    readonly dataControlBus: IDataControlBus;
    readonly hackA1Bus: IDisplayA1Bus;
    readonly hackA2Bus: IDisplayA2Bus;
}

/** Represents the collection of busses that make up the Display A group connectors */
export interface IDisplayABusGroup extends IBusGroup {
    readonly a1Bus: IDisplayA1Bus;
    readonly a2Bus: IDisplayA2Bus;
}

/** Represents the collection of busses that make up the Display B group connectors */
export interface IDisplayBBusGroup extends IBusGroup {
    readonly b1Bus: IDisplayB1Bus;
    readonly b2Bus: IDisplayB2Bus;
}


/**
 * Factory providing Bus Group instances
 */
export interface IBusGroupFactory {
    createBusGroups(): IBusGroupSet;
}

/**
 * Collection of the Bus Groups 
 */
export interface IBusGroupSet {
    readonly auxControl: IAuxControlBusGroup;
    readonly controlSwitches: IControlSwitchesBusGroup;
    readonly displayA: IDisplayABusGroup;
    readonly displayB: IDisplayBBusGroup;
    readonly x: ICardXBusGroup;
    readonly z: ICardZBusGroup;
}

export class BusGroupFactory implements IBusGroupFactory {

    constructor(private busFactory: IBusFactory) { }

    public createBusGroups(): IBusGroupSet {

        // Build busses
        let b = this.busFactory.createBusses();

        // Wrap cables in to bus groups
        let auxControl = { controlYBus: b.controlY, dataControlBus: b.dataControl };
        let controlSwitches = {
            dataControlBus: this.busFactory.createBusForControlSwitches(),
            hackA1Bus: b.displayA1,
            hackA2Bus: b.displayA2,
        };
        let displayA = { a1Bus: b.displayA1, a2Bus: b.displayA2 };
        let displayB = { b1Bus: b.displayB1, b2Bus: b.displayB2 };
        let x = { controlXBus: b.controlX, dataInstructionBus: b.dataInstruction };
        let z = { controlZBus: b.controlZ, dataControlBus: b.dataControl, registerBCBus: b.registerBC };

        // Package up
        return {
            auxControl,
            controlSwitches,
            displayA,
            displayB,
            x,
            z,
        };
    }
}
