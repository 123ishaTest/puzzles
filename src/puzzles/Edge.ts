import {Corner} from "@/puzzles/Corner";
import {Tile} from "@/puzzles/Tile";

export class Edge {
    value = false;

    isHorizontal: boolean;


    constructor(isHorizontal: boolean) {
        this.isHorizontal = isHorizontal;
    }

    toggle(): void {
        this.value = !this.value;
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
