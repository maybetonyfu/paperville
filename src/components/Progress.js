import React, { PropTypes, Component } from "react"
// import { Link } from "react-router"
import Link from 'react-router/lib/Link'
import Radium from 'radium'

import ProgressBox from "./ProgressBox"
import MoveCounter from "./MoveCounter"

class Progress extends Component {
    
    constructor(props) {
        
        super(props)
        
    }
    
    componentWillReceiveProps () {
        
        // console.log("progress props update")
        
        let { level, board, onGameWinning, onGameLosing} = this.props
        
        if (level.maxMove === board.playerMove) {
            
            onGameLosing()
            
        }
        
        let winConditionMet = level.winConditions
            .noLessThan
            .every((rule) => {return rule.objective <= board.progress[rule.group]})
            
        if (winConditionMet) {
            
            onGameWinning()
        
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
    
            { level.winConditions.noLessThan.map((rule, index) => {
                return ( <ProgressBox
                key={index}
                groupName={level.groupMap[rule.group]} 
                objective={rule.objective}
                ruleProgress={board.progress[rule.group]}/>)
            } )}
    
            </div>
    
        )

    }
    
}


Progress.PropTypes = {

}

export default Radium(Progress)