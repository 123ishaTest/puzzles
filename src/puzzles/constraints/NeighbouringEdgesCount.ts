import {AbstractConstraint} from "@/puzzles/constraints/AbstractConstraint";
import {Puzzle} from "@/puzzles/Puzzle";

export class NeighbouringEdgesCount extends AbstractConstraint {
    highlight(puzzle: Puzzle): void {
        // Empty
    }

    hint(puzzle: Puzzle): string {
        return "";
    }

    isValid(puzzle: Puzzle): boolean {
        for (let y = 0; y < puzzle.height; y++) {
            for (let x = 0; x < puzzle.width; x++) {
                const tile = puzzle.getTile(x, y);

                // Skip empty tiles
                if (!tile.value) {
                    continue;
                }
                const edges = puzzle.getEdges(x, y);
                let edgeCount = 0;
                edges.forEach(edge => {
                    if (edge.value === true) {
                        edgeCount++;
                    }
                });
                console.log(tile.value, edgeCount);
                if (tile.value != edgeCount) {
                    return false;
                }
            }
        }
        return true;
    }

}
