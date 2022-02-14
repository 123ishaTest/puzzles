import {StatementId} from "@/language/StatementId";
import {Filter} from "@/language/lists/filters/Filter";
import {BooleanType} from "@/language/types/BooleanType";
import {Memory} from "@/language/memory/Memory";

/**
 * Filters edges that are inactive
 */
export class EdgeIsActiveFilter extends Filter {
    id = StatementId.EdgeIsActiveFilter;

    constructor() {
        super();
    }

    evaluate(memory: Memory): BooleanType {
        const edge = memory.edge;

        if (!edge) {
            throw new PuzzleDataNotSetError(`Edge not set for ${this.id} function`)
        }

        return new BooleanType(edge.value === true);
    }

}
