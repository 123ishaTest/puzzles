export class Tile {
    private _value: any;

    constructor(value: any) {
        this._value = value;
    }


    get value(): any {
        return this._value;
    }

    setValue(number: number): void {
        this._value = number;
    }
}
