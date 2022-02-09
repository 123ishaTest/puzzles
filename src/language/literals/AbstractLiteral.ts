import {AbstractType} from "@/language/types/AbstractType";
import {AbstractExpression} from "@/language/AbstractExpression";

export abstract class AbstractLiteral extends AbstractExpression {
    type: AbstractType;

    protected constructor(type: AbstractType) {
        super();
        this.type = type;
    }

    public toString(): string {
        return this.type.toString();
    }

}
