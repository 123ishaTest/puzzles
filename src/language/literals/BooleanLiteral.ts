import {AbstractLiteral} from "@/language/literals/AbstractLiteral";
import {StatementId} from "@/language/StatementId";
import {BooleanType} from "@/language/types/BooleanType";

export class BooleanLiteral extends AbstractLiteral {
    id = StatementId.BooleanLiteral;

    constructor(value = false) {
        super(new BooleanType(value));
    }

    evaluate(): BooleanType {
        return this.type;
    }


}
