import React, { PropTypes } from "react"
import Radium from 'radium'

import svgSymbols from "../assets/svg"


const MoveCounter = Radium(({moveLeft}) => {
    
    let boxStyle = {
        
        display: "inline-block",
        
        width: "18%",
        
        margin: "10px 1vh 1vh 1vh",
        
        lineHeight: "2vh"
        
    }
    
    let indicatorStyle = {
        
        display: "inline-block",

        fontSize: "4vh"
        
    }
    
    let groupSymbleStyle = {
        
        display: "inline-block",
        
        width: "4vh",
        
        height: "4vh"
        
    }
    
    return (
        <span style={boxStyle}>
            <span style={groupSymbleStyle}>
                <svg viewBox={svgSymbols["clock"]["viewBox"]}>
                    <path d={svgSymbols["clock"]["paths"][0]} />
                </svg>
            </span>
            
            <span style={indicatorStyle}>
                {moveLeft}
            </span>

        </span>
    )
})

MoveCounter.PropTypes = {

}

export default MoveCounter