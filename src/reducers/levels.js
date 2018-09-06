let initLevels = {
    1: {
        index: 1,
        name: "Level 1",
        description: [
            "As solid as the ground we stand on",
            "Collect 10 of each tile to win the game",
        ],
        winMessage: {
            title: "Congrats!",
            message: "You made it!"
        },
        lostMessage: {
            title: "Darn!",
            message: "Almost got it!"
        },
        boardConfig: {
            rows: 5,
            cols: 5,
            groups: {
                0: 1,
                1: 1,
                2: 1,
                3: 1
            },
            gravity: "DOWN"
        },
        groupMap: [
            {
                name: "coin"
            },
            {
                name: "crown"
            },
            {
                name: "cube"
            },
            {
                name: "diamond"
            }
        ],
        maxMove: 10,
        objectiveAmount: [
            {
                group: 0,
                minimum: 20,
            },
            {
                group: 1,
                minimum: 10,
            },
            {
                group: 2,
                minimum: 10,
            },
            {
                group: 3,
                minimum: 10,
            }
        ]
    },
    2: {
        index: 2,
        name: "Level 2",
        description: [
            "As solid as the ground we stand on",
            "Collect 10 of each tile to win the game",
        ],
        winMessage: {
            title: "Congrats!",
            message: "You made it!"
        },
        lostMessage: {
            title: "Darn!",
            message: "Almost got it!"
        },
        boardConfig: {
            rows: 6,
            cols: 6,
            groups: {
                0: 1,
                1: 1,
                2: 1,
                3: 1,
                4: 1
            },
            gravity: "DOWN"
        },
        groupMap: [
            {
                name: "coin"
            },
            {
                name: "crown"
            },
            {
                name: "cube"
            },
            {
                name: "diamond"
            },
            {
                name: "bolt"
            }
        ],
        maxMove: 15,
        objectiveAmount: [
            {
                group: 0,
                minimum: 10,
            },
            {
                group: 1,
                minimum: 10,
            },
            {
                group: 2,
                minimum: 10,
            },
            {
                group: 3,
                minimum: 10,
            },
            {
                group: 4,
                minimum: 10,
            }
        ]
    },
    3: {
        index: 3,
        name: "Level 3",
        description: [
            "As solid as the ground we stand on",
            "Collect 10 of each tile to win the game",
        ],
        winMessage: {
            title: "Congrats!",
            message: "You made it!"
        },
        lostMessage: {
            title: "Darn!",
            message: "Almost got it!"
        },
        boardConfig: {
            rows: 6,
            cols: 6,
            groups: {
                0: 1,
                1: 1,
                2: 1,
                3: 1,
                4: 1
            },
            gravity: "DOWN"
        },
        groupMap: [
            {
                name: "coin"
            },
            {
                name: "crown"
            },
            {
                name: "cube"
            },
            {
                name: "diamond"
            },
            {
                name: "bolt"
            }
        ],
        maxMove: 15,
        objectiveAmount: [
            {
                group: 0,
                minimum: 10,
            },
            {
                group: 1,
                minimum: 10,
            },
            {
                group: 2,
                minimum: 10,
            },
            {
                group: 3,
                minimum: 10,
            },
            {
                group: 4,
                minimum: 10,
            }
        ]
    },
    4: {
        index: 4,
        name: "Level 4",
        description: [
            "As solid as the ground we stand on",
            "Collect 10 of each tile to win the game",
        ],
       winMessage: {
            title: "Congrats!",
            message: "You made it!"
        },
        lostMessage: {
            title: "Darn!",
            message: "Almost got it!"
        },
        boardConfig: {
            rows: 6,
            cols: 6,
            groups: {
                0: 1,
                1: 1,
                2: 1,
                3: 1,
                4: 1
            },
            gravity: "DOWN"
        },
        groupMap: [
            {
                name: "coin"
            },
            {
                name: "crown"
            },
            {
                name: "cube"
            },
            {
                name: "diamond"
            },
            {
                name: "bolt"
            }
        ],
        maxMove: 15,
        objectiveAmount: [
            {
                group: 0,
                minimum: 10,
            },
            {
                group: 1,
                minimum: 10,
            },
            {
                group: 2,
                minimum: 10,
            },
            {
                group: 3,
                minimum: 10,
            },
            {
                group: 4,
                minimum: 10,
            }
        ]
    },
}

const levels = (state = initLevels, action) => {

    switch (action.type) {

    case "REQUEST_LEVELS":
        
        {
            
            return state
            
        }

    case "RECEIVE_LEVELS":
        
        {
            
            let { rawLevels } = action.payload
            
            let newLevels = {}
            
            rawLevels.forEach(level => {
                newLevels[level.index] = level
            })
            
            return newLevels
            
        }

    default:

        return state

    }

}

export default levels
