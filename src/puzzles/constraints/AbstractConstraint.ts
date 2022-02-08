import {Puzzle} from "@/puzzles/Puzzle";

export abstract class AbstractConstraint {
    abstract isValid(puzzle: Puzzle): boolean;

    abstract highlight(puzzle: Puzzle): void;

    abstract hint(puzzle: Puzzle): string;
}
