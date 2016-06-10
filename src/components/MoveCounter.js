import React, { PropTypes } from "react"
import Radium from 'radium'

import hourglass from "../assets/hourglass"
import svg from "../assets"


const MoveCounter = Radium((prop) => {
    
    let {
            levelIndex, 
            
            maxMove, 
            
            minMove, 
            
            playerMove, 
            
            extraMove,
            
            shields
        
    } =  prop
    
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
        
        padding: "0 1vh"
        
    }
    
    let moveLeft
    
    if (minMove) {
        
        moveLeft = minMove - playerMove
    }
    
    if (maxMove) {
        
        moveLeft = (maxMove === -1) ? Infinity : maxMove - playerMove
    }
    
    return (
        <span style={boxStyle}>
            <span style={{fontSize: "3vh"}}>lv.</span>
            <span style={{fontSize: "4vh", paddingRight: "1vh"}}>{levelIndex}</span>
            <span style={groupSymbleStyle}>
                {hourglass}
            </span>
            
            <span style={indicatorStyle}>
                {(moveLeft === Infinity) ? "∞" : moveLeft }
            </span>

            <span>
                <span style={groupSymbleStyle}>{svg.get("bolt")}</span>
                <span style={indicatorStyle}>{extraMove}</span>
            </span>

            <span>
                <span style={groupSymbleStyle}>{svg.get("shield")}</span>
                <span style={indicatorStyle}>{shields}</span>
            </span>


            <span>
                <span style={groupSymbleStyle}>{svg.get("star")}</span>
            </span>

            <span>
                <span style={groupSymbleStyle}>{svg.get("snowflake")}</span>
            </span>
            
            

        </span>
    )
})

MoveCounter.PropTypes = {

}

export default MoveCounter