let initMeasurements = {
        global: {

        },
        board: {
            
        },
        progress: {
            
        },
        tile: {
            tileMargin: 5,
            tileBleeding: 10
        }
    }

const measurements = (state = initMeasurements, action) => {
    switch (action.type) {
    case "GAME_INIT":
        let { appHeight, appWidth } = action.payload
        return Object.assign({}, state, {
            global: {
                appHeight: appHeight,
                appWidth: appWidth,
                navHeight: appHeight * 0.06,
                activeWidth: appWidth,
                activeHeight: appHeight * 0.94
            },
            progress: {
                progressWidth: appWidth - 10,
                progressHeight: appHeight * 0.94 - appWidth - 10,
                
                progressPadding : 5,
                progressBleeding : 10, 
                // boxWidth : (appWidth - 10 )/4 - 24,
                // boxMargin: 5,
                // rowHeight: (appHeight * 0.9 - appWidth - 10) / 10,
                
            },
            board: {
                boardWidth: appWidth,
                boardHeight: appWidth
            }
        })
    case "CREATE_BOARD":
        let { boardConfig } = action.payload
        let tileWidth =  ( state.board.boardWidth / boardConfig.cols ) - state.tile.tileBleeding
        let tileHeight = ( state.board.boardHeight / boardConfig.rows ) - state.tile.tileBleeding
        
        let nextState = Object.assign({}, state)
        
        nextState.tile.tileWidth = tileWidth
        nextState.tile.tileHeight = tileHeight
        
        
        return nextState

    default:
        return state
    }
}

export default measurements