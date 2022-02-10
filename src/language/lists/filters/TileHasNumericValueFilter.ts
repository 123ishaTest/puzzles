import {StatementId} from "@/language/StatementId";
import {Memory} from "@/language/memory/Memory";
import {Filter} from "@/language/lists/filters/Filter";
import {BooleanType} from "@/language/types/BooleanType";

/**
 * Filters out tiles without a numeric value
 */
export class TileHasNumericValueFilter extends Filter {
    id = StatementId.TileHasNumericValueFilter;

    constructor() {
        super();
    }

    evaluate(memory: Memory): BooleanType {
        const tile = memory.tile;

        if (!tile) {
            throw new PuzzleDataNotSetError(`Tile not set for ${this.id} function`)
        }

        return new BooleanType(Number.isFinite(tile.value));
    }

}
