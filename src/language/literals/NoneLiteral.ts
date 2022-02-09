import {AbstractLiteral} from "@/language/literals/AbstractLiteral";
import {StatementId} from "@/language/StatementId";
import {NoneType} from "@/language/types/NoneType";

export class NoneLiteral extends AbstractLiteral {
    id = StatementId.NoneLiteral;

    constructor() {
        super(new NoneType());
    }

    evaluate(): NoneType {
        return this.type;
    }


}
