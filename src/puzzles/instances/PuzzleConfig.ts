import {PuzzleRule} from "@/puzzles/PuzzleRule";

export interface PuzzleConfig {
    editTiles?: boolean;
    editEdges?: boolean;
    editCorners?: boolean;
    rules?: PuzzleRule[];
}
