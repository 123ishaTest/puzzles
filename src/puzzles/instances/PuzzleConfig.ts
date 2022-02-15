import {PuzzleRule} from "@/puzzles/PuzzleRule";
import {InterfaceConfig} from "@/puzzles/interface/InterfaceConfig";

export interface PuzzleConfig {
    name: string,
    tileValues: any[];
    description: string,
    editTiles?: boolean;
    editEdges?: boolean;
    editCorners?: boolean;
    solvingConfig: InterfaceConfig;
    editingConfig: InterfaceConfig;
    rules?: PuzzleRule[];
}
