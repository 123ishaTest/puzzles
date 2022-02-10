import {AbstractExpression} from "@/language/AbstractExpression";

export interface PuzzleConfig {
    editTiles?: boolean;
    editEdges?: boolean;
    editCorners?: boolean;
    constraints?: AbstractExpression[];
}
