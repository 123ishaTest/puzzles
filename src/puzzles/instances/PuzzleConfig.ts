import {PuzzleRule} from "@/puzzles/PuzzleRule";

export interface PuzzleConfig {
    name: string,
    description: string,
    editTiles?: boolean;
    editEdges?: boolean;
    editCorners?: boolean;
    rules?: PuzzleRule[];
}
