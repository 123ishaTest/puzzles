import {AbstractCommand} from "@/puzzles/commands/AbstractCommand";
import {Puzzle} from "@/puzzles/Puzzle";
import {Edge} from "@/puzzles/Edge";

export class DisableEdgeCommand extends AbstractCommand {
    private _edge: Edge;


    constructor(puzzle: Puzzle, edge: Edge) {
        super(puzzle);
        this._edge = edge;
    }

    do(): boolean {
        this._edge.toggleDisabled();
        return true;
    }

    undo(): boolean {
        this._edge.toggleDisabled();
        return true;
    }

    toString(): string {
        return `Disable edge`;
    }

}
