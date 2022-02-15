export abstract class Cell {
    protected _value: any;

    /**
     * Locked cells are part of the given problem, and can not be changed
     */
    protected _isLocked = false;

    /**
     * Disabled cells are marked as incomplete, not part of the solution
     */
    protected _isDisabled = false;


    get value(): any {
        return this._value;
    }

    setValue(value: any): this {
        if (this._isLocked || this._isDisabled) {
            return this;
        }
        this._value = value;
        return this;
    }

    get isLocked(): boolean {
        return this._isLocked
    }

    setIsLocked(value = true): this {
        this._isLocked = value;
        return this
    }

    toggleLock(): this {
        this._isLocked = !this._isLocked;
        return this;
    }

    get isDisabled(): boolean {
        return this._isDisabled
    }

    setIsDisabled(value = true): this {
        this._isDisabled = value;
        return this
    }

    toggleDisabled(): this {
        this._isDisabled = !this._isDisabled;
        return this;
    }

}
