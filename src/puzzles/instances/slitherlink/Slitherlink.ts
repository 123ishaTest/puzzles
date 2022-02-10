import {Puzzle} from "@/puzzles/Puzzle";
import {InstanceConfig} from "@/puzzles/instances/InstanceConfig";
import {ForEachTile} from "@/language/lists/ForEachTile";
import {Eq} from "@/language/logic/Eq";
import {EdgeCountFunction} from "@/language/functions/builtins/EdgeCountFunction";
import {TileValueFunction} from "@/language/functions/builtins/TileValueFunction";
import {TileHasNumericValueFilter} from "@/language/lists/filters/TileHasNumericValueFilter";

export class Slitherlink extends Puzzle {

    constructor(instanceConfig: InstanceConfig) {
        super(instanceConfig,
            {
                editTiles: false,
                editEdges: true,
                editCorners: false,
            }
        );
        this.setConstraints([
            new ForEachTile(
                new TileHasNumericValueFilter(),
                new Eq(new EdgeCountFunction(), new TileValueFunction())
            )
        ]);
    }
}
