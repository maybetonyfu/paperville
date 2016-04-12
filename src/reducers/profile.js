let initProfile = {
    id: 0,
    name: "Tony",
    completedLevels: [],
    unlockedLevels: [0],
    setting: {
        developer: false
    }
}

const profile = (state = initProfile, action) => {
    switch (action.type) {
        
    case "CHANGE_SETTING":
        
        {
            let { key, value } = action.payload
            
            let profile = Object.assign({}, state)
            
            profile.setting[key] = value
            
            return profile
        }
        
    case "GAME_START":
        
        {
            
        }
        
    case "WILL_WIN":
        {

        }
        
    case "WILL_LOSE":
        {
            
        }

    default:
    
        return state

    }
    
}

export default profile