import {AbstractExpression} from "@/language/AbstractExpression";

export abstract class BinaryExpression extends AbstractExpression {
    left: AbstractExpression;
    right: AbstractExpression;

    protected constructor(left: AbstractExpression, right: AbstractExpression) {
        super();
        this.left = left;
        this.right = right;
    }


}
