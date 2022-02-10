import {Edge} from "@/puzzles/Edge";
import {Tile} from "@/puzzles/Tile";

export class Corner {
    value = false;

    toggle(): void {
        this.value = !this.value;
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
