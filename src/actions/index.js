export const createBoard = (boardConfig, levelId) => {
    return {
        type: "CREATE_BOARD",
        payload: {
            boardConfig: boardConfig,
            levelId: levelId
        }
    }
}

export const gameInit = (measure) => {
    return {
        type: "GAME_INIT",
        payload: {
            appHeight: measure.appHeight,
            appWidth: measure.appWidth
        }
    }
}

export const playerClick = (tileId) => {
    return {
        type: "PLAYER_CLICK",
        payload: {
            tileId
        }
    }
}

export const playerMove = (activeTiles) => {
    return {
        type: "PLAYER_MOVE",
        payload: {
            activeTiles
        }
    }
}

export const willWin = () => {
    return {
        type: "WILL_WIN",
        payload: {}
    }
}

export const willLose = () => {
    return {
        type: "WILL_LOSE",
        payload: {}
    }
}

// export const transitionEnd = (tileId, boardStatus) => {
//     return {
//         type: "TRANSITION_END",
//         payload: {
//             tileId,
//             boardStatus
//         }
//     }
// }

export const transitionEnd = (status) => {
    return {
        type: status,
    }
}


export const addActiveTile = () => {
    return {
        type: "ADD_ACTIVE_TILE",
        payload: {}
    }
}

export const updateBoardProgress = () => {
    return {
        type: "UPDATE_BOARD_PROGRESS",
        payload: {}
    }
}