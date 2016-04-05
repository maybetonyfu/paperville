import { combineReducers } from "redux"

import levels from "./levels"
import game from "./game"
import board from "./board"
import measurements from "./measurements"

const mainReducer = combineReducers({
    levels,
    game,
    board,
    measurements
})

export default mainReducer