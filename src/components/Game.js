import React, { PropTypes } from "react"
import Radium from 'radium'
import Hammer from "react-hammerjs"

import ProgressContainer from "../containers/ProgressContainer"
import BoardContainer from "../containers/BoardContainer"

import StartModal from "../components/StartModal"
import WinModal from "../components/WinModal"
import LostModal from "../components/LostModal"
import MenuModal from "../components/MenuModal"

const Game = Radium((prop) => {
    
    let {
        
            game, 
            
            measurements, 
            
            levels,
            
            setting,
            
            onNextLevel, 
            
            onRetryLevel, 
            
            onGameStart,
            
            showMenu,
            
            hideMenu
        
    } = prop
    
    let GameStyle = {
        
        width: "100%",
        
        height: "100%"
        
    }
    
    let isLastLevel = levels[game.currentLevel + 1] === undefined
    
    return (
        <Hammer onDoubleTap={()=>{
                showMenu()}}>
            <div style={GameStyle} >
                <ProgressContainer />
                
                <BoardContainer />
                
                <MenuModal 
                    modalOpen={game.menuModalOpen}
                    language={setting.language}
                    measurements={measurements}
                    dismissModal={hideMenu}
                />
                
                <StartModal
                    modalOpen={game.status==="INIT"}
                    language={setting.language}
                    measurements={measurements}
                    levelName={levels[game.currentLevel]["name"]}
                    description={levels[game.currentLevel]["description"]}
                    onStartClick={onGameStart}
                    />
                
                <WinModal
                    modalOpen={game.status==="WIN"}
                    language={setting.language}
                    measurements={measurements}
                    winMessage={levels[game.currentLevel]["winMessage"]}
                    isLastLevel={isLastLevel}
                    onNextLevelClick = {() => {
                        if(!isLastLevel ) {
                            let nextLevel = levels[game.currentLevel + 1]
                            onNextLevel(nextLevel.boardConfig, nextLevel.index)
                        }
                    }}
                    />
                    
                <LostModal
                    modalOpen={game.status==="LOSE"}
                    language={setting.language}
                    measurements={measurements}
                    lostMessage={levels[game.currentLevel]["lostMessage"]}
                    onRetryLevelClick = {() => {
                        let level = levels[game.currentLevel]
                        onRetryLevel(level.boardConfig, level.index)
                    }}
                    />
        
                
            </div>
        </Hammer>
    )
    
})

Game.PropTypes = {
    
}

export default Game