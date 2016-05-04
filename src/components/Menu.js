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

        fontSize: "6vh",

        textAlign: "center",

        fontFamily: "'Sue Ellen Francisco', cursive",

        marginBottom: "10%"

    }

    let menuLinkStyle = {

        textDecoration: "none",

        textAlign: "center",

        display: "block",

        width: "16vh",

        height: "5vh",

        lineHeight: "5vh",

        marginLeft: "50%",

        transform: "translateX(-50%)",

        borderRadius: "6px",

        marginTop : "2vh",

        backgroundColor: "#5ad8a4",
        
        color: "white",

    }

    return (

        <div style={menuStyle}>
        
            <p style={titleStyle}>Paperville</p>
            
            <Link style={menuLinkStyle} to="/campaign">Campaign</Link>
            
            <Link style={menuLinkStyle} to="/setting">Setting</Link>
            
        </div>

    )}

)

Menu.PropTypes = {

}



export default Menu
