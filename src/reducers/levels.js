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
        winConditions: {
            noLessThan: [
                {
                    group: 0,
                    objective: 10,
                    description: "Collect at least 10 flour"
                },
                {
                    group: 1,
                    objective: 10,
                    description: "Collect at least 10 roller"
                },
                {
                    group: 2,
                    objective: 10,
                    description: "Collect at least 10 milk"
                },
                {
                    group: 3,
                    objective: 10,
                    description: "Collect at least 10 egg"
                }
            ]
        },
        loseTriggers: {},
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
                3: 2
            },
            gravity: "DOWN"
        },
        groupMap: {
            0: "flour",
            1: "roller",
            2: "milk",
            3: "egg"
        },
        maxMove: 10,
        winConditions: {
            noLessThan: [
                {
                    group: 0,
                    objective: 10,
                    description: "Collect at least 3 flour"
                },
                {
                    group: 1,
                    objective: 10,
                    description: "Collect at least 10 roller"
                },
                {
                    group: 2,
                    objective: 10,
                    description: "Collect at least 10 milk"
                },
                {
                    group: 3,
                    objective: 25,
                    description: "Collect at least 10 egg"
                }
            ]
        },
        loseTriggers: {},
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
                0: 2,
                1: 1,
                2: 2,
                3: 2
            },
            gravity: "DOWN"
        },
        groupMap: {
            0: "flour",
            1: "roller",
            2: "milk",
            3: "egg"
        },
        maxMove: 10,
        winConditions: {
            noLessThan: [
                {
                    group: 0,
                    objective: 10,
                    description: "Collect at least 3 flour"
                },
                {
                    group: 1,
                    objective: 5,
                    description: "Collect at least 10 roller"
                },
                {
                    group: 2,
                    objective: 10,
                    description: "Collect at least 10 milk"
                },
                {
                    group: 3,
                    objective: 10,
                    description: "Collect at least 10 egg"
                }
            ]
        },
        loseTriggers: {},
        lastUpdate: 0
    },
    3: {
        id: 3,
        name: "First Quest",
        description: "some description",
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
        groupMap: {
            0: "flour",
            1: "roller",
            2: "milk",
            3: "egg",
            4: "cheese"
        },
        maxMove: 15,
        winConditions: {
            noLessThan: [
                {
                    group: 0,
                    progress: 0,
                    objective: 10,
                    description: "Collect at least 10 flour"
                },
                {
                    group: 1,
                    progress: 0,
                    objective: 10,
                    description: "Collect at least 10 roller"
                },
                {
                    group: 2,
                    progress: 0,
                    objective: 10,
                    description: "Collect at least 10 milk"
                },
                {
                    group: 3,
                    progress: 0,
                    objective: 10,
                    description: "Collect at least 10 egg"
                },
                {
                    group: 4,
                    progress: 0,
                    objective: 10,
                    description: "Collect at least 10 egg"
                }
            ]
        },
        loseTriggers: {},
        lastUpdate: 0
    },
    4: {
        id: 4,
        name: "Intro",
        description: "some description",
        boardConfig: {
            rows: 5,
            cols: 5,
            groups: {
                0: 3,
                1: 1,
                2: 3,
                3: 3
            },
            gravity: "DOWN"
        },
        groupMap: {
            0: "flour",
            1: "roller",
            2: "milk",
            3: "egg"
        },
        maxMove: 10,
        winConditions: {
            noLessThan: [
                {
                    group: 1,
                    objective: 3,
                    description: "Collect at least 10 roller"
                }
            ]
        },
        loseTriggers: {},
        lastUpdate: 0
    },
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