import {Puzzle} from "@/puzzles/Puzzle";
import {InstanceConfig} from "@/puzzles/instances/InstanceConfig";
import {ForEachTile} from "@/language/lists/ForEachTile";
import {Eq} from "@/language/logic/Eq";
import {TileEdgeCountFunction} from "@/language/functions/tile/TileEdgeCountFunction";
import {TileValueFunction} from "@/language/functions/tile/TileValueFunction";
import {TileHasNumericValueFilter} from "@/language/lists/filters/TileHasNumericValueFilter";
import {AllFilter} from "@/language/lists/filters/AllFilter";
import {NumberLiteral} from "@/language/literals/NumberLiteral";
import {ForEachCorner} from "@/language/lists/ForEachCorner";
import {Or} from "@/language/logic/Or";
import {CornerEdgeCountFunction} from "@/language/functions/corner/CornerEdgeCountFunction";
import {PuzzleRule} from "@/puzzles/PuzzleRule";
import {SlitherlinkRule} from "@/puzzles/instances/slitherlink/SlitherlinkRule";
import {EdgeGroupCountFunction} from "@/language/functions/edge/EdgeGroupCountFunction";
import {EdgeClickedAction} from "@/puzzles/interface/EdgeClickedAction";
import {TileClickedAction} from "@/puzzles/interface/TileClickedAction";

export class Slitherlink extends Puzzle {
    constructor(instanceConfig: InstanceConfig) {
        super(instanceConfig,
            {
                name: "Slitherlink",
                description: "The objective is to connect horizontally and vertically adjacent dots so that the lines form a simple loop with no loose ends. In addition, the number inside a square represents how many of its four sides are segments in the loop.",
                editEdges: true,
                tileValues: ['', 0, 1, 2, 3],
                rules: [
                    new PuzzleRule(SlitherlinkRule.TileValueEqualsEdgeCount, "The number of edges around a tile must equal the number in the tile",
                        new ForEachTile(
                            new TileHasNumericValueFilter(),
                            new Eq(new TileEdgeCountFunction(), new TileValueFunction())
                        ),
                    ),
                    new PuzzleRule(SlitherlinkRule.EdgeCornerCountIsEven, "Each corner must have 0 or 2 connected edges",
                        new ForEachCorner(
                            new AllFilter(),
                            new Or(
                                new Eq(new CornerEdgeCountFunction(), new NumberLiteral(0)),
                                new Eq(new CornerEdgeCountFunction(), new NumberLiteral(2)),
                            ),
                        ),
                    ),
                    new PuzzleRule(SlitherlinkRule.SingleLoop, "The path should be a single loop",
                        new Eq(new EdgeGroupCountFunction(), new NumberLiteral(1)),
                    ),
                ],
                solvingConfig: {
                    edgeLeftClicked: EdgeClickedAction.ToggleEdgeValue,
                    edgeRightClicked: EdgeClickedAction.ToggleEdgeDisabled,
                },
                editingConfig: {
                    edgeLeftClicked: EdgeClickedAction.ToggleEdgeValue,
                    tileLeftClicked: TileClickedAction.CycleThroughValues,
                },
            }
        );
    }

    export(): string {
        return this.exportTiles();
    }

    import(data: string): void {
        this.importTiles(data);
    }

}
