import {StatementId} from "@/language/StatementId";
import {NumberType} from "@/language/types/NumberType";
import {NullaryFunction} from "@/language/functions/NullaryFunction";
import {Memory} from "@/language/memory/Memory";

/**
 * Counts the number of edges a given tile has active.
 */
export class TileEdgeCountFunction extends NullaryFunction {
    id = StatementId.EdgeCountFunction;

    constructor() {
        super();
    }

    evaluate(memory: Memory): NumberType {
        const tile = memory.tile;

        if (!tile) {
            throw new PuzzleDataNotSetError(`Tile not set for ${this.id} function`)
        }

        let sum = 0;
        tile.getNeighbouringEdges().forEach(edge => {
            if (edge.value) {
                sum++;
            }
        })

        return new NumberType(sum);
    }

}
