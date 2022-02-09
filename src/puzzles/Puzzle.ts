import {AbstractConstraint} from "@/puzzles/constraints/AbstractConstraint";
import {Tile} from "@/puzzles/Tile";
import {Edge} from "@/puzzles/Edge";
import {Corner} from "@/puzzles/Corner";
import {PuzzleConfig} from "@/puzzles/instances/PuzzleConfig";
import {InstanceConfig, TileClue} from "@/puzzles/instances/InstanceConfig";

export class Puzzle {
    // Config
    editTiles: boolean;
    editEdges: boolean;

    height: number;
    width: number;

    constraints: AbstractConstraint[] = [];
    grid: (Tile | Edge | Corner)[][];

    constructor(instanceConfig: InstanceConfig, puzzleConfig: PuzzleConfig) {
        // Process puzzleConfig
        this.editTiles = puzzleConfig.editTiles ?? true;
        this.editEdges = puzzleConfig.editEdges ?? false;


        // Initialize grid
        this.height = instanceConfig.height;
        this.width = instanceConfig.width;

        const gridHeight = 2 * this.height + 1;
        const gridWidth = 2 * this.width + 1;

        this.grid = [];
        for (let y = 0; y < gridHeight; y++) {
            const row = [];
            for (let x = 0; x < gridWidth; x++) {
                if (y % 2 === 0 && x % 2 === 0) {
                    row.push(new Corner())
                } else if (y % 2 === 1 && x % 2 === 1) {
                    row.push(new Tile(''))
                } else {
                    row.push(new Edge())
                }
            }
            this.grid.push(row);
        }

        // Add clues
        if (instanceConfig.tileClues) {
            instanceConfig.tileClues.forEach((tileClue: TileClue) => {
                this.getTile(tileClue.x, tileClue.y).setValue(tileClue.value);
            })
        }
    }

    public addConstraint(constraint: AbstractConstraint): this {
        this.constraints.push(constraint);
        return this;
    }

    public setConstraints(constraints: AbstractConstraint[]): this {
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

    isValid(): boolean {
        for (const constraint of this.constraints) {
            const isValid = constraint.isValid(this);
            if (!isValid) {
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
}
