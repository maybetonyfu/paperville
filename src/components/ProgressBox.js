import React, { PropTypes } from "react"
import Radium from 'radium'

import svgSymbols from "../assets"


const ProgressBox = Radium((prop) => {
    
    let { groupName, groupColor, minimum, maximum, ruleProgress } = prop
    
    let positiveAmount = Math.min(minimum , ruleProgress)
    
    let negativeAmount = Math.min(maximum , ruleProgress)
    
    let positiveRatio = minimum ? 100 * positiveAmount/minimum : 0
    
    let negativeRatio = maximum ? 100 * negativeAmount/maximum : 0

    let boxStyle = {
        
        display: "inline-block",
        
        width: "20%",
        
        margin: "10px 1vh 1vh 1vh",
        
        lineHeight: "2vh",
        
    }
    
    let indicatorStyle = {
        
        display: "inline-block",

        fontSize: "3vh"
        
    }
    
    let groupSymbleStyle = {
        
        display: "inline-block",
        
        width: "3vh",
        
        height: "3vh",
        
    }
    
    let objectiveBox  = {
        
        display: "block",
        
        padding: "2px",
        
        margin: "2px",
        
        background: "rgba(0, 0, 0, 0.25)",
        
        borderRadius: "6px",
        
        boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08)",
      
    }
    
    let positiveBar = {
        
        height: "4px",
        
        display: "block",
        
        borderRadius: "4px",
        
        width: positiveRatio + "%",
        
        backgroundImage: "linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.05))",
        
        backgroundColor: "#86e01e",
        
        transitionDuration: "400ms",
        
        transitionTimingFunction: "ease",
        
        transitionProperty: "width",
        
        boxShadow: "0 0 1px 1px rgba(0, 0, 0, 0.25), inset 0 1px rgba(255, 255, 255, 0.1)",
        
    }
    
    let negativeBar = {
        
        height: "4px",
        
        display: "block",
        
        borderRadius: "4px",
        
        width: negativeRatio + "%",
        
        backgroundImage: "linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.05))",
        
        backgroundColor: "#C0392B",
        
        transitionDuration: "400ms",
        
        transitionTimingFunction: "ease",
        
        transitionProperty: "width",
        
        boxShadow: "0 0 1px 1px rgba(0, 0, 0, 0.25), inset 0 1px rgba(255, 255, 255, 0.1)",
        
    }
        
    let positive = minimum ? 
            (   
                <span style={objectiveBox}>
                    <span style={positiveBar}></span>
                </span>
            ) : ""
    
    let negative = maximum ? 
            (
                <span style={objectiveBox}>
                    <span style={negativeBar}></span>
                </span>
            ) : ""
    
    return (
        <span style={boxStyle}>
            <span style={groupSymbleStyle}>
                {svgSymbols.get(groupName)}
            </span>
            
            <span style={indicatorStyle}>
                {ruleProgress}
                <span>{minimum ? "/" + minimum : ""}</span>
                <span style={{color: "#C0392B"}}>{maximum ? "/" + maximum : ""}</span>
            </span>
            
            <br/>
            
            {positive}
            
            {negative}

        </span>
    )
})

ProgressBox.PropTypes = {

}

export default ProgressBox