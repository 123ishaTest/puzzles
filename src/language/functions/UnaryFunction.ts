import {AbstractExpression} from "@/language/AbstractExpression";
import {LanguageType} from "@/language/types/LanguageType";
import {FunctionExpression} from "@/language/functions/FunctionExpression";

export abstract class UnaryFunction extends FunctionExpression {
    acceptedTypes: LanguageType[];
    arg: AbstractExpression;

    protected constructor(name: string, acceptedTypes: LanguageType[], arg: AbstractExpression) {
        super(name);
        this.acceptedTypes = acceptedTypes;
        this.arg = arg;
    }

}
