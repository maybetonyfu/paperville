import React, { PropTypes } from "react"
// import { Link } from "react-router"
import Link from 'react-router/lib/Link'
import Radium from 'radium'

const Menu = Radium(() => {


    let menuStyle = {
        
        width: "100%",
        
        height: "100%",
        
        textAlign: "center"
        
    }
    
    let titleStyle = {
        
        marginTop: "30%",
        
        fontSize: "4vh",
        
        fontFamily: "'Pacifico', cursive"
        
    }

    let menuLinkStyle = {
        
        textDecoration: "none",
        
        textAlign: "center",
        
        display: "inline-block",
        
        width: "15vh",
        
        height: "4vh",
        
        lineHeight: "4vh",
        
        color: "black",
        
        marginLeft: "1vh",
        
        borderRadius: "10px",
        
        border: "2px solid black",
        
        marginTop : "10%"
    }
    
    return (

        <div style={menuStyle}>
            <p style={titleStyle}>Paper Bakery</p>
            <Link style={menuLinkStyle} to="/campaign">Campaign</Link>
        </div>

    )}

)

Menu.PropTypes = {
    
}



export default Menu