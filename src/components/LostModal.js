import React, { PropTypes } from "react"
// import { Link } from "react-router"
import Link from 'react-router/lib/Link'
import Radium from 'radium'
import Modal from "react-modal"


const LostModal = Radium((prop) => {

    let {
        
        measurements, 
        
        modalOpen, 
        
        onRetryLevelClick, 
        
        lostMessage
        
    } = prop

    let { 
        appHeight,
         
         appWidth 
        
    } = measurements.global

        
    let modalStyle = {
        
        overlay: {
            
            position: "absolute",
            
            width: "100%",
            
            height: "100%",
            
            top: "0px",
            
            left: "50%",
            
            backgroundColor: "rgba(48, 56, 68, 0.8)",
            
            transform: "translateX(-50%)"
        },
        
        content : {
            
            top: "20%",
            
            bottom: "30%",
            
            border: "none",
            
            textAlign: "center",
            
            backgroundColor: "#262d37",
            
            color: "white",
            
            overflow: 'hidden',
            
            borderRadius: '12px',
            
            padding: '2vh 1vh'
        
        }
    }
    
    let LinkStyle = {
        
        textDecoration: "none",

        textAlign: "center",

        display: "block",

        width: "16vh",

        height: "5vh",

        lineHeight: "5vh",

        marginLeft: "50%",

        transform: "translateX(-50%)",

        borderRadius: "6px",

        marginTop : "10%",

        backgroundColor: "#5ad8a4",
        
        color: "white",

    }
    return (
         <Modal style={modalStyle}  isOpen={modalOpen}>
            
            <h1>{lostMessage.title || "Darn!"}</h1>
            
            <h3>{lostMessage.message || "Let's try again"}</h3>

            <a style={LinkStyle} onClick={onRetryLevelClick} href="#">Try Again</a>
            
            <Link style={LinkStyle} to="/campaign">Back</Link>

        </Modal>

    )
    
})


export default LostModal