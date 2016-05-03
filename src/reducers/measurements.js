let initMeasurements = {
    
        global: {

        },
        
        board: {
            
        },
        
        progress: {
            
        },
        
        tile: {
            
        }
        
    }

const measurements = (state = initMeasurements, action) => {
    
    switch (action.type) {
        
    case "GAME_INIT":
        
        let { appHeight, appWidth } = action.payload
        
        let boardMargin = 5
        
        let tileShift = 5
        
        let borderWidth = 2
        
        let progressPadding = 5
        
        return Object.assign({}, state, {
            
            global: {
                
                appHeight: appHeight,
                
                appWidth: appWidth,
                
            },
            
            progress: {
                
                progressWidth: appWidth - (2 * progressPadding),
                
                progressPadding : progressPadding,
                
            },
            
            board: {
                
                boardMargin : boardMargin,
                
                boardWidth: appWidth - 2 * boardMargin,
                
                borderWidth : borderWidth
                
            },
            
            tile : {
                
                tileShift: tileShift,
                
            }
            
        })
        
    case "CREATE_BOARD":
        {
        
            let { boardConfig } = action.payload
            
            let boardWidth = state.board.boardWidth
            
            let boardMargin = state.board.boardMargin
            
            let borderWidth = state.board.borderWidth
            
            let tileShift = state.tile.tileShift
            
            let progressPadding = state.progress.progressPadding
    
            let tileSize =  ( (boardWidth - 2 * (tileShift + borderWidth)) / boardConfig.cols )
            
            let nextState = Object.assign({}, state)
            
            nextState.tile.tileWidth = tileSize
            
            nextState.tile.tileHeight = tileSize
            
            nextState.board.boardHeight = ( tileSize * boardConfig.rows ) +  2 * (tileShift + borderWidth)
            
            nextState.progress.progressHeight = state.global.appHeight - (( tileSize * boardConfig.rows ) 
                + 2 * (tileShift + borderWidth + boardMargin)) - (2 * progressPadding)
            
            return nextState
        
        }

    default:
    
        return state
        
    }
    
}

export default measurements