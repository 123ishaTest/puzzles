import {BinaryExpression} from "@/language/BinaryExpression";
import {StatementId} from "@/language/StatementId";
import {AbstractExpression} from "@/language/AbstractExpression";
import {BooleanType} from "@/language/types/BooleanType";
import {LangTypeError} from "@/language/errors/LangTypeError";
import {Memory} from "@/language/memory/Memory";

export class Eq extends BinaryExpression {
    id = StatementId.Eq;

    constructor(left: AbstractExpression, right: AbstractExpression) {
        super(left, right);
    }

    evaluate(memory: Memory): BooleanType {
        const left = this.left.evaluate(memory);
        const right = this.right.evaluate(memory);
        console.log(left, right);
        if (left.type != right.type) {
            throw new LangTypeError(`Cannot compare different types ${left} and ${right}`)
        }
        return new BooleanType(left.value === right.value);
    }

}
