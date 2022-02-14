import {Corner} from "@/puzzles/Corner";
import {Tile} from "@/puzzles/Tile";
import {Cell} from "@/puzzles/Cell";

export class Edge extends Cell {
    isHorizontal: boolean;

    constructor(isHorizontal: boolean) {
        super();
        this.isHorizontal = isHorizontal;
    }

    toggle(): void {
        this._value = !this._value;
    }

    firstCorner!: Corner
    secondCorner!: Corner

    getNeighbouringCorners(): Corner[] {
        return [
            this.firstCorner,
            this.secondCorner,
        ];
    }

    firstTile?: Tile
    secondTile?: Tile

    getNeighbouringTiles(): Tile[] {
        return [
            this.firstTile,
            this.secondTile,
        ].filter(tile => {
            return tile != undefined;
        }) as Tile[];
    }

}
