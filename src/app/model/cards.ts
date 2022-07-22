import { AuxControlCard, IAuxControlCard } from './cards/aux_control.card';
import { ControlCard, IControlCard } from './cards/control.card';
import { ControlSwitchesCard, IControlSwitchesCard } from './cards/control_switches.card';
import { DecoderCard, IDecoderCard } from './cards/decoder.card';
import { DisplayACard, IDisplayACard } from './cards/display_a.card';
import { DisplayBCard, IDisplayBCard } from './cards/display_b.card';
import { IIncrementerCard, IncrementerCard } from './cards/incrementer.card';
import { IMemoryCard, MemoryCard } from './cards/memory.card';
import { IRegisterADCard, RegisterADCard } from './cards/register_ad.card';
import { IRegisterBCCard, RegisterBCCard } from './cards/register_bc.card';
import { IRegisterICard, RegisterICard } from './cards/register_i.card';
import { IRegisterPCCard, RegisterPCCard } from './cards/register_pc.card';
import { AluLogicCard, IAluLogicCard } from './cards/alu_logic.card';
import { AluArithmeticCard, IAluArithmeticCard } from './cards/alu_arithmetic.card';
import { AluControlCard, IAluControlCard } from './cards/alu_control.card';
import { ISequencerCard, SequencerCard } from './cards/sequencer.card';
import { IRegisterJCard, RegisterJCard } from './cards/register_j.card';
import { IRegisterMCard, RegisterMCard } from './cards/register_m.card';
import { IRegisterXYCard, RegisterXYCard } from './cards/register_xy.card';

export interface ICardFactory {
  createAluArithmetic(): IAluArithmeticCard;
  createAluControl(): IAluControlCard;
  createAluLogic(): IAluLogicCard;
  createCards(): ICards;
  createControl(): IControlCard;
  createDecoder(): IDecoderCard;
  createIncrementer(): IIncrementerCard;
  createMemory(): IMemoryCard;
  createRegisterAD(): IRegisterADCard;
  createRegisterBC(): IRegisterBCCard;
  createRegisterI(): IRegisterICard;
  createRegisterJ(): IRegisterJCard;
  createRegisterM(): IRegisterMCard;
  createRegisterPC(): IRegisterPCCard;
  createRegisterXY(): IRegisterXYCard;
  createSequencer(): ISequencerCard;
}

export interface ICards {
  getAuxControl(): IAuxControlCard;
  getControlSwitches(): IControlSwitchesCard;
  getDisplayA(): IDisplayACard;
  getDisplayB(): IDisplayBCard;
}

class Cards implements ICards {

  constructor(
    private auxControl: IAuxControlCard,
    private controlSwitches: IControlSwitchesCard,
    private displayA: IDisplayACard,
    private displayB: IDisplayBCard) { }

  getAuxControl(): IAuxControlCard { return this.auxControl; }
  getControlSwitches(): IControlSwitchesCard { return this.controlSwitches; }
  getDisplayA(): IDisplayACard { return this.displayA; }
  getDisplayB(): IDisplayBCard { return this.displayB; }
}

export class CardFactory implements ICardFactory {

  createCards(): ICards {
    return new Cards(
      new AuxControlCard(),
      new ControlSwitchesCard(),
      new DisplayACard(),
      new DisplayBCard());
  }

  createAluArithmetic(): IAluArithmeticCard { return new AluArithmeticCard(); }
  createAluControl(): IAluControlCard { return new AluControlCard(); }
  createAluLogic(): IAluLogicCard { return new AluLogicCard(); }
  createControl(): IControlCard { return new ControlCard(); }
  createDecoder(): IDecoderCard { return new DecoderCard(); }
  createIncrementer(): IIncrementerCard { return new IncrementerCard(); }
  createMemory(): IMemoryCard { return new MemoryCard(); }
  createRegisterAD(): IRegisterADCard { return new RegisterADCard(); }
  createRegisterBC(): IRegisterBCCard { return new RegisterBCCard(); }
  createRegisterI(): IRegisterICard { return new RegisterICard(); }
  createRegisterJ(): IRegisterJCard { return new RegisterJCard(); }
  createRegisterM(): IRegisterMCard { return new RegisterMCard(); }
  createRegisterPC(): IRegisterPCCard { return new RegisterPCCard(); }
  createRegisterXY(): IRegisterXYCard { return new RegisterXYCard(); }
  createSequencer(): ISequencerCard { return new SequencerCard(); }

}
