import {AbstractType} from "@/language/types/AbstractType";
import {LanguageType} from "@/language/types/LanguageType";

export class NoneType extends AbstractType {
    type = LanguageType.NONE;
    value: any = null;

    constructor() {
        super();
    }


    toString(): string {
        return "None";
    }
}
