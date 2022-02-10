import {Puzzle} from "@/puzzles/Puzzle";
import {NeighbouringEdgesCount} from "@/puzzles/constraints/NeighbouringEdgesCount";
import {InstanceConfig} from "@/puzzles/instances/InstanceConfig";

export class Slitherlink extends Puzzle {

    constructor(instanceConfig: InstanceConfig) {
        super(instanceConfig,
            {
                editTiles: true,
                editEdges: true,
                editCorners: true,
            }
        );
        this.setConstraints([
            new NeighbouringEdgesCount()
        ]);
    }
}
