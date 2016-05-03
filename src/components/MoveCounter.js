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


let hourglass = Radium.keyframes({
    
    '0%': {
        
        transform: "rotate(0deg)",
        
        boxShadow: 'inset #ECECEC 0 0 0 0, inset #000000 0 1.5vh 0 0, inset #ECECEC 0 3vh 0 0, inset #000000 0 3vh 0 0',
        
    },
    
    '60%': {
        
        transform: "rotate(0deg)",
        
        boxShadow: 'inset #ECECEC 0 1.5vh 0 0, inset #000000 0 1.5vh 0 0, inset #ECECEC 0 1.5vh 0 0, inset #000000 0 3vh 0 0',
        
    },
    
    '100%': {
        
        transform: "rotate(180deg)",
        
        boxShadow: 'inset #ECECEC 0 1.5vh 0 0, inset #000000 0 1.5vh 0 0, inset #ECECEC 0 1.5vh 0 0, inset #000000 0 3vh 0 0',
        
    },
    
})

MoveCounter.PropTypes = {

}

export default MoveCounter