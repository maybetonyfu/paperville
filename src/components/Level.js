import React, { PropTypes } from "react"
import Link from 'react-router/lib/Link'
import Radium from 'radium'

const Level = Radium(({ level, onClick, unlocked}) => {
    

    let levelStyle = {

        textDecoration: "none",
        
        textAlign: "center",
        
        // display: "inline-block",
        
        width: "8vh",
        
        height: "8vh",
        
        lineHeight: "8vh",
        
        fontSize: "4vh",
        
        // margin: "1vh",
        
        color: "white",
        
        borderRadius: "50%",
        
        boxShadow: unlocked? "0 0 0.1vh #59d4d9" : "0 0 0.1vh #BDC3C7",
        
        backgroundColor: unlocked? "#59d4d9" : "#BDC3C7",
    }
    
    let boxStyle = {
        
        flexBasis: "25%",
        
        height: "10vh",
        
        display: "flex",
        
        justifyContent: "center",
    }
    
    return (
        <div style={boxStyle}>
            <Link style={levelStyle}
                onClick={ (e)=> {
                        if (unlocked) {
                            onClick()
                        }
                        else {
                            e.preventDefault()
                        }
                        
                    }
                }
                to="/game">{level.index}</Link>
        </div>
            
    )
    
})

Level.PropTypes = {
    
    level: PropTypes.object.isRequired,
    
    onClick: PropTypes.func.isRequired
    
}

export default Level