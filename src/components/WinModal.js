import React, { PropTypes } from "react"
// import { Link } from "react-router"
import Link from 'react-router/lib/Link'
import Radium from 'radium'
import Modal from "react-modal"


const WinModal = Radium(({measurements, modalOpen, onNextLevelClick}) => {

    let { appHeight,
         appWidth } = measurements.global

        
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
            
            top: "25%",
            
            bottom: "50%",
            
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
        
        display: "inline-block",
        
        width: "15vh",
        
        height: "4vh",
        
        lineHeight: "4vh",
        
        color: "black",
        
        marginLeft: "1vh",
        
        borderRadius: "10px",
        
        border: "2px solid black"

    }
    
    
    return (
         <Modal style={modalStyle} isOpen={modalOpen}>
            
            <h1>Win</h1>
            
            <a style={LinkStyle} onClick={onNextLevelClick}  href="#">Next Level</a>
            
            <Link style={LinkStyle} to="/campaign">Back</Link>

        </Modal>

    )
    
})


export default WinModal