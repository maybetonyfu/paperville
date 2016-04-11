import React, { PropTypes, Component } from "react"
import Link from 'react-router/lib/Link'
import Radium from 'radium'

import ProgressBox from "./ProgressBox"
import MoveCounter from "./MoveCounter"

class Progress extends Component {
    
    constructor(props) {
        
        super(props)
        
    }
    
    componentWillReceiveProps () {
        
        let { level, board, onGameWinning, onGameLosing, gameStatus} = this.props
        
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
            
        if (fulfillMinAmount && gameStatus == "START") {
            
            onGameWinning()
        
        }
        
        if ( (violateMaxMove || violateMaxAmount) && gameStatus == "START") {
            
            onGameLosing()
            
        }
        
    }
    
    render () {
        
        let { progressSizing, level, board } = this.props
    
        let { progressWidth, progressHeight, progressPadding } = progressSizing
    
        let ProgressStyle = {
    
            height: progressHeight,
            
            width: progressWidth,
            
            padding: progressPadding,
            
            backgroundColor: "#ECECEC"
    
        }

        return (
    
            <div style={ProgressStyle}>
            
            <MoveCounter moveLeft={ level.maxMove - board.playerMove} />
    
            { level.objectiveAmount.map((rule, index) => {
                return ( <ProgressBox
                key={index}
                groupName={level.groupMap[rule.group]} 
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