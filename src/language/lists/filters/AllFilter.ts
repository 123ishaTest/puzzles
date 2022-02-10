import {StatementId} from "@/language/StatementId";
import {Filter} from "@/language/lists/filters/Filter";
import {BooleanType} from "@/language/types/BooleanType";
import {True} from "@/language/types/True";

/**
 * Doesn't filter anything
 */
export class AllFilter extends Filter {
    id = StatementId.AllFilter;

    constructor() {
        super();
    }

    evaluate(): BooleanType {
        return new True();
    }

}
