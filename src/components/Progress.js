import React, { PropTypes, Component } from "react"
import Link from 'react-router/lib/Link'
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

        violateMaxMove = level.maxMove <= board.playerMove
        
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

        if (fulfillMinAmount && gameStatus == "START") {
            
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
            
            // width: progressWidth,
            
            padding: progressPadding,
            
            // backgroundColor: "#ECECEC",
            
            borderBottom: "3px solid",
            
            borderBottomColor: board.status === "WAIT_PLAYER_MOVE" ? "#66CC99": "#FEA786",
            
            boxSizing: "border-box"
    
        }

        return (
    
            <div style={ProgressStyle}>
            
            <MoveCounter 
                levelIndex={level.index}
                rotateHourglass={board.status !== "WAIT_PLAYER_MOVE"}
                moveLeft={ level.maxMove - board.playerMove} />
    
            { level.objectiveAmount.map((rule, index) => {
                return ( <ProgressBox
                key={index}
                groupName={level.groupMap[rule.group]["name"]} 
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