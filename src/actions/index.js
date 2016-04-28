export const createBoard = (boardConfig, levelIndex) => {
    return {
        type: "CREATE_BOARD",
        payload: {
            boardConfig,
            levelIndex,
        }
    }
}

export const gameStart = () => {
    return {
        type: "GAME_START",
        payload: {}
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

export const playerPan = (tileId, direction) => {
    return {
        type: "PLAYER_PAN",
        payload: {
            tileId,
            direction
        }
    }
}

export const willWin = (levelIndex) => {
    return {
        type: "WILL_WIN",
        payload: {
            levelIndex
        }
    }
}

export const willLose = () => {
    return {
        type: "WILL_LOSE",
        payload: {}
    }
}

export const transitionEnd = (status) => {
    return {
        type: status,
    }
}

export const changeSetting = (key, value) => {
    return {
        type: "CHANGE_SETTING",
        payload: {
            key,
            value
        }
    }
}