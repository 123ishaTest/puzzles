import {PuzzleRule} from "@/puzzles/PuzzleRule";
import {InterfaceConfig} from "@/puzzles/interface/InterfaceConfig";

export interface PuzzleConfig {
    name: string,
    description: string,
    editTiles?: boolean;
    editEdges?: boolean;
    editCorners?: boolean;
    solvingConfig: InterfaceConfig;
    rules?: PuzzleRule[];
}
