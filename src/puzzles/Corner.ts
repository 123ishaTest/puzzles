import {Edge} from "@/puzzles/Edge";
import {Tile} from "@/puzzles/Tile";
import {Cell} from "@/puzzles/Cell";

export class Corner extends Cell {

    toggle(): void {
        this._value = !this._value;
    }

    northEdge?: Edge;
    eastEdge?: Edge;
    southEdge?: Edge;
    westEdge?: Edge;


    getNeighbouringEdges(): Edge[] {
        return [
            this.northEdge,
            this.eastEdge,
            this.southEdge,
            this.westEdge,
        ].filter(edge => {
            return edge != undefined;
        }) as Edge[];
    }

    getActiveNeighbouringEdges(): Edge[] {
        return this.getNeighbouringEdges().filter(edge => {
            return edge.value === true;
        })
    }

    northEastTile?: Tile
    southEastTile?: Tile
    southWestTile?: Tile
    northWestTile?: Tile

    getNeighbouringTiles(): Tile[] {
        return [
            this.northEastTile,
            this.southEastTile,
            this.southWestTile,
            this.northWestTile,
        ].filter(tile => {
            return tile != undefined;
        }) as Tile[];
    }
}
