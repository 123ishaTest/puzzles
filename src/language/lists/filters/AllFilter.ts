import {StatementId} from "@/language/StatementId";
import {Memory} from "@/language/memory/Memory";
import {Filter} from "@/language/lists/filters/Filter";
import {BooleanType} from "@/language/types/BooleanType";
import {True} from "@/language/types/True";

/**
 * Doesn't filter anything
 */
export class AllFilter extends Filter {
    id = StatementId.EdgeCountFunction;

    constructor() {
        super();
    }

    evaluate(memory: Memory): BooleanType {
        return new True();
    }

}
