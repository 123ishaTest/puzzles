import {StatementId} from "@/language/StatementId";
import {NumberType} from "@/language/types/NumberType";
import {NullaryFunction} from "@/language/functions/NullaryFunction";
import {Memory} from "@/language/memory/Memory";
import {Edge} from "@/puzzles/Edge";

/**
 * Calculate the amount of groups in the edges by performing a floodfill algorithm.
 */
export class EdgeGroupCountFunction extends NullaryFunction {
    id = StatementId.EdgeGroupCountFunction;

    constructor() {
        super();
    }

    evaluate(memory: Memory): NumberType {
        const activeEdges = memory.puzzle.getEdges().filter(edge => {
            return edge.value === true;
        });

        let groups = 0;

        const visited: Edge[] = [];
        while (activeEdges.length > 0) {
            groups++;

            const queue: Edge[] = [activeEdges.shift() as Edge];

            while (queue.length > 0) {
                const current: Edge = queue.shift() as Edge;

                const firstNeighbours = current.firstCorner.getActiveNeighbouringEdges();
                const secondNeighbours = current.secondCorner.getActiveNeighbouringEdges();
                const neighbours = [...firstNeighbours, ...secondNeighbours];

                for (const neighbour of neighbours) {
                    if (!visited.includes(neighbour)) {
                        visited.push(neighbour);
                        queue.push(neighbour);
                        const index = activeEdges.indexOf(neighbour);
                        if (index !== -1) {
                            activeEdges.splice(index, 1);
                        }
                    }
                }

            }

        }

        return new NumberType(groups);
    }

}
