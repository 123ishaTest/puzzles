export abstract class Cell {
    protected _value: any;
    isLocked = false;


    get value(): any {
        return this._value;
    }

    setValue(number: number): void {
        this._value = number;
    }
}
