import {StatementId} from "@/language/StatementId";
import {NumberType} from "@/language/types/NumberType";
import {NullaryFunction} from "@/language/functions/NullaryFunction";
import {Memory} from "@/language/memory/Memory";

/**
 * Counts the number of edges a given corner has active.
 */
export class CornerEdgeCountFunction extends NullaryFunction {
    id = StatementId.CornerEdgeCountFunction;

    constructor() {
        super();
    }

    evaluate(memory: Memory): NumberType {
        const corner = memory.corner;

        if (!corner) {
            throw new PuzzleDataNotSetError(`Corner not set for ${this.id} function`)
        }

        let sum = 0;
        corner.getNeighbouringEdges().forEach(edge => {
            if (edge.value) {
                sum++;
            }
        })

        return new NumberType(sum);
    }

}
