import {Tile} from "@/puzzles/Tile";
import {Edge} from "@/puzzles/Edge";
import {Corner} from "@/puzzles/Corner";
import {PuzzleConfig} from "@/puzzles/instances/PuzzleConfig";
import {InstanceConfig, TileClue} from "@/puzzles/instances/InstanceConfig";
import {Cell} from "@/puzzles/Cell";
import {AbstractExpression} from "@/language/AbstractExpression";

export class Puzzle {
    // Config
    editTiles: boolean;
    editEdges: boolean;
    editCorners: boolean;

    height: number;
    width: number;
    gridHeight: number;
    gridWidth: number;

    constraints: AbstractExpression[] = [];
    grid: (Tile | Edge | Corner)[][];

    constructor(instanceConfig: InstanceConfig, puzzleConfig: PuzzleConfig) {
        // Process puzzleConfig
        this.editTiles = puzzleConfig.editTiles ?? true;
        this.editEdges = puzzleConfig.editEdges ?? false;
        this.editCorners = puzzleConfig.editCorners ?? false;

        // Add constraints
        if (puzzleConfig.constraints) {
            this.setConstraints(puzzleConfig.constraints);
        }

        // Initialize grid
        this.height = instanceConfig.height;
        this.width = instanceConfig.width;

        this.gridHeight = 2 * this.height + 1;
        this.gridWidth = 2 * this.width + 1;

        this.grid = [];
        for (let y = 0; y < this.gridHeight; y++) {
            const row = [];
            for (let x = 0; x < this.gridWidth; x++) {
                if (y % 2 === 0 && x % 2 === 0) {
                    row.push(new Corner())
                } else if (y % 2 === 1 && x % 2 === 1) {
                    row.push(new Tile(''))
                } else {
                    row.push(new Edge(y % 2 === 0))
                }
            }
            this.grid.push(row);
        }

        // Connect the grid
        for (let y = 0; y < this.gridHeight; y++) {
            for (let x = 0; x < this.gridWidth; x++) {
                if (y % 2 === 0 && x % 2 === 0) {
                    const corner = this.grid[y][x] as Corner;

                    corner.northEdge = this.getCell(x, y - 1) as Edge;
                    corner.eastEdge = this.getCell(x + 1, y) as Edge;
                    corner.southEdge = this.getCell(x, y + 1) as Edge;
                    corner.westEdge = this.getCell(x - 1, y) as Edge;

                    corner.northEastTile = this.getCell(x + 1, y - 1) as Tile;
                    corner.southEastTile = this.getCell(x + 1, y + 1) as Tile;
                    corner.southWestTile = this.getCell(x - 1, y + 1) as Tile;
                    corner.northWestTile = this.getCell(x - 1, y - 1) as Tile;
                } else if (y % 2 === 1 && x % 2 === 1) {
                    const tile = this.grid[y][x] as Tile;

                    tile.northEdge = this.getCell(x, y - 1) as Edge;
                    tile.eastEdge = this.getCell(x + 1, y) as Edge;
                    tile.southEdge = this.getCell(x, y + 1) as Edge;
                    tile.westEdge = this.getCell(x - 1, y) as Edge;

                    tile.northEastCorner = this.getCell(x + 1, y - 1) as Corner;
                    tile.southEastCorner = this.getCell(x + 1, y + 1) as Corner;
                    tile.southWestCorner = this.getCell(x - 1, y + 1) as Corner;
                    tile.northWestCorner = this.getCell(x - 1, y - 1) as Corner;
                } else {
                    const edge = this.grid[y][x] as Edge;

                    if (edge.isHorizontal) {
                        edge.firstTile = this.getCell(x, y - 1) as Tile;
                        edge.secondTile = this.getCell(x, y + 1) as Tile;

                        edge.firstCorner = this.getCell(x - 1, y) as Corner;
                        edge.secondCorner = this.getCell(x + 1, y) as Corner;

                    } else {
                        edge.firstTile = this.getCell(x - 1, y) as Tile;
                        edge.secondTile = this.getCell(x + 1, y) as Tile;

                        edge.firstCorner = this.getCell(x, y - 1) as Corner;
                        edge.secondCorner = this.getCell(x, y + 1) as Corner;
                    }

                }
            }
        }

        // Add clues
        if (instanceConfig.tileClues) {
            instanceConfig.tileClues.forEach((tileClue: TileClue) => {
                this.getTile(tileClue.x, tileClue.y).setValue(tileClue.value);
            })
        }
    }

    public getCell(x: number, y: number): Cell | undefined {
        if (x < 0 || x >= this.gridWidth || y < 0 || y >= this.gridHeight) {
            return undefined;
        } else {
            return this.grid[y][x];
        }
    }

    public addConstraint(constraint: AbstractExpression): this {
        this.constraints.push(constraint);
        return this;
    }

    public setConstraints(constraints: AbstractExpression[]): this {
        this.constraints = constraints;
        return this;
    }

    public getTile(x: number, y: number): Tile {
        return this.grid[2 * y + 1][2 * x + 1] as Tile;
    }

    public getTileEdges(x: number, y: number): Edge[] {
        return [
            this.grid[2 * y + 0][2 * x + 1] as Edge,
            this.grid[2 * y + 2][2 * x + 1] as Edge,
            this.grid[2 * y + 1][2 * x + 2] as Edge,
            this.grid[2 * y + 1][2 * x + 0] as Edge,
        ]
    }

    public getCorner(x: number, y: number): Corner {
        return this.grid[2 * y][2 * x] as Corner;
    }

    isSolved(): boolean {
        for (const constraint of this.constraints) {
            const isSolved = constraint.evaluate({
                puzzle: this,
            }).value;
            if (!isSolved) {
                return false;
            }
        }

        return true;
    }

    toggleEdge(edge: Edge): void {
        if (!this.editEdges) {
            return;
        }
        edge.toggle();
    }

    toggleCorner(corner: Corner): void {
        if (!this.editCorners) {
            return;
        }
        corner.toggle();
    }

    setTileValue(tile: Tile, number: number): void {
        if (!this.editTiles) {
            return;
        }
        tile.setValue(number);
    }

    getTiles(): Tile[] {
        const tiles = [];
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                tiles.push(this.getTile(x, y));
            }
        }
        return tiles;
    }

    getCorners(): Corner[] {
        const corners = [];
        for (let y = 0; y < this.height + 1; y++) {
            for (let x = 0; x < this.width + 1; x++) {
                corners.push(this.getCorner(x, y));
            }
        }
        return corners;
    }
}
