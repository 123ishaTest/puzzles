import {Puzzle} from "@/puzzles/Puzzle";

export abstract class AbstractConstraint {
    abstract isValid(puzzle: Puzzle<unknown>): boolean;

    abstract highlight(puzzle: Puzzle<unknown>): void;

    abstract hint(puzzle: Puzzle<unknown>): string;
}
