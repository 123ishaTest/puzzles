import {StatementId} from "@/language/StatementId";
import {UnaryFunction} from "@/language/functions/UnaryFunction";
import {Puzzle} from "@/puzzles/Puzzle";
import {NumberType} from "@/language/types/NumberType";
import {AbstractExpression} from "@/language/AbstractExpression";

export class EdgeCountFunction extends UnaryFunction {
    id = StatementId.EdgeCountFunction;

    constructor(arg: AbstractExpression) {
        super("EdgeCount", [], arg);
    }

    evaluate(puzzle: Puzzle): NumberType {
        const arg = this.arg.evaluate(puzzle);
        return new NumberType(3);
    }

}
