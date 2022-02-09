import {StatementId} from "@/language/StatementId";
import {AbstractLiteral} from "@/language/literals/AbstractLiteral";
import {StringType} from "@/language/types/StringType";

export class StringLiteral extends AbstractLiteral {
    id = StatementId.StringLiteral;

    constructor(value = "") {
        super(new StringType(value));
    }

    evaluate(): StringType {
        return this.type;
    }

}
