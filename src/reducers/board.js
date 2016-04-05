import boardFactory, {
    
    findMatch, 
    
    markAllMatch,
    
    removeAllMatch,
    
    cascadeBoard, 
    
    refillBoard, 
    
    swapTiles
    
} from "../factories/boardFactory"

let initBoard = {}

const board = (state = initBoard, action) => {
    
    switch (action.type) {
        
    case "CREATE_BOARD":
        
        {
            
            let { boardConfig } = action.payload
            
            let board = boardFactory(boardConfig)
            
            
            return Object.assign({}, state, board)
            
        }
        
    case "PLAYER_CLICK":
        
        {
            
            let {tileId} = action.payload
            
            let activeTiles = [...state.activeTiles]
            
            activeTiles.push(tileId)
            
            if (activeTiles.length === 2 ) {
                
                if (activeTiles[0] === activeTiles[1]) {
                    
                    return Object.assign({}, state, {
                
                        activeTiles : []
                
                    })
                    
                }
    
               let board = swapTiles(state, ...activeTiles)

                board.activeTiles = []

                return board
    
            }
        
            return Object.assign({}, state, {
                
                activeTiles
                
            })
            
        }
    case "PLAYER_MOVE":
        
        {
            
            let {activeTiles} = action.payload
            
            return swapTiles(state, ...activeTiles)
            
        }

    case "DID_SWAP":
        {

            let match = findMatch(state)
            
            let matchCount = Object
                .values(match)
                .reduce((prevCount, curr) => {
                    return prevCount + curr.size
                }, 0)
                
            if (matchCount === 0) {
                
                return Object.assign({}, state, {
                    status: "WAIT_PLAYER_MOVE"
                })
                
            }
            
            return markAllMatch(state, match)

        }
        
    case "DID_MARK":
        {
            
            return removeAllMatch(state)

        }
    case "DID_REMOVE":
        {
            
            let cascadedBoard = cascadeBoard(state)
            
            if (cascadedBoard.status === "WILL_NOT_CASCADE") {
                
                return refillBoard(cascadedBoard)
                
            }
            
            return cascadedBoard
                
        }
    case "DID_CASCADE":
        {
            
            return refillBoard(state)
            
        }
        
    case "DID_REFILL":
        {

            let match = findMatch(state)
            
            let matchCount = Object
                .values(match)
                .reduce((prevCount, curr) => {
                    return prevCount + curr.size
                }, 0)
                
            if (matchCount === 0) {
                
                return Object.assign({}, state, {
                    status: "WAIT_PLAYER_MOVE"
                })
                
            }

            return markAllMatch(state, match)

        }

    default:
    
        return state
        
    }
    
}

export default board