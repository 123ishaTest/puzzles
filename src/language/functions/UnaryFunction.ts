import {AbstractExpression} from "@/language/AbstractExpression";
import {LanguageType} from "@/language/types/LanguageType";
import {FunctionExpression} from "@/language/functions/FunctionExpression";

export abstract class UnaryFunction extends FunctionExpression {
    acceptedTypes: LanguageType[];
    arg: AbstractExpression;

    protected constructor(acceptedTypes: LanguageType[], arg: AbstractExpression) {
        super();
        this.acceptedTypes = acceptedTypes;
        this.arg = arg;
    }

}
