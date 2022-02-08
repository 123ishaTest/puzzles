import {AbstractConstraint} from "@/puzzles/constraints/AbstractConstraint";
import {Cell} from "@/puzzles/Cell";

export class Puzzle<CellType> {
    height: number;
    width: number;

    constraints: AbstractConstraint[];
    cells: Cell<CellType>[][];

    edges: boolean[][];


    constructor(height: number, width: number, constraints: AbstractConstraint[]) {
        this.height = height;
        this.width = width;
        this.constraints = constraints;

        this.cells = new Array(height).fill(false).map(() => new Array(width).fill(null));
        this.edges = new Array(height + 1).fill(false).map(() => new Array(width + 1).fill(null));
    }

    public getCellValues(): CellType[][] {
        this.cells[0].map((row: Cell<CellType>, index: number) => {
            return this.cells.map((column: Cell<CellType>[]) => {
                return column[index]
            })
        });
        return this.getCellValues();
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
