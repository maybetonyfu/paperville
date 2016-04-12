let initLevels = {
    1: {
        id: 1,
        name: "Where everything starts",
        description: [
            "Kelly and Adam are the owners of Paper Bakery. You've heard that they are looking for a new baker, and this seems to be a perfect job for you",
            "Make a cupcake to prove you are a competent baker",
            "Recipe: ",
            "flour X 10",
            "sugar X 10",
            "milk  X 10",
            "egg   X 10",
            "(Tap two adjasent items to swap their positions, items are collected when 3 or more items in the same type connect to each other in a collumn/row)",
        ],
        winMessage: {
            title: "Congrats!",
            symbol: "cupcake",
            message: "You made a lovely cupcake"
        },
        lostMessage: {
            title: "Darn!",
            message: ""
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
        groupMap: {
            0: "flour",
            1: "sugar",
            2: "milk",
            3: "egg"
        },
        maxMove: 10,
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
        ]
    },
    2: {
        id: 2,
        name: "First order",
        description: [
            "Welcome on board! ",
            "Mr Thompkinson likes to have his croisant 7:00 am every morning. Better prepare a new batch he comes",
            "Recipe: ",
            "flour  X 10",
            "sugar  X 10",
            "milk   X 10",
            "egg    X 10",
            "salt   X 5",
            "(The hourglass on top-left corner indicates how many move you have left. Use them carefully)",
        ],
        winMessage: {
            title: "Good job!",
            symbol: "croisant",
            message: "You made a lovely croisant"
        },
        lostMessage: {
            title: "Darn!",
            message: ""
        },
        boardConfig: {
            rows: 6,
            cols: 6,
            groups: {
                0: 2,
                1: 2,
                2: 2,
                3: 2,
                4: 1,
            },
            gravity: "DOWN"
        },
        groupMap: {
            0: "flour",
            1: "sugar",
            2: "milk",
            3: "egg",
            4: "salt"
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
            },
            {
                group: 4,
                minimum: 5,
                description: "Collect at least 5 salt"
            }
        ]
    },
    3: {
        id: 3,
        name: "Easy as pie",
        description: [
            "Nice work! I hope you make good pie though, cause I can really have some now",
            "Make an mushroom pie",
            "Recipe: ",
            "flour  X 10",
            "butter X 10",
            "egg    X 10",
            "mushroom  X 3",
            "* sugar  < 10",
            "(Don't put too much sugar. You will lose if collect 11 or more sugar)",
        ],
        winMessage: {
            title: "Well done!",
            symbol: "pie",
            message: "Best pie ever!"
        },
        lostMessage: {
            title: "Darn!",
            message: ""
        },
        boardConfig: {
            rows: 6,
            cols: 6,
            groups: {
                0: 2,
                1: 2,
                2: 2,
                3: 2,
                4: 1,
            },
            gravity: "DOWN"
        },
        groupMap: {
            0: "sugar",
            1: "flour",
            2: "butter",
            3: "egg",
            4: "mushroom"
        },
        maxMove: 15,
        objectiveAmount: [
            {
                group: 0,
                maximum: 11,
                description: "Collect at most 11 sugar"
            },
            {
                group: 1,
                minimum: 10,
                description: "Collect at least 10 flour"
            },
            {
                group: 2,
                minimum: 10,
                description: "Collect at least 10 butter"
            },
            {
                group: 3,
                minimum: 10,
                description: "Collect at least 10 egg"
            },
            {
                group: 4,
                minimum: 5,
                description: "Collect at least 5 mushroom"
            }
        ]
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