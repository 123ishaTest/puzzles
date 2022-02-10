import {FunctionExpression} from "@/language/functions/FunctionExpression";

export abstract class NullaryFunction extends FunctionExpression {

    protected constructor(name: string) {
        super(name);
    }

}
