import {Slitherlink} from "@/puzzles/instances/slitherlink/Slitherlink";
import {SlitherlinkRule} from "@/puzzles/instances/slitherlink/SlitherlinkRule";

describe('Slitherlink', () => {
    let slitherLink: Slitherlink;

    beforeEach(() => {
        slitherLink = new Slitherlink({
            width: 3,
            height: 3,
            tileClues: [
                {x: 0, y: 0, value: 3},
                {x: 2, y: 0, value: 1},
                {x: 2, y: 2, value: 3},
                {x: 0, y: 2, value: 1},
            ]
        })
    })

    it('works on a small example', () => {
        // Arrange
        const slitherLink = new Slitherlink({
            width: 2,
            height: 2,
            tileClues: [
                {x: 0, y: 0, value: 2},
                {x: 1, y: 0, value: 3},
                {x: 0, y: 1, value: 3},
            ]
        })
        const topLeft = slitherLink.getTile(0, 0)
        const topRight = slitherLink.getTile(1, 0)
        const bottomLeft = slitherLink.getTile(0, 1)
        const bottomRight = slitherLink.getTile(1, 1)
        // Act
        topLeft.northEdge.toggle()
        topLeft.westEdge.toggle()
        bottomLeft.westEdge.toggle()
        bottomLeft.southEdge.toggle()
        bottomLeft.eastEdge.toggle()
        topRight.southEdge.toggle()
        topRight.eastEdge.toggle()
        topRight.northEdge.toggle()

        const isSolved = slitherLink.isSolved()
        const bottomRightEdgeCount = bottomRight.getNeighbouringEdges().filter(edge => edge.value).length;

        // Assert
        expect(isSolved).toBe(true);
        expect(bottomRightEdgeCount).toBe(2);
    })

    it('exists of a single edge group', () => {
        // Arrange
        slitherLink.getTile(0, 0).northEdge.toggle();
        slitherLink.getTile(0, 0).westEdge.toggle();
        slitherLink.getTile(0, 0).southEdge.toggle();
        slitherLink.getTile(1, 0).southEdge.toggle();
        slitherLink.getTile(1, 0).eastEdge.toggle();
        slitherLink.getTile(1, 0).northEdge.toggle();

        slitherLink.getTile(1, 2).northEdge.toggle();
        slitherLink.getTile(1, 2).westEdge.toggle();
        slitherLink.getTile(1, 2).southEdge.toggle();
        slitherLink.getTile(2, 2).southEdge.toggle();
        slitherLink.getTile(2, 2).eastEdge.toggle();
        slitherLink.getTile(2, 2).northEdge.toggle();

        // Act
        const isSolved = slitherLink.isSolved();

        slitherLink.disableRule(SlitherlinkRule.TileValueEqualsEdgeCount)
        const isSolvedWithoutRule = slitherLink.isSolved();

        // Assert
        expect(isSolved).toBe(false);
        expect(isSolvedWithoutRule).toBe(true);
    })

    it('exists of a single edge group', () => {
        // Arrange
        slitherLink.getTile(0, 0).northEdge.toggle();
        slitherLink.getTile(0, 0).westEdge.toggle();
        slitherLink.getTile(0, 0).southEdge.toggle();
        slitherLink.getTile(1, 0).southEdge.toggle();
        slitherLink.getTile(1, 0).eastEdge.toggle();
        slitherLink.getTile(1, 0).northEdge.toggle();

        slitherLink.getTile(1, 2).northEdge.toggle();
        slitherLink.getTile(1, 2).westEdge.toggle();
        slitherLink.getTile(1, 2).southEdge.toggle();
        slitherLink.getTile(2, 2).southEdge.toggle();
        slitherLink.getTile(2, 2).eastEdge.toggle();
        slitherLink.getTile(2, 2).northEdge.toggle();

        // Act
        const isSolved = slitherLink.isSolved();

        slitherLink.disableRule(SlitherlinkRule.SingleLoop)
        const isSolvedWithoutRule = slitherLink.isSolved();

        // Assert
        expect(isSolved).toBe(false);
        expect(isSolvedWithoutRule).toBe(true);
    })
})
