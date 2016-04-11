import React, { PropTypes } from "react"
// import { Link } from "react-router"
import Radium from 'radium'
// import Modal from "react-modal"

import ProgressContainer from "../containers/ProgressContainer"
import BoardContainer from "../containers/BoardContainer"

import StartModal from "../components/StartModal"
import WinModal from "../components/WinModal"
import LostModal from "../components/LostModal"

const Game = Radium((prop) => {
    
    let {game, measurements, levels, onNextLevel, onRetryLevel, onGameStart} = prop
    
    let isLastLevel = levels[game.currentLevel + 1] === undefined
    return (
        <div style={GameStyle}>
            <ProgressContainer />
            
            <BoardContainer />
            
            <StartModal
                modalOpen={game.status==="INIT"}
                measurements={measurements}
                onStartClick={onGameStart}
                />
            
            <WinModal
                modalOpen={game.status==="WIN"}
                measurements={measurements}
                isLastLevel={isLastLevel}
                onNextLevelClick = {() => {
                    if(!isLastLevel ) {
                        let nextLevel = levels[game.currentLevel + 1]
                        onNextLevel(nextLevel.boardConfig, nextLevel.id)
                    }
                }}
                />
                
            <LostModal
                modalOpen={game.status==="LOSE"}
                measurements={measurements}
                onRetryLevelClick = {() => {
                    let level = levels[game.currentLevel]
                    onRetryLevel(level.boardConfig, level.id)
                }}
                />
    
            
        </div>
    )
    
})


let GameStyle = {
    width: "100%",
    height: "100%"
}

export default Game