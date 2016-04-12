import { combineReducers } from "redux"

import levels from "./levels"
import game from "./game"
import board from "./board"
import measurements from "./measurements"
import profile from "./profile"

const mainReducer = combineReducers({
    
    levels,
    
    game,
    
    board,
    
    profile,
    
    measurements
    
})

export default mainReducer