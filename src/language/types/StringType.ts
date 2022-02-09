import {AbstractType} from "@/language/types/AbstractType";
import {LanguageType} from "@/language/types/LanguageType";

export class StringType extends AbstractType {
    type = LanguageType.STRING;
    value: string;

    constructor(value: string) {
        super();
        this.value = value;
    }

    toString(): string {
        return `String(${this.value})`;
    }
}
