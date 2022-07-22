import { BitValue } from '../../bit_value';
import { CardPart } from '../card_part';
import { IBusPart, IDataBusPart, IRegisterABCDBusPart } from '../../bus/bus_parts';

export interface IRegisterCardPart {

  value: CardPart;
  load: boolean;
  select: boolean;

  isSelectable: boolean;

  connect(dataPart: IDataBusPart, ctrlPart: IBusPart): void;
  connect(dataPart: IDataBusPart, ctrlPart: IBusPart, dataPartOut: IDataBusPart): void;
  connectCardPart(cardPart: CardPart, ctrlPart: IBusPart, dataPartOut: IDataBusPart): void;
  connectDirect(registerConnect: IDataBusPart): void;
}

export class RegisterCardPart implements IRegisterCardPart {

  value: CardPart;
  load: boolean = false;
  select: boolean = false;

  isSelectable: boolean;

  private dataPart: IDataBusPart | undefined;
  private cardPart: CardPart | undefined;
  private ctrlPart: IRegisterABCDBusPart | undefined;

  private valueOut: CardPart;

  constructor(private loadLine: number, private selectLine: number | undefined = undefined) {

    this.isSelectable = (selectLine !== undefined);

    this.value = new CardPart();
    this.valueOut = new CardPart();
  }

  connect(dataPartIn: IDataBusPart, ctrlPart: IBusPart, dataPartOut: IDataBusPart | undefined = undefined) {
    // Inputs
    this.dataPart = dataPartIn;
    this.dataPart.subscribe(this.update);
    this.ctrlPart = ctrlPart;
    this.ctrlPart.subscribe(this.update);
    // Outputs
    if (dataPartOut) { dataPartOut.connect(this.valueOut); }
  }
  connectCardPart(cardPart: CardPart, ctrlPart: IBusPart, dataPartOut: IDataBusPart) {
    // Inputs
    this.cardPart = cardPart;
    this.cardPart.subscribe(this.update);
    this.ctrlPart = ctrlPart;
    this.ctrlPart.subscribe(this.update);
    // Outputs
    if (dataPartOut) { dataPartOut.connect(this.valueOut); }
  }
  connectDirect(registerConnect: IDataBusPart) {
    // Outputs
    registerConnect.connect(this.value);
  }

  private update = () => {

    const value = this.dataPart ? this.dataPart.value : (this.cardPart ? this.cardPart.value : BitValue.Zero);

    if (this.ctrlPart) {

      const ld = this.ctrlPart.value.bit(this.loadLine);
      const sel = this.selectLine ? this.ctrlPart.value.bit(this.selectLine) : false;

      if (ld && sel) {
        // Loading and Selecting -> Clears Register
        if (!this.load) { this.load = true; }
        if (!this.select) { this.select = true; }
        this.value.value = BitValue.Zero;
        this.valueOut.value = BitValue.Zero;
      } else if (ld) {
        // Loading -> Sets Register
        if (!this.load) { this.load = true; }
        if (!this.select) { this.select = true; }
        this.value.value = value;
        this.valueOut.value = BitValue.Zero;
      } else if (sel) {
        // Selecting -> Gate Register
        if (this.load) { this.load = false; }
        if (!this.select) { this.select = true; }
        this.valueOut.value = this.value.value;
      } else {
        if (this.load) { this.load = false; }
        if (this.select) { this.select = false; }
        this.valueOut.value = BitValue.Zero;
      }
    }
  }
}
