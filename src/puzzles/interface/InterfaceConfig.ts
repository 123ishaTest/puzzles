import {EdgeClickedAction} from "@/puzzles/interface/EdgeClickedAction";
import {TileClickedAction} from "@/puzzles/interface/TileClickedAction";

export interface InterfaceConfig {
    tileValues?: any[],
    edgeLeftClicked?: EdgeClickedAction;
    edgeRightClicked?: EdgeClickedAction;
    tileLeftClicked?: TileClickedAction;
    tileRightClicked?: TileClickedAction;
    // cornerLeftClicked?: boolean;
    // cornerRightClicked?: boolean;
}
