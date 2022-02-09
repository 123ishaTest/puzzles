import {AbstractExpression} from "@/language/AbstractExpression";

export abstract class FunctionExpression extends AbstractExpression {
    name: string

    protected constructor(name: string) {
        super();
        this.name = name;
    }
}
