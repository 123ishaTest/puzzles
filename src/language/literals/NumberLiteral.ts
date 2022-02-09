import {AbstractLiteral} from "@/language/literals/AbstractLiteral";
import {StatementId} from "@/language/StatementId";
import {NumberType} from "@/language/types/NumberType";

export class NumberLiteral extends AbstractLiteral {
    id = StatementId.NumberLiteral;

    constructor(value = 0) {
        super(new NumberType(value));
    }

    evaluate(): NumberType {
        return this.type;
    }


}
