/** @module BoardFactory and related operators */

// import _ from "lodash"
import uniqueId from "lodash/uniqueId"
import range from "lodash/range"
import random from "lodash/random"

/**
 * Create a board object from boardConfig
 * @function BoardFactory
 * @param {Object} .
 * @returns {Object}
 */
let BoardFactory = (boardConfig) => {
    /*
        boardConfig: {
            rows: number,
            cols: number,
            groups: {
                0: number,
                1: number,
                2: number,
                3: number,
                ...
            },
            gravity : "UP" | "DOWN" default | "LEFT" | "RIGHT"
        }
    */
    const {
        rows, cols, groups, gravity
    } = boardConfig //config destructor



    /*
        used lodash range to mimic python range()
        another way would be [...Array(num).keys()] but more confusing
    */
    const rowIndice = range(rows) // rows=4 rowIndice=[0,1,2,3]
    const colIndice = range(cols) // rows=2 rowIndice=[0,1]


    /*
        Create all the possible positions in a given board config
        e.g. [[0, 0], [0, 1], [1, 0], [1, 1]] in a 2 by 2 board
    */
    const positions = rowIndice
        .reduce((prevRowPositions, row) => [...prevRowPositions, ...colIndice.map(col => [row, col])], [])

    /*
    A collection of all possible matched positions in a given board
    [[0,1,2], [1,2,3], [2,3,4],...]
    */
    const matchedPositions = []


    //push row matches into position list
    rowIndice.forEach(row => {
        let term = row * cols
        colIndice.forEach(col => {
            if (col > cols - 3) return
            matchedPositions.push([
                col + term,
                col + 1 + term,
                col + 2 + term
            ])
        })
    })

    //push col matches into position list
    colIndice.forEach(col => {
        rowIndice.forEach(row => {
            if (row > rows - 3) return
            matchedPositions.push([
                row * cols + col,
                (row + 1) * cols + col,
                (row + 2) * cols + col
            ])
        })
    })

    /*
        Generate propability 
        groups = {
            0: 2,
            1: 5,
            3, 1
        }
        will generate [0, 0, 1, 1, 1, 1, 1, 3]
    */
    const groupPool = Object
        .keys(groups)
        .reduce((prevPool, group) => [...prevPool, ...Array(groups[group]).fill(+group)], [])
        
    
    const status = "WAIT_PLAYER_MOVE"
    
    let progress = {}
    
    Object.keys(groups).forEach(key => {
        progress[key] = 0
    })
    
    const activeTiles = []
    
    const positionToTile = new Map()
    
    const playerMove = 0

    let board = {
        rows,
        cols,
        groups,
        gravity,
        positions,
        activeTiles,
        status,
        playerMove,
        progress,
        matchedPositions,
        groupPool,
        tiles: {},
        positionToTile,
    }

    /*
        board.tiles = {
            29837: {
                id: 29837,
                positionX: 2,
                positionY: 4,
                value: 3,
                willRemove: false,
                willDrop: false
                ...
            },
            ...
        }
    */
    positions.forEach((position, index) => {
        //generate random tile id
        let id = uniqueId()

        //generate random index in propability pool
        let valueIndex = random(groupPool.length - 1)

        let value = groupPool[valueIndex]

        board.tiles[id] = {
            
            id: id,
            
            position: index,
            
            value: value,
            
            willMark: false,

            removed: false,

        }
        
        board.positionToTile.set(index, id)

    })
    
    return board

}

let removeInitialMatch = (board) => {
    
    let boardClone = Object.assign({}, board)
    
    let match = new Set()

    boardClone.matchedPositions.forEach(position => {

        let match1 = boardClone.positionToTile.get(position[0])
        
        let match2 = boardClone.positionToTile.get(position[1])
        
        let match3 = boardClone.positionToTile.get(position[2])

        if ((boardClone.tiles[match1].value === boardClone.tiles[match2].value) 
        
            && (boardClone.tiles[match2].value === boardClone.tiles[match3].value)) {

            match.add(match1)
            
            match.add(match2)
            
            match.add(match3)

        }

    })

    
    if (match.size === 0) return boardClone
    
    match.forEach(id => {
            
        let valueIndex = random(boardClone.groupPool.length - 1)

        let value = boardClone.groupPool[valueIndex]

        boardClone.tiles[id]["value"] = value

    })

    return removeInitialMatch(boardClone)

}

let swapTiles = (board, tileIdA, tileIdB) => {
    
    let boardClone = Object.assign({}, board)
    
    let { tiles } = boardClone
    
    let positionA = tiles[tileIdA].position
    
    let positionB = tiles[tileIdB].position
    
    tiles[tileIdA].position = positionB
    
    tiles[tileIdB].position = positionA
    
    boardClone.dispatchAwait = 2
    
    boardClone.playerMove ++
    
    boardClone.status = "DID_SWAP"

    return boardClone

}

