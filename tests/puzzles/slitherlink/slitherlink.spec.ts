import {Slitherlink} from "@/puzzles/instances/slitherlink/Slitherlink";
import {Tile} from "@/puzzles/Tile";

describe('Slitherlink', () => {
    let slitherLink: Slitherlink;

    let topLeft: Tile;
    let topRight: Tile;
    let bottomLeft: Tile;
    let bottomRight: Tile;

    beforeEach(() => {
        slitherLink = new Slitherlink({
            width: 2,
            height: 2,
            tileClues: [
                {x: 0, y: 0, value: 2},
                {x: 1, y: 0, value: 3},
                {x: 0, y: 1, value: 3},
            ]
        })
        topLeft = slitherLink.getTile(0, 0)
        topRight = slitherLink.getTile(1, 0)
        bottomLeft = slitherLink.getTile(0, 1)
        bottomRight = slitherLink.getTile(1, 1)

    })
    it('works on a small example', () => {
        // Arrange

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
})
