import React, { PropTypes } from "react"
// import { Link } from "react-router"
import Link from 'react-router/lib/Link'
import Radium from 'radium'

const Level = Radium(({ level, onClick }) => {
    

    let levelStyle = {
        
        textDecoration: "none",
        
        textAlign: "center",
        
        display: "inline-block",
        
        width: "7vh",
        
        height: "7vh",
        
        lineHeight: "7vh",
        
        fontSize: "4vh",
        
        margin: "1vh",
        
        color: "black",
        
        borderRadius: "10px",
        
        border: "2px solid black",
    }
    
    return (
        
            <Link style={levelStyle} 
                onClick={onClick} 
                to="/game">{level.id}</Link>
            
    )
    
})

Level.PropTypes = {
    
    level: PropTypes.object.isRequired,
    
    onClick: PropTypes.func.isRequired
    
}

export default Level