import {Puzzle} from "@/puzzles/Puzzle";

export abstract class AbstractCommand {

    private _puzzle: Puzzle;

    protected constructor(puzzle: Puzzle) {
        this._puzzle = puzzle;
    }

    public abstract do(): boolean;

    public abstract undo(): boolean;

    public abstract toString(): string;
}
