import {AbstractType} from "@/language/types/AbstractType";
import {LanguageType} from "@/language/types/LanguageType";

export class NumberType extends AbstractType {
    type = LanguageType.NUMBER;
    value: number;

    constructor(value: number) {
        super();
        this.value = value;
    }

    toString(): string {
        return `${this.value}`;
    }
}
