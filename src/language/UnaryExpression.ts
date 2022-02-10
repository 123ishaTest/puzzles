import {AbstractExpression} from "@/language/AbstractExpression";

export abstract class UnaryExpression extends AbstractExpression {
    expr: AbstractExpression;

    protected constructor(expr: AbstractExpression) {
        super();
        this.expr = expr;
    }
}
