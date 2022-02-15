import {AbstractCommand} from "@/puzzles/commands/AbstractCommand";
import {Tile} from "@/puzzles/Tile";
import {Puzzle} from "@/puzzles/Puzzle";

export class CycleThroughTileValuesCommand extends AbstractCommand {

    private _oldValue: any;
    private _tile: Tile;


    constructor(puzzle: Puzzle, tile: Tile) {
        super(puzzle);
        this._tile = tile;
    }

    do(): boolean {
        this._oldValue = this._tile.value;
        const index = this._tile.allowedValues.indexOf(this._oldValue);
        const next = (index + 1) % this._tile.allowedValues.length;
        this._tile.setValue(this._tile.allowedValues[next]);
        return true;
    }

    undo(): boolean {
        this._tile.setValue(this._oldValue);
        this._oldValue = null;
        return true;
    }

    toString(): string {
        return `Rotate tile value`;
    }

}
