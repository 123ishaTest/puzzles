import {Puzzle} from "@/puzzles/Puzzle";
import {Corner} from "@/puzzles/Corner";
import {Edge} from "@/puzzles/Edge";
import {Tile} from "@/puzzles/Tile";

export interface Memory {
    puzzle: Puzzle
    tile?: Tile;
    edge?: Edge;
    corner?: Corner
}
