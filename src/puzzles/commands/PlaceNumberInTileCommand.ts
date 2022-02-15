import {AbstractCommand} from "@/puzzles/commands/AbstractCommand";
import {Tile} from "@/puzzles/Tile";
import {Puzzle} from "@/puzzles/Puzzle";
import {CommandError} from "@/puzzles/commands/CommandError";

export class PlaceNumberInTileCommand extends AbstractCommand {

    x: number;
    y: number;
    private _newValue: number
    private _oldValue: any;
    private _tile: Tile;


    constructor(puzzle: Puzzle, x: number, y: number, value: number) {
        super(puzzle);
        const tile = puzzle.getTile(x, y);
        if (!tile) {
            throw new CommandError(`Cannot get tile at coordinates ${x}, ${y}`);
        }
        this.x = x;
        this.y = y;
        this._tile = tile;
        this._newValue = value;
    }

    do(): boolean {
        this._oldValue = this._tile.value;
        this._tile.setValue(this._newValue);
        return true;
    }

    undo(): boolean {
        this._tile.setValue(this._oldValue);
        this._oldValue = null;
        return true;
    }

    toString(): string {
        return `Place a ${this._newValue} in (${this.x}, ${this.y})`;
    }

}
