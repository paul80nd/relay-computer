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

export class Computer implements IComputer {

    public controlSwitchesCard: IControlSwitchesCard;
    public displayACard: IDisplayACard;
    public displayBCard: IDisplayBCard;
    public auxControlCard: IAuxControlCard;
    public wBackplane: IWBackplane;
    public xBackplane: IXBackplane;
    public zBackplane: IZBackplane;

    constructor() {

        let busFactory = new BusFactory(new BusPartFactory());
        let busGroupFactory = new BusGroupFactory(busFactory);
        let cardFactory = new CardFactory();
        let backplaneFactory = new BackplaneFactory(cardFactory);

        let cables = busGroupFactory.createBusGroups();
        let cards = cardFactory.createCards();

        let controlSwitchesBusGroup = cables.controlSwitches;
        this.controlSwitchesCard = cards.getControlSwitches();
        this.controlSwitchesCard.connect(controlSwitchesBusGroup);

        let displayABusGroup = cables.displayA;
        this.displayACard = cards.getDisplayA();
        this.displayACard.connect(displayABusGroup);

        let displayBBusGroup = cables.displayB;
        this.displayBCard = cards.getDisplayB();
        this.displayBCard.connect(displayBBusGroup);

        let auxControlBusGroup = cables.auxControl;
        this.auxControlCard = cards.getAuxControl();
        this.auxControlCard.connect(controlSwitchesBusGroup, auxControlBusGroup);

        let wBusGroup = cables.w;
        this.wBackplane = backplaneFactory.createWBackplane();
        this.wBackplane.connect(wBusGroup);

        let xBusGroup = cables.x;
        this.xBackplane = backplaneFactory.createXBackplane();
        this.xBackplane.connect(xBusGroup);

        let zBusGroup = cables.z;
        this.zBackplane = backplaneFactory.createZBackplane();
        this.zBackplane.connect(zBusGroup);
    }

}
