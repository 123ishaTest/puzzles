import {FunctionExpression} from "@/language/functions/FunctionExpression";
import {LanguageType} from "@/language/types/LanguageType";

export abstract class NullaryFunction extends FunctionExpression {
    acceptedTypes: LanguageType[];

    protected constructor(name: string, acceptedTypes: LanguageType[]) {
        super(name);
        this.acceptedTypes = acceptedTypes;
    }

}
