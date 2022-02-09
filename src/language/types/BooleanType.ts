import {AbstractType} from "@/language/types/AbstractType";
import {LanguageType} from "@/language/types/LanguageType";

export class BooleanType extends AbstractType {
    type = LanguageType.BOOLEAN;
    value: boolean;

    constructor(value: boolean) {
        super();
        this.value = value;
    }

    toString(): string {
        return this.value ? 'True' : 'False';
    }
}
