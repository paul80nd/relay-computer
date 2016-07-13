import { IAluArithmeticCard } from "./cards/alu_arithmetic.card";
import { IAluControlCard } from "./cards/alu_control.card";
import { IAluLogicCard } from "./cards/alu_logic.card";
import { IRegisterADCard } from "./cards/register_ad.card";
import { IRegisterBCCard } from "./cards/register_bc.card";
import { IRegisterICard } from "./cards/register_i.card";
import { ICardXBusGroup, ICardZBusGroup } from "./bus/bus_groups";
import { ICardFactory } from "./cards";

export interface IBackplaneFactory {
    createXBackplane(): IXBackplane;
    createZBackplane(): IZBackplane;
}

export interface IXBackplane {
    readonly registerI: IRegisterICard;

    connect(busGroup: ICardXBusGroup): void;
}

export interface IZBackplane {
    readonly aluArithmetic: IAluArithmeticCard;
    readonly aluControl: IAluControlCard;
    readonly aluLogic: IAluLogicCard;
    readonly registerAD: IRegisterADCard;
    readonly registerBC: IRegisterBCCard;

    connect(busGroup: ICardZBusGroup): void;
}

export class BackplaneFactory {

    constructor(private cardFactory: ICardFactory) { }

    public createXBackplane(): IXBackplane {
        return new XBackplane(
            this.cardFactory.createRegisterI()
        );
    }

    public createZBackplane(): IZBackplane {
        return new ZBackplane(
            this.cardFactory.createAluArithmetic(),
            this.cardFactory.createAluControl(),
            this.cardFactory.createAluLogic(),
            this.cardFactory.createRegisterAD(),
            this.cardFactory.createRegisterBC());
    }

}

class XBackplane implements IXBackplane {

    constructor(
        public registerI: IRegisterICard) { }

    public connect(busGroup: ICardXBusGroup) {
        this.registerI.connect(busGroup);
    }
}

class ZBackplane implements IZBackplane {

    constructor(
        public aluArithmetic: IAluArithmeticCard,
        public aluControl: IAluControlCard,
        public aluLogic: IAluLogicCard,
        public registerAD: IRegisterADCard,
        public registerBC: IRegisterBCCard) { }

    public connect(busGroup: ICardZBusGroup) {
        this.aluArithmetic.connect(busGroup);
        this.aluControl.connect(busGroup);
        this.aluLogic.connect(busGroup);
        this.registerAD.connect(busGroup);
        this.registerBC.connect(busGroup);
    }
}

