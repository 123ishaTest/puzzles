import {StatementId} from "@/language/StatementId";
import {NumberType} from "@/language/types/NumberType";
import {NullaryFunction} from "@/language/functions/NullaryFunction";
import {Memory} from "@/language/memory/Memory";

/**
 * Returns the value of the given tile
 */
export class TileValueFunction extends NullaryFunction {
    id = StatementId.EdgeCountFunction;

    constructor() {
        super();
    }

    evaluate(memory: Memory): NumberType {
        const tile = memory.tile;

        if (!tile) {
            throw new PuzzleDataNotSetError(`Tile not set for ${this.id} function`)
        }

        return new NumberType(tile.value);
    }

}
