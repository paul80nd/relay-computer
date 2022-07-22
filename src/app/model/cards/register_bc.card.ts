import { ICardZBusGroup } from '../bus/bus_groups';
import { RegABCDLines } from '../bus/bus_part_lines';
import { IRegisterCardPart, RegisterCardPart } from './parts/register.cardpart';

export interface IRegisterBCCard {

  registerB: IRegisterCardPart;
  registerC: IRegisterCardPart;

  connect(dataBus: ICardZBusGroup): void;
}

export class RegisterBCCard implements IRegisterBCCard {

  registerB: IRegisterCardPart;
  registerC: IRegisterCardPart;

  constructor() {
    this.registerB = new RegisterCardPart(RegABCDLines.RLB, RegABCDLines.RSB);
    this.registerC = new RegisterCardPart(RegABCDLines.RLC, RegABCDLines.RSC);
  }

  connect(busGroup: ICardZBusGroup) {
    const dataPart = busGroup.dataControlBus.dataPart;
    const ctrlPart = busGroup.controlZBus.regABCDPart;
    this.registerB.connect(dataPart, ctrlPart, dataPart);
    this.registerB.connectDirect(busGroup.registerBCBus.registerBPart);
    this.registerC.connect(dataPart, ctrlPart, dataPart);
    this.registerC.connectDirect(busGroup.registerBCBus.registerCPart);
  }

}
