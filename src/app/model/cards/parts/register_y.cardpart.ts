import { BitValue } from '../../bit_value';
import { CardPart } from '../card_part';
import { IBusPart, IDataBusPart, IRegisterABCDBusPart } from '../../bus/bus_parts';

export interface IRegisterYCardPart {

    valueLo: CardPart;
    valueHi: CardPart;
    loadLo: boolean;
    loadHi: boolean;
    selectLo: boolean;
    selectHi: boolean;

    isSelectableLo: boolean;
    isSelectableHi: boolean;

    connect(dataPart: IDataBusPart, ctrlPart: IBusPart, dataPartOut: IDataBusPart): void;
}

export class RegisterYCardPart implements IRegisterYCardPart {

    valueLo: CardPart;
    valueHi: CardPart;
    loadLo: boolean;
    loadHi: boolean;
    selectLo: boolean;
    selectHi: boolean;

    isSelectableLo: boolean;
    isSelectableHi: boolean;

    private dataPart: IDataBusPart;
    private cardPart: CardPart;
    private ctrlPart: IRegisterABCDBusPart;

    private valueOutHi: CardPart;
    private valueOutLo: CardPart;

    constructor(
        private loadLineHi: number, private selectLineHi: number,
        private loadLineLo: number, private selectLineLo: number) {

        this.isSelectableHi = (selectLineHi !== undefined);
        this.isSelectableLo = (selectLineLo !== undefined);

        this.valueHi = new CardPart();
        this.valueLo = new CardPart();
        this.valueOutHi = new CardPart();
        this.valueOutLo = new CardPart();
    }

    connect(dataPartIn: IDataBusPart, ctrlPart: IBusPart, dataPartOut: IDataBusPart) {
        // Inputs
        this.dataPart = dataPartIn;
        this.dataPart.subscribe(this.update);
        this.ctrlPart = ctrlPart;
        this.ctrlPart.subscribe(this.update);
        // Outputs
        if (dataPartOut) { 
            dataPartOut.connect(this.valueOutHi);
            dataPartOut.connect(this.valueOutLo);
         }
    }

    private update = () => {

        const value = this.dataPart ? this.dataPart.value : (this.cardPart ? this.cardPart.value : BitValue.Zero);

        if (this.ctrlPart) {

            const ldHi =  this.loadLineHi ? this.ctrlPart.value.bit(this.loadLineHi) : false;
            const ldLo =  this.loadLineLo ? this.ctrlPart.value.bit(this.loadLineLo) :false;
            const selHi = this.selectLineHi ? this.ctrlPart.value.bit(this.selectLineHi) : false;
            const selLo = this.selectLineLo ? this.ctrlPart.value.bit(this.selectLineLo) : false;

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
                this.valueHi.value = value;
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
                this.valueLo.value = value;
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
        }
    };
}
