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

        textAlign: "center",

        fontFamily: "'Sue Ellen Francisco', cursive",

        marginBottom: "10%"

    }

    let menuLinkStyle = {

        textDecoration: "none",

        textAlign: "center",

        display: "block",

        width: "15vh",

        height: "4vh",

        lineHeight: "4vh",

        color: "black",

        marginLeft: "50%",

        transform: "translateX(-50%)",

        borderRadius: "10px",

        border: "2px solid black",

        marginTop : "2vh",

        backgroundColor: "white",

    }

    return (

        <div style={menuStyle}>
            <p style={titleStyle}>Paper Farm</p>
            <Link style={menuLinkStyle} to="/campaign">Campaign</Link>
            <Link style={menuLinkStyle} to="/setting">Setting</Link>
        </div>

    )}

)

Menu.PropTypes = {

}



export default Menu
