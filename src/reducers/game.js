let initGame = {
    currentLevel: 0,
    status: "",
    menuModalOpen: false
}

const game = (state = initGame, action) => {
    
    switch (action.type) {
        
    case "CREATE_BOARD":
        
        {

            let { levelIndex } = action.payload
            
            return Object.assign({}, state, {
                currentLevel: levelIndex,
                status: "INIT",
                menuModalOpen: false
            })

        }
        
    case "GAME_START":
        
        {

            return Object.assign({}, state, {
                status: "START"
            })
            
        }
        
    case "WILL_WIN":
        {

            return Object.assign({}, state, {
                status: "WIN",
                menuModalOpen: false
            })

        }
        
    case "WILL_LOSE":
        {

            return Object.assign({}, state, {
                status: "LOSE",
                menuModalOpen: false
            })

        }

    case "SHOW_MENU":
        {

            return Object.assign({}, state, {
                menuModalOpen: true
            })

        }

    case "HIDE_MENU":
        {
            
            return Object.assign({}, state, {
                menuModalOpen: false
            })
            
        }

    default:

        return state
    }
}

export default game