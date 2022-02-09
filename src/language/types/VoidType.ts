import {AbstractType} from "@/language/types/AbstractType";
import {LanguageType} from "@/language/types/LanguageType";

export class VoidType extends AbstractType {
    type = LanguageType.VOID;
    value: undefined;

    constructor() {
        super();
    }


    toString(): string {
        return `void`;
    }
}
