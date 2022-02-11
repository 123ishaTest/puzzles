import {Puzzle} from "@/puzzles/Puzzle";
import {InstanceConfig} from "@/puzzles/instances/InstanceConfig";
import {ForEachTile} from "@/language/lists/ForEachTile";
import {Eq} from "@/language/logic/Eq";
import {TileEdgeCountFunction} from "@/language/functions/builtins/TileEdgeCountFunction";
import {TileValueFunction} from "@/language/functions/builtins/TileValueFunction";
import {TileHasNumericValueFilter} from "@/language/lists/filters/TileHasNumericValueFilter";
import {AllFilter} from "@/language/lists/filters/AllFilter";
import {NumberLiteral} from "@/language/literals/NumberLiteral";
import {ForEachCorner} from "@/language/lists/ForEachCorner";
import {Or} from "@/language/logic/Or";
import {CornerEdgeCountFunction} from "@/language/functions/builtins/CornerEdgeCountFunction";
import {PuzzleRule} from "@/puzzles/PuzzleRule";
import {SlitherlinkRules} from "@/puzzles/instances/slitherlink/SlitherlinkRules";

export class Slitherlink extends Puzzle {

    constructor(instanceConfig: InstanceConfig) {
        super(instanceConfig,
            {
                editTiles: false,
                editEdges: true,
                editCorners: false,
                rules: [
                    new PuzzleRule(SlitherlinkRules.TileValueEqualsEdgeCount, "The number of edges around a tile must equal the number in the tile",
                        new ForEachTile(
                            new TileHasNumericValueFilter(),
                            new Eq(new TileEdgeCountFunction(), new TileValueFunction())
                        ),
                    ),
                    new PuzzleRule(SlitherlinkRules.EdgeCornerCountIsEven, "Each corner must have 0 or 2 connected edges",
                        new ForEachCorner(
                            new AllFilter(),
                            new Or(
                                new Eq(new CornerEdgeCountFunction(), new NumberLiteral(0)),
                                new Eq(new CornerEdgeCountFunction(), new NumberLiteral(2)),
                            ),
                        ),
                    ),
                    new PuzzleRule(SlitherlinkRules.SingleLoop, "The path should be a single loop",
                        new Eq(new NumberLiteral(1), new NumberLiteral(1)),
                        // new Eq(new EdgeGroupCount(), new NumberLiteral(1)),
                    ),
                ]
            }
        );
    }
}
