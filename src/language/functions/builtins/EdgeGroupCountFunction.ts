import {StatementId} from "@/language/StatementId";
import {NumberType} from "@/language/types/NumberType";
import {NullaryFunction} from "@/language/functions/NullaryFunction";

/**
 * Calculate the amount of groups in the edges.
 *
 */
export class EdgeGroupCountFunction extends NullaryFunction {
    id = StatementId.EdgeGroupCountFunction;

    constructor() {
        super();
    }

    evaluate(): NumberType {
        return new NumberType(3);
    }

}
