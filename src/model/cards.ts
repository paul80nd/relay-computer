import { IAuxControlCard, AuxControlCard } from "./cards/aux_control.card";
import { IControlSwitchesCard, ControlSwitchesCard } from "./cards/control_switches.card";
import { IDisplayACard, DisplayACard } from "./cards/display_a.card";
import { IDisplayBCard, DisplayBCard } from "./cards/display_b.card";
import { IRegisterADCard, RegisterADCard } from "./cards/register_ad.card";
import { IRegisterBCCard, RegisterBCCard } from "./cards/register_bc.card";
import { IRegisterICard, RegisterICard } from "./cards/register_i.card";
import { IAluLogicCard, AluLogicCard } from "./cards/alu_logic.card";
import { IAluArithmeticCard, AluArithmeticCard } from "./cards/alu_arithmetic.card";
import { IAluControlCard, AluControlCard } from "./cards/alu_control.card";

export interface ICardFactory {
    createAluArithmetic(): IAluArithmeticCard;
    createAluControl(): IAluControlCard;
    createAluLogic(): IAluLogicCard;
    createCards(): ICards;
    createRegisterAD(): IRegisterADCard;
    createRegisterBC(): IRegisterBCCard;
    createRegisterI(): IRegisterICard;
}

export interface ICards {
    getAuxControl(): IAuxControlCard;
    getControlSwitches(): IControlSwitchesCard;
    getDisplayA(): IDisplayACard;
    getDisplayB(): IDisplayBCard;
}

class Cards implements ICards {

    constructor(private auxControl: IAuxControlCard,
        private controlSwitches: IControlSwitchesCard,
        private displayA: IDisplayACard,
        private displayB: IDisplayBCard) { }

    public getAuxControl(): IAuxControlCard { return this.auxControl; }
    public getControlSwitches(): IControlSwitchesCard { return this.controlSwitches; }
    public getDisplayA(): IDisplayACard { return this.displayA; }
    public getDisplayB(): IDisplayBCard { return this.displayB; }
}

export class CardFactory {

    public createCards(): ICards {
        return new Cards(
            new AuxControlCard(),
            new ControlSwitchesCard(),
            new DisplayACard(),
            new DisplayBCard());
    }

    public createAluArithmetic(): IAluArithmeticCard { return new AluArithmeticCard; }
    public createAluControl(): IAluControlCard { return new AluControlCard; }
    public createAluLogic(): IAluLogicCard { return new AluLogicCard; }
    public createRegisterAD(): IRegisterADCard { return new RegisterADCard; }
    public createRegisterBC(): IRegisterBCCard { return new RegisterBCCard; }
    public createRegisterI(): IRegisterICard { return new RegisterICard; }

}
