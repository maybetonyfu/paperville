import React, { PropTypes } from "react"
// import { Link } from "react-router"
import Link from 'react-router/lib/Link'
import Radium from 'radium'

const Level = Radium(({ level, onClick, unlocked}) => {
    

    let levelStyle = {
        
        textDecoration: "none",
        
        textAlign: "center",
        
        display: "inline-block",
        
        width: "8vh",
        
        height: "8vh",
        
        lineHeight: "8vh",
        
        fontSize: "4vh",
        
        margin: "1vh",
        
        color: "white",
        
        borderRadius: "50%",
        
        // border: "2px solid black",
        
        backgroundColor: unlocked? "#59d4d9" : "#BDC3C7",
    }
    
    return (
        
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
            
    )
    
})

Level.PropTypes = {
    
    level: PropTypes.object.isRequired,
    
    onClick: PropTypes.func.isRequired
    
}

export default Level