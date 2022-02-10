import {BooleanType} from "@/language/types/BooleanType";
import {StatementId} from "@/language/StatementId";
import {True} from "@/language/types/True";
import {AbstractExpression} from "@/language/AbstractExpression";
import {Memory} from "@/language/memory/Memory";
import {False} from "@/language/types/False";
import {BinaryExpression} from "@/language/BinaryExpression";
import {Filter} from "@/language/lists/filters/Filter";

export class ForEachCorner extends BinaryExpression {
    id = StatementId.ForEachCorner;

    constructor(where: Filter, expr: AbstractExpression) {
        super(where, expr);
    }

    evaluate(memory: Memory): BooleanType {
        let corners = memory.puzzle.getCorners()

        corners = corners.filter(corner => {
            memory.corner = corner;
            return this.left.evaluate(memory).value;
        });

        for (const corner of corners) {
            memory.corner = corner;

            const result = this.right.evaluate(memory);
            if (result.value === false) {
                return new False();
            }
        }
        return new True()
    }

}
