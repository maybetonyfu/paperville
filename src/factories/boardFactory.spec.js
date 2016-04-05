import test from "tape"
import _ from "lodash"
import boardFactory from "src/factories/boardFactory"
import {
    findMatch, removeMatch, cascadeBoard, refillBoard
}
from "src/factories/boardFactory"

test("board should set up properties", (assert) => {

    let mockBoardConfig = {
        rows: 4,
        cols: 4,
        groups: {
            0: 1,
            1: 1,
            2: 1,
            3: 1
        },
        gravity: "DOWN"
    }

    let board = boardFactory(mockBoardConfig)

    assert.equal(board.rows, 4)

    assert.equal(board.cols, 4)

    assert.deepEqual(board.groups, {
        0: 1,
        1: 1,
        2: 1,
        3: 1
    })

    assert.equal(board.gravity, "DOWN")

    assert.equal(board.positions.length, 16)

    assert.equal(_.size(board.tiles), 16)

    assert.end()

})


test("match position should be computed", (assert) => {

    let mockBoardConfig = {
        rows: 3,
        cols: 3,
        groups: {
            0: 1,
            1: 1,
            2: 1,
            3: 1
        },
        gravity: "DOWN"
    }

    let board = boardFactory(mockBoardConfig)

    assert.deepEqual(board.matchedPositions, [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8]
        ])

    assert.end()

})

test("findMatch will find matches", (assert) => {

    let board = {}

    board.tiles = {
        0: {
            "id": "0",
            "position": 0,
            "value": 2,
            "willRemove": false,
            "willDrop": false
        },
        1: {
            "id": "1",
            "position": 1,
            "value": 2,
            "willRemove": false,
            "willDrop": false
        },
        2: {
            "id": "2",
            "position": 2,
            "value": 2,
            "willRemove": false,
            "willDrop": false
        },
        3: {
            "id": "3",
            "position": 3,
            "value": 2,
            "willRemove": false,
            "willDrop": false
        },
        4: {
            "id": "4",
            "position": 4,
            "value": 1,
            "willRemove": false,
            "willDrop": false
        },
        5: {
            "id": "5",
            "position": 5,
            "value": 1,
            "willRemove": false,
            "willDrop": false
        },
        6: {
            "id": "6",
            "position": 6,
            "value": 2,
            "willRemove": false,
            "willDrop": false
        },
        7: {
            "id": "7",
            "position": 7,
            "value": 0,
            "willRemove": false,
            "willDrop": false
        },
        8: {
            "id": "8",
            "position": 8,
            "value": 0,
            "willRemove": false,
            "willDrop": false
        }
    }

    board.matchedPositions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ]

    let match = findMatch(board)

    assert.equal(match[2].has("0"), true)
    assert.equal(match[2].has("1"), true)
    assert.equal(match[2].has("2"), true)
    assert.equal(match[2].has("3"), true)
    assert.equal(match[2].has("6"), true)
    assert.end()

})

test("deleteMatch will delete matches", (assert) => {

    let board = {}

    board.tiles = {
        0: {
            "id": "0",
            "position": 0,
            "value": 2,
            "willRemove": false,
            "willDrop": false
        },
        1: {
            "id": "1",
            "position": 1,
            "value": 2,
            "willRemove": false,
            "willDrop": false
        },
        2: {
            "id": "2",
            "position": 2,
            "value": 2,
            "willRemove": false,
            "willDrop": false
        },
        3: {
            "id": "3",
            "position": 3,
            "value": 2,
            "willRemove": false,
            "willDrop": false
        },
        4: {
            "id": "4",
            "position": 4,
            "value": 1,
            "willRemove": false,
            "willDrop": false
        },
        5: {
            "id": "5",
            "position": 5,
            "value": 1,
            "willRemove": false,
            "willDrop": false
        },
        6: {
            "id": "6",
            "position": 6,
            "value": 2,
            "willRemove": false,
            "willDrop": false
        },
        7: {
            "id": "7",
            "position": 7,
            "value": 0,
            "willRemove": false,
            "willDrop": false
        },
        8: {
            "id": "8",
            "position": 8,
            "value": 0,
            "willRemove": false,
            "willDrop": false
        }
    }

    let match = {
        0: new Set([7, 8]),
        2: new Set([0, 1])
    }

    let remainingTiles = removeMatch(board.tiles, match)

    assert.equal(remainingTiles[0]["removed"], true)
    assert.equal(remainingTiles[1]["removed"], true)
    assert.equal(remainingTiles[7]["removed"], true)
    assert.equal(remainingTiles[8]["removed"], true)
    assert.end()

})


test("cascadeBoard should properly cascade board", (assert) => {

    let board = {}

    board.tiles = {
        0: {
            "id": "0",
            "position": 0,
            "value": 2,
            "removed": false
        },
        1: {
            "id": "1",
            "position": 1,
            "value": 2,
            "removed": false
        },
        2: {
            "id": "2",
            "position": 2,
            "value": 2,
            "removed": false
        },
        3: {
            "id": "3",
            "position": 3,
            "value": 2,
            "removed": true
        },
        4: {
            "id": "4",
            "position": 4,
            "value": 1,
            "removed": true
        },
        5: {
            "id": "5",
            "position": 5,
            "value": 1,
            "removed": true
        },
        6: {
            "id": "6",
            "position": 6,
            "value": 2,
            "removed": true
        },
        7: {
            "id": "7",
            "position": 7,
            "value": 0,
            "removed": true
        },
        8: {
            "id": "8",
            "position": 8,
            "value": 0,
            "removed": true
        }
    }

    board.rows = 3

    board.cols = 3

    board.gravity = "DOWN"

    let newBoard = cascadeBoard(board)

    assert.equal(newBoard.tiles[0]["position"], 6)
    assert.equal(newBoard.tiles[1]["position"], 7)
    assert.equal(newBoard.tiles[2]["position"], 8)

    assert.end()

})

test("refillBoard should refill board", (assert) => {

    let board = {}

    board.tiles = {
        0: {
            "id": "0",
            "position": 0,
            "value": null,
            "removed": true
        },
        1: {
            "id": "1",
            "position": 1,
            "value": null,
            "removed": true
        },
        2: {
            "id": "2",
            "position": 2,
            "value": null,
            "removed": true
        },
        3: {
            "id": "3",
            "position": 3,
            "value": 2,
            "removed": false
        },
        4: {
            "id": "4",
            "position": 4,
            "value": 1,
            "removed": false
        },
        5: {
            "id": "5",
            "position": 5,
            "value": 1,
            "removed": false
        },
        6: {
            "id": "6",
            "position": 6,
            "value": 2,
            "removed": false
        },
        7: {
            "id": "7",
            "position": 7,
            "value": 0,
            "removed": false
        },
        8: {
            "id": "8",
            "position": 8,
            "value": 0,
            "removed": false
        }
    }

    board.groupPool = [0, 0, 0, 1, 1, 1, 2, 2, 2]
    
    let newBoard = refillBoard(board)

    assert.notEqual(newBoard.tiles[0]["value"], null)
    assert.notEqual(newBoard.tiles[1]["value"], null)
    assert.notEqual(newBoard.tiles[2]["value"], null)

    assert.end()

})