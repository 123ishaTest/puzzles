import {BooleanType} from "@/language/types/BooleanType";
import {StatementId} from "@/language/StatementId";
import {True} from "@/language/types/True";
import {AbstractExpression} from "@/language/AbstractExpression";
import {Memory} from "@/language/memory/Memory";
import {False} from "@/language/types/False";
import {BinaryExpression} from "@/language/BinaryExpression";
import {Filter} from "@/language/lists/filters/Filter";

export class ForEachTile extends BinaryExpression {
    id = StatementId.ForEachTile;

    constructor(where: Filter, expr: AbstractExpression) {
        super(where, expr);
    }

    evaluate(memory: Memory): BooleanType {
        let tiles = memory.puzzle.getTiles()

        tiles = tiles.filter(tile => {
            memory.tile = tile;
            return this.left.evaluate(memory).value;
        });

        for (const tile of tiles) {
            memory.tile = tile;

            const result = this.right.evaluate(memory);
            if (result.value === false) {
                return new False();
            }
        }
        return new True()
    }

}
