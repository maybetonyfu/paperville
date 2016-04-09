let initGame = {
    currentLevel: 0,
    status: ""
}

const game = (state = initGame, action) => {
    switch (action.type) {
        
    case "CREATE_BOARD":
        
        {
            
            let { levelId } = action.payload
            
            return Object.assign({}, state, {
                currentLevel: levelId,
                status: "INIT"
            })
            
        }

    case "WILL_WIN":
        {

            return Object.assign({}, state, {
                status: "WIN"
            })
            
        }
        
    case "WILL_LOSE":
        {
            
            return Object.assign({}, state, {
                status: "LOSE"
            })
            
        }

    default:
        return state
    }
}

export default game