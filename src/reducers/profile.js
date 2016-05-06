let initProfile = {
    
    id: 0,
    
    name: "Tony",
    
    completedLevels: [],
    
    unlockedLevels: [1],
    
    setting: {
        
        developer: false,
        
        vibrator: false
        
    },
    
    language: "en"
    
}

const profile = (state = initProfile, action) => {
    
    switch (action.type) {
        
    case "GAME_INIT":
        {
            let profileJSON = window.localStorage.getItem("profile")
            
            if ( !profileJSON ) {
                
                return state
                
            }
            
            return JSON.parse(profileJSON)
        }
        
    case "CHANGE_SETTING":
        {
            let { key, value } = action.payload
            
            let profile = Object.assign({}, state)
            
            profile.setting[key] = value
            
            window.localStorage.setItem("profile", JSON.stringify(profile))
            
            return profile
        }
        
    case "GAME_START":
        {

        }
        
    case "WILL_WIN":
        {
            
            let { levelIndex } = action.payload
            
            let profile = Object.assign({}, state)
            
            profile.completedLevels.push(levelIndex)
            
            profile.unlockedLevels.push(levelIndex + 1)
            
            window.localStorage.setItem("profile", JSON.stringify(profile))
            
            return profile
            
        }
        
    case "WILL_LOSE":
        {
            
        }

    default:
    
        return state

    }
    
}

export default profile