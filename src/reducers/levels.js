let initLevels = {
    0: {
        id: 0,
        name: "Intro",
        description: "some description",
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
        groupMap: {
            0: "flour",
            1: "roller",
            2: "milk",
            3: "egg"
        },
        maxMove: 15,
        objectiveAmount: [
            {
                group: 0,
                minimum: 10,
                description: "Collect at least 10 flour"
            },
            {
                group: 1,
                minimum: 10,
                description: "Collect at least 10 roller"
            },
            {
                group: 2,
                minimum: 10,
                description: "Collect at least 10 milk"
            },
            {
                group: 3,
                minimum: 10,
                description: "Collect at least 10 egg"
            }
        ],
        lastUpdate: 0
    },
    1: {
        id: 1,
        name: "Intro",
        description: "some description",
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
        groupMap: {
            0: "flour",
            1: "roller",
            2: "milk",
            3: "egg"
        },
        maxMove: 15,
        objectiveAmount: [
            {
                group: 0,
                minimum: 10,
                description: "Collect at least 10 flour"
            },
            {
                group: 1,
                minimum: 10,
                description: "Collect at least 10 roller"
            },
            {
                group: 2,
                maximum: 10,
                description: "Collect at least 10 milk"
            },
            {
                group: 3,
                maximum: 10,
                description: "Collect at least 10 egg"
            }
        ],
        lastUpdate: 0
    },
    2: {
        id: 2,
        name: "Intro",
        description: "some description",
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
        groupMap: {
            0: "flour",
            1: "roller",
            2: "milk",
            3: "egg"
        },
        maxMove: 15,
        objectiveAmount: [
            {
                group: 0,
                minimum: 10,
                maximum: 15,
                description: "Collect at least 10 flour"
            },
            {
                group: 1,
                minimum: 10,
                maximum: 15,
                description: "Collect at least 10 roller"
            },
            {
                group: 2,
                minimum: 10,
                maximum: 15,
                description: "Collect at least 10 milk"
            },
            {
                group: 3,
                minimum: 10,
                maximum: 15,
                description: "Collect at least 10 egg"
            }
        ],
        lastUpdate: 0
    }
}

const levels = (state = initLevels, action) => {
    switch (action.type) {
    case "SOME_ACTION":
        return state
    default:
        return state
    }
}

export default levels