import {Corner} from "@/puzzles/Corner";
import {Edge} from "@/puzzles/Edge";

export class Tile {
    private _value: any;

    constructor(value: any) {
        this._value = value;
    }


    get value(): any {
        return this._value;
    }

    setValue(number: number): void {
        this._value = number;
    }

    northEastCorner!: Corner
    southEastCorner!: Corner
    southWestCorner!: Corner
    northWestCorner!: Corner

    getNeighbouringCorners(): Corner[] {
        return [
            this.northEastCorner,
            this.southEastCorner,
            this.southWestCorner,
            this.northWestCorner,
        ];
    }

    northEdge!: Edge;
    eastEdge!: Edge;
    southEdge!: Edge;
    westEdge!: Edge;

    getNeighbouringEdges(): Edge[] {
        return [
            this.northEdge,
            this.eastEdge,
            this.southEdge,
            this.westEdge,
        ];
    }
}
