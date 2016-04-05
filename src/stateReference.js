let state

const gravity = {
    up: "UP",
    down: "DOWN",
    left: "LEFT",
    right: "RIGHT"
}

const gameProgress = {
    ready: "READY",
    onGoing: "ONGOING",
    canWin: "CAN_WIN",
    winning: "WINNING",
    canLose: "CAN_LOSE",
    losing: "LOSING"
}

const boardProgress = {
    waitUserMove: "WAIT_USER_MOVE",
    canFindMatch: "CAN_FIND_MATCH",
    canRemove: "CAN_REMOVE"
}

state = {
    levels : {
        0: {
            id : 0,
            name: "level name",
            description: "some description",
            boardConfig: {
                rows: 5,
                cols: 5,
                groups: {
                    0: 25,
                    1: 25,
                    2: 25,
                    3: 25
                },
                gravity: gravity.down
            },
            groupMap : [],
            maxMove: 20,
            winConditions:{
            },
            loseTriggers:{
            },
            lastUpdate: 0
        }
    },
    game: {
        currentLevel: 0,
        progress: gameProgress.ready
    },
    board: {
        tiles: {},
        activeTiles: [],
        progress: boardProgress.waitUserMove 
    },
    profile: {
        0: {
            id: 0,
            name: "Tony",
            completedLevels: [],
            unlockedLevels: [0],
            lastUpdate: 0
        }
    },
    measurements: {
        global: {
            
        },
        board: {
            
        },
        progress: {
            
        },
        tile: {
            
        }
    }
}

export default state