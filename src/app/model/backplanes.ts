import { IAluArithmeticCard } from './cards/alu_arithmetic.card';
import { IAluControlCard } from './cards/alu_control.card';
import { IAluLogicCard } from './cards/alu_logic.card';
import { IControlCard } from './cards/control.card';
import { IDecoderCard } from './cards/decoder.card';
import { IIncrementerCard } from './cards/incrementer.card';
import { IRegisterADCard } from './cards/register_ad.card';
import { IRegisterBCCard } from './cards/register_bc.card';
import { IRegisterICard } from './cards/register_i.card';
import { IRegisterPCCard } from './cards/register_pc.card';
import { ISequencerCard } from './cards/sequencer.card';
import { ICardWBusGroup, ICardXBusGroup, ICardZBusGroup } from './bus/bus_groups';
import { ICardFactory } from './cards';

export interface IBackplaneFactory {
    createWBackplane(): IWBackplane;
    createXBackplane(): IXBackplane;
    createZBackplane(): IZBackplane;
}

export interface IWBackplane {
    readonly control: IControlCard;
    readonly decoder: IDecoderCard;
    readonly sequencer: ISequencerCard;

    connect(busGroup: ICardWBusGroup): void;
}

export interface IXBackplane {
    readonly incrementer: IIncrementerCard;
    readonly registerI: IRegisterICard;
    readonly registerPC: IRegisterPCCard;

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

export class BackplaneFactory implements IBackplaneFactory {

    constructor(private cardFactory: ICardFactory) { }

    public createWBackplane(): IWBackplane {
        return new WBackplane(
            this.cardFactory.createControl(),
            this.cardFactory.createDecoder(),
            this.cardFactory.createSequencer()
        );
    }

    public createXBackplane(): IXBackplane {
        return new XBackplane(
            this.cardFactory.createIncrementer(),
            this.cardFactory.createRegisterI(),
            this.cardFactory.createRegisterPC()
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

class WBackplane implements IWBackplane {

    constructor(
        public control: IControlCard,
        public decoder: IDecoderCard,
        public sequencer: ISequencerCard) { }

    public connect(busGroup: ICardWBusGroup) {
        this.control.connect(busGroup);
        this.decoder.connect(busGroup);
        this.sequencer.connect(busGroup);
    }

}

class XBackplane implements IXBackplane {

    constructor(
        public incrementer: IIncrementerCard,
        public registerI: IRegisterICard,
        public registerPC: IRegisterPCCard) { }

    public connect(busGroup: ICardXBusGroup) {
        this.incrementer.connect(busGroup);
        this.registerI.connect(busGroup);
        this.registerPC.connect(busGroup);
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

