let initLevels = {
    1: {
        id: 1,
        name: "Make a Cupcake",
        description: [
            "Kelly and Adam are the owners of Paper Bakery. You've heard that they are looking for a new baker, and this seems to be a perfect job for you",
            "Make a cupcake to prove you are a competent baker",
            "Recipe: ",
            "flour X 10",
            "sugar X 10",
            "milk X 10",
            "egg X 10",
            "(Tap two adjasent items to swap their positions, items will be collected when 3 or more same items connect to each other in a collumn or row)",
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