import { BitValue } from '../../bit_value';
import { CardPart } from '../card_part';
import { IBusPart, IDataBusPart, IRegisterABCDBusPart, IAddressBusPart } from '../../bus/bus_parts';

export interface IRegisterYCardPart {

  valueLo: CardPart;
  valueHi: CardPart;
  valueHiLo: CardPart;
  loadLo: boolean;
  loadHi: boolean;
  loadHiLo: boolean;
  selectLo: boolean;
  selectHi: boolean;
  selectHiLo: boolean;

  isSelectableLo: boolean;
  isSelectableHi: boolean;
  isLoadableHiLo: boolean;

  connect(dataPart: IDataBusPart, addressPart: IAddressBusPart, ctrlPart: IBusPart, dataPartOut: IDataBusPart): void;
}

export class RegisterYCardPart implements IRegisterYCardPart {

  valueLo: CardPart;
  valueHi: CardPart;
  valueHiLo: CardPart;
  loadLo: boolean = false;
  loadHi: boolean = false;
  loadHiLo: boolean = false;
  selectLo: boolean = false;
  selectHi: boolean = false;
  selectHiLo: boolean = false;

  isSelectableLo: boolean;
  isSelectableHi: boolean;
  isLoadableHiLo: boolean;

  private addressPart: IAddressBusPart | undefined;
  private dataPart: IDataBusPart | undefined;
  private ctrlPart: IRegisterABCDBusPart | undefined;

  private valueOutHi: CardPart;
  private valueOutLo: CardPart;
  private valueOutHiLo: CardPart;

  constructor(
    private loadLineHi: number, private selectLineHi: number | undefined,
    private loadLineLo: number, private selectLineLo: number | undefined,
    private loadLineHiLo: number | undefined, private selectLineHiLo: number) {

    this.isSelectableHi = (selectLineHi !== undefined);
    this.isSelectableLo = (selectLineLo !== undefined);
    this.isLoadableHiLo = (loadLineHiLo !== undefined);

    this.valueHi = new CardPart();
    this.valueLo = new CardPart();
    this.valueHiLo = new CardPart();
    this.valueOutHi = new CardPart();
    this.valueOutLo = new CardPart();
    this.valueOutHiLo = new CardPart();
  }

  connect(dataPartIn: IDataBusPart, addressPart: IAddressBusPart, ctrlPart: IBusPart, dataPartOut: IDataBusPart) {
    // Inputs
    this.addressPart = addressPart;
    this.addressPart.subscribe(this.update);
    this.dataPart = dataPartIn;
    this.dataPart.subscribe(this.update);
    this.ctrlPart = ctrlPart;
    this.ctrlPart.subscribe(this.update);
    // Outputs
    if (dataPartOut) {
      dataPartOut.connect(this.valueOutHi);
      dataPartOut.connect(this.valueOutLo);
    }
    if (addressPart) {
      addressPart.connect(this.valueOutHiLo);
    }
  }

  private update = () => {

    const valueData = this.dataPart ? this.dataPart.value : BitValue.Zero;
    const valueAddress = this.addressPart ? this.addressPart.value : BitValue.Zero;

    if (this.ctrlPart) {

      const ldHi = this.loadLineHi ? this.ctrlPart.value.bit(this.loadLineHi) : false;
      const ldLo = this.loadLineLo ? this.ctrlPart.value.bit(this.loadLineLo) : false;
      const ldHiLo = this.loadLineHiLo ? this.ctrlPart.value.bit(this.loadLineHiLo) : false;
      const selHi = this.selectLineHi ? this.ctrlPart.value.bit(this.selectLineHi) : false;
      const selLo = this.selectLineLo ? this.ctrlPart.value.bit(this.selectLineLo) : false;
      const selHiLo = this.selectLineHiLo ? this.ctrlPart.value.bit(this.selectLineHiLo) : false;

      // Hi Register

      if (ldHi && selHi) {
        // Loading and Selecting -> Clears Register
        if (!this.loadHi) { this.loadHi = true; }
        if (!this.selectHi) { this.selectHi = true; }
        this.valueHi.value = BitValue.Zero;
        this.valueOutHi.value = BitValue.Zero;
      } else if (ldHi) {
        // Loading -> Sets Register
        if (!this.loadHi) { this.loadHi = true; }
        if (!this.selectHi) { this.selectHi = true; }
        this.valueHi.value = valueData;
        this.valueOutHi.value = BitValue.Zero;
      } else if (selHi) {
        // Selecting -> Gate Register
        if (this.loadHi) { this.loadHi = false; }
        if (!this.selectHi) { this.selectHi = true; }
        this.valueOutHi.value = this.valueHi.value;
      } else {
        if (this.loadHi) { this.loadHi = false; }
        if (this.selectHi) { this.selectHi = false; }
        this.valueOutHi.value = BitValue.Zero;
      }

      // Lo Register

      if (ldLo && selLo) {
        // Loading and Selecting -> Clears Register
        if (!this.loadLo) { this.loadLo = true; }
        if (!this.selectLo) { this.selectLo = true; }
        this.valueLo.value = BitValue.Zero;
        this.valueOutLo.value = BitValue.Zero;
      } else if (ldLo) {
        // Loading -> Sets Register
        if (!this.loadLo) { this.loadLo = true; }
        if (!this.selectLo) { this.selectLo = true; }
        this.valueLo.value = valueData;
        this.valueOutLo.value = BitValue.Zero;
      } else if (selLo) {
        // Selecting -> Gate Register
        if (this.loadLo) { this.loadLo = false; }
        if (!this.selectLo) { this.selectLo = true; }
        this.valueOutLo.value = this.valueLo.value;
      } else {
        if (this.loadLo) { this.loadLo = false; }
        if (this.selectLo) { this.selectLo = false; }
        this.valueOutLo.value = BitValue.Zero;
      }

      // HiLo Register

      if (ldHiLo && selHiLo) {
        // Loading and Selecting -> Clears Register
        if (!this.loadHiLo) { this.loadHiLo = true; }
        if (!this.selectHiLo) { this.selectHiLo = true; }
        this.valueLo.value = BitValue.Zero;
        this.valueHi.value = BitValue.Zero;
        this.valueHiLo.value = BitValue.Zero;
        this.valueOutHi.value = BitValue.Zero;
        this.valueOutLo.value = BitValue.Zero;
        this.valueOutHiLo.value = BitValue.Zero;
      } else if (ldHiLo) {
        // Loading -> Sets Register
        if (!this.loadHiLo) { this.loadHiLo = true; }
        if (!this.selectHiLo) { this.selectHiLo = true; }
        this.valueHiLo.value = valueAddress;
        this.valueHi.value = valueAddress.hiPart();
        this.valueLo.value = valueAddress.loPart();
        this.valueOutLo.value = BitValue.Zero;
        this.valueOutHi.value = BitValue.Zero;
        this.valueOutHiLo.value = BitValue.Zero;
      } else if (selHiLo) {
        // Selecting -> Gate Register
        if (this.loadHiLo) { this.loadHiLo = false; }
        if (!this.selectHiLo) { this.selectHiLo = true; }
        this.valueOutLo.value = BitValue.Zero;
        this.valueOutHi.value = BitValue.Zero;
        this.valueOutHiLo.value = BitValue.fromHiLo(this.valueHi.value, this.valueLo.value);
      } else {
        if (this.loadHiLo) { this.loadHiLo = false; }
        if (this.selectHiLo) { this.selectHiLo = false; }
        this.valueOutHiLo.value = BitValue.Zero;
      }
    }
  }
}
