import {EdgeClickedAction} from "@/puzzles/interface/EdgeClickedAction";

export interface InterfaceConfig {
    edgeLeftClicked?: EdgeClickedAction;
    edgeRightClicked?: EdgeClickedAction;
    // tileLeftClicked?: boolean;
    // tileRightClicked?: boolean;
    // cornerLeftClicked?: boolean;
    // cornerRightClicked?: boolean;
}