let panTile = (board, tileId, direction) => {
    
    let boardClone = Object.assign({}, board)
    
    let {cols, tiles, positions, positionToTile} = boardClone
    
    let originTile = tiles[tileId]
    
    let originPosition = originTile.position
    
    let destPosition
    
    switch (direction) {
        
        case 'panup':
            {
                destPosition = originPosition - cols
                
                let outOfBoard = destPosition < 0 || destPosition >= positions.length
                
                if (outOfBoard) {
                    
                    return boardClone
                }

            }

            break
            
        case 'pandown':
            {
                destPosition = originPosition + cols

                let outOfBoard = destPosition < 0 || destPosition >= positions.length
                
                if (outOfBoard) {
                    
                    return boardClone
                }
            }

            break
            
        case 'panleft':
            {
                destPosition = originPosition - 1
                
                let exceedRow = (
                    
                    Math.floor(originPosition/cols) !== Math.floor(destPosition/cols)
                    
                )
                
                let outOfBoard = destPosition < 0 || destPosition >= positions.length
                
                if (exceedRow || outOfBoard) {
                    
                    return boardClone
                }
                
            }

            break

        case 'panright':
            {
                destPosition = originPosition + 1

                let exceedRow = (
                    
                    Math.floor(originPosition/cols) !== Math.floor(destPosition/cols)
                    
                )
                
                let outOfBoard = destPosition < 0 || destPosition >= positions.length
                
                if (exceedRow || outOfBoard) {
                    
                    return boardClone
                }
                
            }

            break

        default:
            
            return boardClone
            
    }
    
    let destTile = tiles[positionToTile.get(destPosition)]
    
    originTile.position = destPosition
    
    destTile.position = originPosition
    
    positionToTile.set(originTile.position, originTile.id)
    
    positionToTile.set(destTile.position, destTile.id)
    
    boardClone.dispatchAwait = 2
    
    boardClone.playerMove ++
    
    boardClone.status = "DID_SWAP"

    return boardClone

}

let findMatch = (board) => {

    let match = {}

    board.matchedPositions.forEach(position => {

        let match1 = board.positionToTile.get(position[0])
        
        let match2 = board.positionToTile.get(position[1])
        
        let match3 = board.positionToTile.get(position[2])

        if ((board.tiles[match1].value === board.tiles[match2].value) && 
            (board.tiles[match2].value === board.tiles[match3].value)) {
            
            let value = board.tiles[match1].value
            
            if (!match[value]) {
                
                match[value] = new Set()
                
            }
            
            match[value].add(match1)
            
            match[value].add(match2)
            
            match[value].add(match3)

        }

    })

    return match

}

let markAllMatch = (board, match) => {

    let boardClone = Object.assign({}, board)

    Object.keys(match).forEach(key => {

        match[key].forEach(id => {

            boardClone.tiles[id]["willMark"] = true

        })
        
        boardClone.progress[key] += match[key].size

    })
    
    boardClone.match = match
    
    boardClone.matchCount = Object.values(match)
        .reduce((prevSize, cur) => { return prevSize + cur.size }, 0)
        
    boardClone.dispatchAwait = boardClone.matchCount
    
    boardClone.status = "DID_MARK"

    return boardClone

}

let removeAllMatch = (board) => {

    let boardClone = Object.assign({}, board)

    Object.keys(boardClone.match).forEach(key => {

        boardClone.match[key].forEach(id => {

            boardClone.tiles[id]["willMark"] = false
            
            boardClone.tiles[id]["removed"] = true

        })
        
        // boardClone.progress[key] += boardClone.match[key].size

    })

    boardClone.dispatchAwait = boardClone.matchCount
    
    boardClone.status = "DID_REMOVE"

    return boardClone

}

let cascadeBoard = (board) => {

    let boardClone = Object.assign({}, board)

    let {
        cols, gravity, tiles, positionToTile
    } = boardClone
    
    
    let movingTiles = new Set()
    
    switch (gravity) {

    case "DOWN":

    default:
        /*
        The default gravity (DOWN) which will be handled in the default block
        */
        
        
        Object.values(boardClone.match)
            
            .reduce((flat, cur) => { return [...flat, ...cur] }, [])
            
            .map(id => boardClone.tiles[id])
            
            .sort((a, b) => (+ a.position) - (+ b.position))
            
            .forEach((tile) => {

                let upTilePosition = tile.position - cols
    
                while (upTilePosition >= 0) {
                        
                    let upTileId = positionToTile.get(upTilePosition)
                    
                    if (!upTileId) break
                    
                    let upTile = tiles[upTileId]
    
                    if (upTile.removed) break
    
                    tiles[tile.id]["position"] -= cols
    
                    tiles[upTile.id]["position"] += cols
                    
                    positionToTile.set(tiles[tile.id]["position"], tile.id)
                    
                    positionToTile.set(tiles[upTile.id]["position"], upTile.id)
                    
                    movingTiles.add(upTile.id)
                    
                    movingTiles.add(tile.id)
    
                    upTilePosition -= cols
    
                }

        })

    }
    
    boardClone.status = movingTiles.size === 0 ? "WILL_NOT_CASCADE":"DID_CASCADE"
    
    boardClone.dispatchAwait = movingTiles.size

    return boardClone

}

let refillBoard = (board) => {

    let boardClone = Object.assign({}, board)

    let {
        
        groupPool
        
    } = boardClone
    
    boardClone.status = "DID_REFILL"
    
    boardClone.dispatchAwait = boardClone.matchCount
    
    Object.values(boardClone.match).forEach(match => {

        match.forEach(id => {
            
            let valueIndex = random(groupPool.length - 1)

            let value = groupPool[valueIndex]

            boardClone.tiles[id]["value"] = value
            
            boardClone.tiles[id]["removed"] = false

        })

    })

     return boardClone

}

export default BoardFactory

export {
    
    removeInitialMatch,
    
    findMatch, 
    
    markAllMatch,
    
    removeAllMatch,
    
    cascadeBoard, 
    
    refillBoard, 
    
    swapTiles,
    
    panTile
    
}