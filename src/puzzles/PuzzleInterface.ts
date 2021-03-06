import {CommandHistory} from "@/puzzles/commands/CommandHistory";
import {Puzzle} from "@/puzzles/Puzzle";
import {AbstractCommand} from "@/puzzles/commands/AbstractCommand";
import {Edge} from "@/puzzles/Edge";
import {ToggleEdgeCommand} from "@/puzzles/commands/ToggleEdgeCommand";
import {InterfaceConfig} from "@/puzzles/interface/InterfaceConfig";
import {EdgeClickedAction} from "@/puzzles/interface/EdgeClickedAction";
import {ToggleDisableEdgeCommand} from "@/puzzles/commands/ToggleDisableEdgeCommand";
import {Tile} from "@/puzzles/Tile";
import {TileClickedAction} from "@/puzzles/interface/TileClickedAction";
import {CycleThroughTileValuesCommand} from "@/puzzles/commands/CycleThroughTileValuesCommand";
import {PuzzleInterfaceMode} from "@/puzzles/PuzzleInterfaceMode";

export class PuzzleInterface {
    puzzle: Puzzle;
    mode: PuzzleInterfaceMode;
    commands: CommandHistory;
    config: InterfaceConfig;

    constructor(puzzle: Puzzle, mode: PuzzleInterfaceMode) {
        this.puzzle = puzzle;
        this.mode = mode;
        this.config = this.loadConfig();
        this.commands = new CommandHistory();
    }

    private loadConfig(): InterfaceConfig {
        return this.mode === PuzzleInterfaceMode.Solving ? this.puzzle.puzzleConfig.solvingConfig : this.puzzle.puzzleConfig.editingConfig;
    }

    public performEdgeClickAction(edge: Edge, left: boolean): void {
        const action = left ? this.config.edgeLeftClicked : this.config.edgeRightClicked;
        switch (action) {
            case EdgeClickedAction.ToggleEdgeValue:
                return this.do(new ToggleEdgeCommand(this.puzzle, edge));
            case EdgeClickedAction.ToggleEdgeDisabled:
                return this.do(new ToggleDisableEdgeCommand(this.puzzle, edge));
        }
    }

    public performTileClickAction(tile: Tile, left: boolean): void {
        const action = left ? this.config.tileLeftClicked : this.config.tileRightClicked;
        switch (action) {
            case TileClickedAction.CycleThroughValues:
                return this.do(new CycleThroughTileValuesCommand(this.puzzle, tile));
        }
    }

    public switchMode(): void {
        const puzzleData = this.puzzle.export();
        if (this.mode === PuzzleInterfaceMode.Solving) {
            this.mode = PuzzleInterfaceMode.Editing;
        } else {
            this.mode = PuzzleInterfaceMode.Solving;
        }
        this.config = this.loadConfig();
        this.commands = new CommandHistory();
        this.import(puzzleData);
    }

    private do(command: AbstractCommand): void {
        this.commands.do(command);
    }

    public undo(): void {
        this.commands.undo()
    }

    public redo(): void {
        this.commands.redo()
    }

    export(): string {
        return this.puzzle.export();
    }

    import(data: string): void {
        this.puzzle.import(data);
    }
}
