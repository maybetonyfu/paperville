import React, { PropTypes } from "react"
// import { Link } from "react-router"
import Radium from 'radium'
// import Modal from "react-modal"

import ProgressContainer from "../containers/ProgressContainer"
import BoardContainer from "../containers/BoardContainer"

import WinModal from "../components/WinModal"
import LostModal from "../components/LostModal"

const Game = Radium(({game, measurements, levels, onNextLevel, onRetryLevel}) => (
    <div style={GameStyle}>
        <ProgressContainer />
        
        <BoardContainer />
        
        <WinModal
            modalOpen={game.status==="WIN"}
            measurements={measurements}
            onNextLevelClick = {() => {
                let nextLevel = levels[game.currentLevel + 1]
                onNextLevel(nextLevel.boardConfig, nextLevel.id)
            }}
            />
            
        <LostModal
            modalOpen={game.status==="LOSE"}
            measurements={measurements}
            onRetryLevelClick = {() => {
                let level = levels[game.currentLevel]
                onNextLevel(level.boardConfig, level.id)
            }}
            />

        
    </div>
))


let GameStyle = {
    width: "100%",
    height: "100%"
}

export default Game