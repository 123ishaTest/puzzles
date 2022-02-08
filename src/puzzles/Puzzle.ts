import {AbstractConstraint} from "@/puzzles/constraints/AbstractConstraint";
import {Tile} from "@/puzzles/Tile";
import {Edge} from "@/puzzles/Edge";
import {Corner} from "@/puzzles/Corner";

export class Puzzle {
    height: number;
    width: number;

    constraints: AbstractConstraint[];
    grid: (Tile | Edge | Corner)[][];

    constructor(height: number, width: number, constraints: AbstractConstraint[]) {
        this.height = height;
        this.width = width;
        this.constraints = constraints;

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
    }

    public getTile(x: number, y: number): Tile {
        return this.grid[2 * y + 1][2 * x + 1] as Tile;
    }

    public getEdges(x: number, y: number): Edge[] {
        return [
            this.grid[2 * y][2 * x + 1] as Edge,
            this.grid[2 * y][2 * x - 1] as Edge,
            this.grid[2 * y - 1][2 * x] as Edge,
            this.grid[2 * y + 1][2 * x] as Edge,
        ]
    }

    public getCorner(x: number, y: number): Corner {
        return this.grid[2 * y][2 * x] as Corner;
    }

    isValid(): boolean {
        this.constraints.forEach(constraint => {
            const isValid = constraint.isValid(this);
            if (!isValid) {
                return false;
            }
        })
        return true;
    }
}
