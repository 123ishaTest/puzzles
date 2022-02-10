import {StatementId} from "@/language/StatementId";
import {Puzzle} from "@/puzzles/Puzzle";
import {NumberType} from "@/language/types/NumberType";
import {AbstractExpression} from "@/language/AbstractExpression";
import {NullaryFunction} from "@/language/functions/NullaryFunction";

/**
 * Calculate the amount of groups in the edges.
 *
 */
export class EdgeGroupCountFunction extends NullaryFunction {
    id = StatementId.EdgeGroupCountFunction;

    constructor(arg: AbstractExpression) {
        super("EdgeGroupCount", []);
    }

    evaluate(puzzle: Puzzle): NumberType {
        return new NumberType(3);
    }

}
