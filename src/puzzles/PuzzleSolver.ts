import {CommandHistory} from "@/puzzles/commands/CommandHistory";
import {Puzzle} from "@/puzzles/Puzzle";
import {AbstractCommand} from "@/puzzles/commands/AbstractCommand";

export class PuzzleSolver {
    puzzle: Puzzle;
    commands: CommandHistory;

    constructor(puzzle: Puzzle) {
        this.puzzle = puzzle;
        this.commands = new CommandHistory();
    }

    public do(command: AbstractCommand): void {
        this.commands.do(command);
    }

    undo(): void {
        this.commands.undo()
    }

    redo(): void {
        this.commands.redo()
    }
}
