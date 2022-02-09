import {AbstractStatement} from "@/language/AbstractStatement";
import {AbstractType} from "@/language/types/AbstractType";
import {Puzzle} from "@/puzzles/Puzzle";

export abstract class AbstractExpression extends AbstractStatement {
    abstract evaluate(puzzle: Puzzle): AbstractType
}
