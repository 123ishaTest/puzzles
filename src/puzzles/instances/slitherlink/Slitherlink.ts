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

export class Slitherlink extends Puzzle {

    constructor(instanceConfig: InstanceConfig) {
        super(instanceConfig,
            {
                editTiles: false,
                editEdges: true,
                editCorners: false,
                constraints: [
                    new ForEachTile(
                        new TileHasNumericValueFilter(),
                        new Eq(new TileEdgeCountFunction(), new TileValueFunction())
                    ),
                    new ForEachCorner(
                        new AllFilter(),
                        new Or(
                            new Eq(new CornerEdgeCountFunction(), new NumberLiteral(0)),
                            new Eq(new CornerEdgeCountFunction(), new NumberLiteral(2)),
                        ),
                    ),
                    // new Eq(new EdgeGroupCount(), new NumberLiteral(2)),
                ]
            }
        );
    }
}
