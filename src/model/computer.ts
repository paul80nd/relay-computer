import { IDisplayACard } from "./cards/display_a.card";
import { IDisplayBCard } from "./cards/display_b.card";
import { IControlSwitchesCard } from "./cards/control_switches.card";
import { IAuxControlCard } from "./cards/aux_control.card";
import { BusFactory } from "./bus/bus";
import { BusPartFactory } from "./bus/bus_parts";
import { BusGroupFactory } from "./bus/bus_groups";
import { CardFactory } from "./cards";
import { BackplaneFactory,
    IWBackplane, IXBackplane, IZBackplane } from "./backplanes";

export interface IComputer {
    controlSwitchesCard: IControlSwitchesCard;
    displayACard: IDisplayACard;
    displayBCard: IDisplayBCard;
    auxControlCard: IAuxControlCard;
    wBackplane: IWBackplane;
    xBackplane: IXBackplane;
    zBackplane: IZBackplane;
}

export interface IComputerFactory {
    createComputer(): IComputer;
}

export class ComputerFactory implements IComputerFactory {

    public createComputer(): IComputer {

        let busFactory = new BusFactory(new BusPartFactory());
        let busGroupFactory = new BusGroupFactory(busFactory);
        let cardFactory = new CardFactory();
        let backplaneFactory = new BackplaneFactory(cardFactory);

        let cables = busGroupFactory.createBusGroups();
        let cards = cardFactory.createCards();

        let controlSwitchesBusGroup = cables.controlSwitches;
        let controlSwitchesCard = cards.getControlSwitches();
        controlSwitchesCard.connect(controlSwitchesBusGroup);

        let displayABusGroup = cables.displayA;
        let displayACard = cards.getDisplayA();
        displayACard.connect(displayABusGroup);

        let displayBBusGroup = cables.displayB;
        let displayBCard = cards.getDisplayB();
        displayBCard.connect(displayBBusGroup);

        let auxControlBusGroup = cables.auxControl;
        let auxControlCard = cards.getAuxControl();
        auxControlCard.connect(controlSwitchesBusGroup, auxControlBusGroup);

        let wBusGroup = cables.w;
        let wBackplane = backplaneFactory.createWBackplane();
        wBackplane.connect(wBusGroup);

        let xBusGroup = cables.x;
        let xBackplane = backplaneFactory.createXBackplane();
        xBackplane.connect(xBusGroup);

        let zBusGroup = cables.z;
        let zBackplane = backplaneFactory.createZBackplane();
        zBackplane.connect(zBusGroup);

        return {
            controlSwitchesCard,
            displayACard,
            displayBCard,
            auxControlCard,
            wBackplane,
            xBackplane,
            zBackplane,
        };
    }

}
