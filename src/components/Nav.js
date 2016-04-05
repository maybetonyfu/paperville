import React, { PropTypes } from "react"
// import { Link } from "react-router"
import Link from 'react-router/lib/Link'
import Radium from 'radium'


const Nav = Radium(({navHeight}) => {
    
    let NavStyle = {
        
        height: navHeight,

    }
    
    let navList = {
        
        position: "absolute",
        
        listStyle: "none",
        
        paddingLeft: 0,
        
        marginTop: "10px"
        
    }
    
    let navItem = {
        display: "inline"
    }
    
    let navLinkStyle = {
        
        textDecoration: "none",
        
        textAlign: "center",
        
        // padding: "0.8vh",
        
        display: "inline-block",
        
        width: "15vh",
        
        color: "black",
        
        marginLeft: "1vh",
        
        borderRadius: "10px",
        
        border: "2px solid black",
        
    }
    
    return (
        <div style={NavStyle}>
            <ul style={navList}>
                <li style={navItem}> <Link style={navLinkStyle} to="/"> Menu </Link></li>
                <li style={navItem}> <Link style={navLinkStyle} to="/campaign" > Campaign </Link></li>
            </ul>
        </div>
        
    )}
    
)

Nav.PropTypes = {

}



export default Nav