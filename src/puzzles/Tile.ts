import {Corner} from "@/puzzles/Corner";
import {Edge} from "@/puzzles/Edge";
import {Cell} from "@/puzzles/Cell";

export class Tile extends Cell {

    allowedValues: any[];

    constructor(allowedValues: any[]) {
        super();
        this._value = '';
        this.allowedValues = allowedValues;
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
