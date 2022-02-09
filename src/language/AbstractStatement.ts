import {StatementId} from "@/language/StatementId";
import {Puzzle} from "@/puzzles/Puzzle";
import {NoneType} from "@/language/types/NoneType";

export abstract class AbstractStatement {
    abstract id: StatementId;

    abstract evaluate(puzzle: Puzzle): NoneType;
}
