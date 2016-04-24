import React, { PropTypes } from "react"
// import { Link } from "react-router"
// import Link from 'react-router/lib/Link'
import IndexLink from 'react-router/lib/IndexLink'
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
        
        backgroundColor: "white"
        
    }
    
    return (
        <div style={NavStyle}>
            <ul style={navList}>
                <li style={navItem}> <IndexLink style={navLinkStyle} activeStyle={{backgroundColor:"transparent"}} to="/"> Menu </IndexLink></li>
                <li style={navItem}> <IndexLink style={navLinkStyle} activeStyle={{backgroundColor:"transparent"}} to="/campaign" > Campaign </IndexLink></li>
            </ul>
        </div>
        
    )}
    
)

Nav.PropTypes = {

}



export default Nav