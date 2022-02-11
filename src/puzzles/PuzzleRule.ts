import {AbstractExpression} from "@/language/AbstractExpression";
import {Memory} from "@/language/memory/Memory";

export class PuzzleRule {
    id: string;
    description: string;
    expr: AbstractExpression;

    constructor(id: string, description: string, expr: AbstractExpression) {
        this.id = id;
        this.description = description;
        this.expr = expr;
    }

    isSatisfied(memory: Memory): boolean {
        return this.expr.evaluate(memory).value
    }
}
