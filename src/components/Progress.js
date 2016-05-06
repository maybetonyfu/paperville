import React, { PropTypes, Component } from "react"
import Radium from 'radium'

import ProgressBox from "./ProgressBox"
import MoveCounter from "./MoveCounter"

class Progress extends Component {
    
    constructor(props) {
        
        super(props)
        
    }
    
    componentDidUpdate () {
        
        let { level, board, onGameWinning, onGameLosing, gameStatus} = this.props
        
        if (board.status !== "WAIT_PLAYER_MOVE") {
            
            return
            
        }

        let violateMaxMove = false
        
        let achieveMinMove = true
        
        
        
        if (level.minMove) {
            
            achieveMinMove = level.minMove <= board.playerMove
            
        }
        
        if (level.maxMove) {
            
            let maxMove = (level.maxMove === -1 || level.maxMove === undefined) ? Infinity : level.maxMove
            
            violateMaxMove = maxMove <= board.playerMove
            
        }
        
        let fulfillMinAmount = level.objectiveAmount
            .every((rule) => {
                
                if (rule.minimum) {
                    
                    return rule.minimum <= board.progress[rule.group]
                }
                
                return true
                
            })
            
        let violateMaxAmount = level.objectiveAmount
            .some((rule) => {
                
                if (rule.maximum) {
                    
                    return rule.maximum <= board.progress[rule.group]
                }
                
                return false
                
            })
        
        if ( violateMaxAmount && gameStatus == "START") {
            
            onGameLosing()
            
            return
            
        }

        if (fulfillMinAmount && achieveMinMove && gameStatus == "START") {
            
            onGameWinning(level.index)
            
            return
        
        }
        
        if (violateMaxMove && gameStatus == "START") {
            
            onGameLosing()
            
            return
        
        }
        
    }
    
    render () {
        
        let { progressSizing, level, board } = this.props
    
        let { progressWidth, progressHeight, progressPadding } = progressSizing
    
        let ProgressStyle = {
    
            height: progressHeight,
            
            padding: progressPadding,
            
        }

        return (
    
            <div style={ProgressStyle}>
            
            <MoveCounter 
                levelIndex={level.index}
                maxMove={level.maxMove}
                minMove={level.minMove}
                playerMove={board.playerMove}
            />
    
            { level.objectiveAmount.map((rule, index) => {
                return ( <ProgressBox
                key={index}
                groupName={level.groupMap[rule.group]["name"]}
                groupColor={level.groupMap[rule.group]["color"]} 
                minimum={rule.minimum || 0}
                maximum={rule.maximum || null}
                ruleProgress={board.progress[rule.group]}/>)
            } )}
    
            </div>
    
        )

    }
    
}


Progress.PropTypes = {

}

export default Radium(Progress)