import React, { PropTypes } from "react"
import Radium from 'radium'

import svgSymbols from "../assets/svg"


const MoveCounter = Radium(({levelIndex, moveLeft, rotateHourglass}) => {
    
    let boxStyle = {
        
        display: "block",
        
        width: "100%",
        
        margin: "10px 1vh 1vh 1vh",
        
        lineHeight: "2vh"
        
    }
    
    let indicatorStyle = {
        
        display: "inline-block",

        fontSize: "4vh"
        
    }
    
    let groupSymbleStyle = {
        
        display: "inline-block",
        
        width: "3vh",
        
        height: "3vh",
        
        paddingRight: "1vh"
        
    }
    
    return (
        <span style={boxStyle}>
            <span style={{fontSize: "3vh"}}>lv.</span>
            <span style={{fontSize: "4vh", paddingRight: "1vh"}}>{levelIndex}</span>
            <span style={groupSymbleStyle}>
                <svg style={{fill: "white"}} viewBox={svgSymbols["clock"]["viewBox"]}>
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