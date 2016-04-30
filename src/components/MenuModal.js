import React, { PropTypes } from "react"
import Link from 'react-router/lib/Link'
import Radium from 'radium'
import Modal from "react-modal"


const MenuModal = Radium((prop) => {

    let {
        
        measurements,
        
        modalOpen,
        
        dismissModal,
        
    } = prop

    let { 
        appHeight,
         
         appWidth 
        
    } = measurements.global

        
    let modalStyle = {
        
        overlay: {
            
            position: "absolute",
            
            width: appWidth,
            
            height: appHeight,
            
            top: "0px",
            
            left: "50%",
            
            transform: "translateX(-50%)"
        },
        
        content : {
            
            top: "20%",
            
            bottom: "30%",
            
            border: '2px solid',
            
            textAlign: "center",
            
            backgroundColor: "#ECECEC",
            
            overflow: 'hidden',
            
            borderRadius: '12px',
            
            padding: '2vh 1vh'
        
        }
    }
    
    let LinkStyle = {
        
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
         <Modal style={modalStyle}  isOpen={modalOpen}>
         
            <Link style={LinkStyle} to="/campaign">Campaign</Link>
            
            <Link style={LinkStyle} to="/">Home</Link>
            
            <a style={LinkStyle}   onClick={dismissModal} href="#">Continue</a>

        </Modal>

    )
    
})


export default MenuModal