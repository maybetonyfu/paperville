let initLevels = {
    // 1: {
    //     index: 1,
    //     name: "January",
    //     description: [
    //         "As solid as the ground we stand on",
    //         "(Swipe to move an item. Items are collected when 3 or more items in the same type connect to each other in a collumn/row)",
    //     ],
    //     winMessage: {
    //         title: "Congrats!",
    //         message: "You made it!"
    //     },
    //     lostMessage: {
    //         title: "Darn!",
    //         message: ""
    //     },
    //     boardConfig: {
    //         rows: 5,
    //         cols: 5,
    //         groups: {
    //             0: 1,
    //             1: 1,
    //             2: 1,
    //             3: 1
    //         },
    //         gravity: "DOWN"
    //     },
    //     groupMap: {
    //         0: "seeds",
    //         1: "scythe",
    //         2: "sun",
    //         3: "planting"
    //     },
    //     maxMove: 10,
    //     objectiveAmount: [
    //         {
    //             group: 0,
    //             minimum: 10,
    //         },
    //         {
    //             group: 1,
    //             minimum: 10,
    //         },
    //         {
    //             group: 2,
    //             minimum: 10,
    //         },
    //         {
    //             group: 3,
    //             minimum: 10,
    //         }
    //     ]
    // },
    // 2: {
    //     index: 2,
    //     name: "Feburay",
    //     description: [
    //       "Spring is here",
    //       "(The hourglass on top-left corner indicates how many move you have left. Use them carefully)",
    //     ],
    //     winMessage: {
    //         title: "Congrats!",
    //         message: "You made it!"
    //     },
    //     lostMessage: {
    //         title: "Darn!",
    //         message: ""
    //     },
    //     boardConfig: {
    //         rows: 6,
    //         cols: 6,
    //         groups: {
    //             0: 4,
    //             1: 4,
    //             2: 4,
    //             3: 4,
    //             4: 1,
    //         },
    //         gravity: "DOWN"
    //     },
    //     groupMap: {
    //         0: "sprouts",
    //         1: "scythe",
    //         2: "sun",
    //         3: "productBag",
    //         4: "rain"
    //     },
    //     maxMove: 15,
    //     objectiveAmount: [
    //         {
    //             group: 0,
    //             minimum: 10,
    //       },
    //         {
    //             group: 1,
    //             minimum: 10,
    //       },
    //         {
    //             group: 2,
    //             minimum: 10,
    //       },
    //         {
    //             group: 3,
    //             minimum: 10,
    //       },
    //         {
    //             group: 4,
    //             minimum: 5,
    //       }
    //     ]
    // },
    // 3: {
    //     index: 3,
    //     name: "March",
    //     description: [
    //       "Rain season is coming",
    //       "(Watch out the flood! You will lose if collect 10 or more rains)",
    //   ],
    //     winMessage: {
    //         title: "Well done!",
    //         message: "You made it"
    //     },
    //     lostMessage: {
    //         title: "Darn!",
    //         message: ""
    //     },
    //     boardConfig: {
    //         rows: 6,
    //         cols: 6,
    //         groups: {
    //             0: 3,
    //             1: 2,
    //             2: 2,
    //             3: 2,
    //             4: 2,
    //         },
    //         gravity: "DOWN"
    //     },
    //     groupMap: {
    //         0: "rain",
    //         1: "productBag",
    //         2: "sprouts",
    //         3: "scythe",
    //         4: "sun"
    //     },
    //     maxMove: 20,
    //     objectiveAmount: [
    //         {
    //             group: 0,
    //             maximum: 15,
    //       },
    //         {
    //             group: 1,
    //             minimum: 10,
    //       },
    //         {
    //             group: 2,
    //             minimum: 10,
    //       },
    //         {
    //             group: 3,
    //             minimum: 10,
    //       },
    //         {
    //             group: 4,
    //             minimum: 10
    //       }
    //   ]
    // },
    // 4: {
    //     index: 4,
    //     name: "April",
    //     description: [
    //       "Balance it out",
    //       "(The second number on top of progress bar is minimal amount. The last one is maximal amount. Make sure your final scores are between these two numbers)",
    //   ],
    //     winMessage: {
    //         title: "Well done!",
    //         message: "You made it"
    //     },
    //     lostMessage: {
    //         title: "Darn!",
    //         message: ""
    //     },
    //     boardConfig: {
    //         rows: 6,
    //         cols: 6,
    //         groups: {
    //             0: 1,
    //             1: 1,
    //             2: 1,
    //             3: 1,
    //             4: 1,
    //         },
    //         gravity: "DOWN"
    //     },
    //     groupMap: {
    //         0: "rain",
    //         1: "productBag",
    //         2: "tools",
    //         3: "irrigation",
    //         4: "sun",
    //     },
    //     maxMove: 15,
    //     objectiveAmount: [
    //         {
    //             group: 0,
    //             minimum: 10,
    //             maximum: 15
    //       },
    //         {
    //             group: 1,
    //             minimum: 10,
    //             maximum: 15
    //       },
    //         {
    //             group: 2,
    //             minimum: 10,
    //             maximum: 15
    //       },
    //         {
    //             group: 3,
    //             minimum: 10,
    //             maximum: 15
    //       },
    //         {
    //             group: 4,
    //             minimum: 10,
    //             maximum: 15
    //       }
    //   ]
    // },
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
            
            // console.log(newLevels)
            
            return newLevels
            
        }

    default:

        return state

    }

}

export default levels
