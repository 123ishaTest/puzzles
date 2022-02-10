import {BinaryExpression} from "@/language/BinaryExpression";
import {StatementId} from "@/language/StatementId";
import {AbstractExpression} from "@/language/AbstractExpression";
import {BooleanType} from "@/language/types/BooleanType";
import {LangTypeError} from "@/language/errors/LangTypeError";
import {Memory} from "@/language/memory/Memory";
import {LanguageType} from "@/language/types/LanguageType";

export class Or extends BinaryExpression {
    id = StatementId.Or;

    constructor(left: AbstractExpression, right: AbstractExpression) {
        super(left, right);
    }

    evaluate(memory: Memory): BooleanType {
        const left = this.left.evaluate(memory);
        const right = this.right.evaluate(memory);

        if (left.type != LanguageType.BOOLEAN) {
            throw new LangTypeError(`Left ${left} is not a boolean`)
        }
        if (right.type != LanguageType.BOOLEAN) {
            throw new LangTypeError(`Right ${right} is not a boolean`)
        }

        return new BooleanType(left.value || right.value);
    }

}
