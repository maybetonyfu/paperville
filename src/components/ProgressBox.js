import React, { PropTypes } from "react"
import Radium from 'radium'


const ProgressBox = Radium((prop) => {
    
    let { groupName, objective, ruleProgress } = prop
    
    ruleProgress = ruleProgress > objective ? objective : ruleProgress
    
    let barWidth = Math.round( 100 * ruleProgress/objective) 
    
    
    let boxStyle = {
        
        display: "inline-block",
        
        width: "18%",
        
        margin: "10px 1vh 1vh 1vh",
        
    }
    
    let barBorderStyle = {
        
        display: "block",
        
        width: "100%",
        
        height: "2px",
        
        border: "2px solid black"
        
    }
    
    let barStyle = {
        
        display: "block",
        
        width: barWidth + "%",
        
        height: "100%",
        
        background: "black"
        
    }
    
    let indicatorStyle = {
        
        display: "inline-block",

        fontSize: "3vh"
        
    }
    
    let groupSymbleStyle = {
        
        display: "inline-block",
        
        width: "3vh",
        
        height: "3vh"
        
    }
    
    return (
        <span style={boxStyle}>
            <span style={groupSymbleStyle} className={groupName}>
            </span>
            
            <span style={indicatorStyle}>
                {ruleProgress}/{objective}
            </span>
            
            <span style={barBorderStyle}>
                <span style={barStyle}></span>
            </span>

        </span>
    )
})

ProgressBox.PropTypes = {

}

export default ProgressBox