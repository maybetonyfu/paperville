import boardFactory, {
    
    removeInitialMatch,
    
    findMatchAndMark,
    
    removeAllMatch,
    
    cascadeBoard, 
    
    refillBoard, 
    
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

            return findMatchAndMark(state)

        }
        
    case "DID_MARK":
        {
            
            return removeAllMatch(state)

        }
        
    case "DID_UNMARK":
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

            return findMatchAndMark(state)

        }

    default:
    
        return state
        
    }
    
}

export default board