import boardFactory, {
    
    removeInitialMatch,
    
    findMatch, 
    
    markAllMatch,
    
    removeAllMatch,
    
    cascadeBoard, 
    
    refillBoard, 
    
    swapTiles,
    
    panTile
    
} from "../factories/boardFactory"

let initBoard = {}

const board = (state = initBoard, action) => {
    
    switch (action.type) {
        
    case "CREATE_BOARD":
        
        {
            
            let { boardConfig } = action.payload
            
            let board = removeInitialMatch(boardFactory(boardConfig))
            
            
            return Object.assign({}, state, board)
            
        }

    case "PLAYER_PAN":
        
        {
            
            let {tileId, direction} = action.payload
            
            return panTile(state, tileId, direction)
            
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
            
            let matchCount = Object.values(match)
                
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