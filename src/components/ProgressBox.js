import React, { PropTypes } from "react"
import Radium from 'radium'

import svgSymbols from "../assets/svg"


const ProgressBox = Radium((prop) => {
    
    let { groupName, groupColor, minimum, maximum, ruleProgress } = prop
    
    let positiveAmount = Math.min(minimum , ruleProgress)
    
    let negativeAmount = Math.min(maximum , ruleProgress)
    
    let positiveRatio = minimum ? 100 * positiveAmount/minimum : 0
    
    let negativeRatio = maximum ? 100 * negativeAmount/maximum : 0

    // let objective,
        
    //     overkill,
    
    //     objectiveWidth,
        
    //     negativeWidth,
    
    //     overkillWidth,
        
    //     objectiveTotal,
        
    //     overkillTotal,
        
    //     objectiveBorder,
        
    //     overkillBorder
    
    // if ( maximum && minimum ) {
        
    //     objective =  Math.min(minimum , ruleProgress)
        
    //     overkill =  Math.min(maximum - minimum, Math.max(ruleProgress - minimum , 0))
        
    //     objectiveWidth = 100 * objective/minimum
        
    //     negativeWidth = 100 * objective/maximum
        
    //     overkillWidth = 100 * overkill/(maximum - minimum)
        
    //     objectiveTotal = 90 * minimum / maximum
        
    //     overkillTotal =  90 * (maximum - minimum) / maximum
        
    //     objectiveBorder = "2px 1px 2px 2px"
        
    //     overkillBorder = "2px 2px 2px 1px"
        
    // }
    
    // if (maximum && !minimum) {
        
    //     objective = 0
        
    //     overkill =  Math.min(maximum, ruleProgress)
        
    //     objectiveWidth = 0
        
    //     negativeWidth = 100 * objective/maximum
        
    //     overkillWidth = 100 * overkill/maximum
        
    //     objectiveTotal = 0
        
    //     overkillTotal = 90
        
    //     objectiveBorder = "0px"
        
    //     overkillBorder = "2px"
        
    // }
    
    // if (minimum && !maximum) {
        
    //     objective = Math.min(minimum , ruleProgress)
        
    //     overkill =  0
        
    //     objectiveWidth = 100 * objective/minimum
        
    //     overkillWidth = 0
        
    //     objectiveTotal = 90
        
    //     overkillTotal = 0
        
    //     objectiveBorder = "2px"
        
    //     overkillBorder = "0px"
        
    // }
    
    let boxStyle = {
        
        display: "inline-block",
        
        width: "20%",
        
        margin: "10px 1vh 1vh 1vh",
        
        lineHeight: "2vh",
        
    }
    
    // let objectiveBorderStyle = {
        
    //     display: "inline-block",
        
    //     width: objectiveTotal + "%",
        
    //     height: "2px",
        
    //     // backgroundColor: "white",
        
    //     borderWidth: objectiveBorder,
        
    //     borderStyle: "solid",
        
    //     borderColor: "white"
        
    // }
    
    // let overkillBorderStyle = {
        
    //     display: "inline-block",
        
    //     width: overkillTotal + "%",
        
    //     height: "2px",
        
    //     backgroundColor : "#F7CA18",
        
    //     borderWidth: overkillBorder,
        
    //     borderStyle: "solid",
        
    //     borderColor: "white"
        
    // }
    
    // let objectiveStyle = {
        
    //     display: "block",
        
    //     width: objectiveWidth + "%",
        
    //     height: "100%",
        
    //     background: "white"
        
    // }
    
    // let overkillStyle = {
        
    //     display: "block",
        
    //     width: overkillWidth + "%",
        
    //     height: "100%",
        
    //     background: "white"
        
    // }
    
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
        
        transition: "0.4s linear",
        
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
        
        transition: "0.4s linear",
        
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
                <svg style={{fill: groupColor}} viewBox={svgSymbols[groupName]["viewBox"]}>
                    <path d={svgSymbols[groupName]["paths"][0]} />
                </svg>
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