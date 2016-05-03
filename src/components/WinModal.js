import React, { PropTypes } from "react"
// import { Link } from "react-router"
import Link from 'react-router/lib/Link'
import Radium from 'radium'
import Modal from "react-modal"


const WinModal = Radium((prop) => {

    let {
        
        measurements,
        
        modalOpen, 
        
        onNextLevelClick, 
        
        isLastLevel, 
        
        winMessage
        
    } = prop
    
    let { 
        
        appHeight,
        
        appWidth 
        
    } = measurements.global

        
    let modalStyle = {
        
        overlay: {
            
            position: "absolute",
            
            width: appWidth,
            
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
    
    let symbolStyle = {
        
        display: "block",
        
        margin: "auto",
        
        width: "8vh",
        
        height: "8vh"
    } 
    
    let nextLevel = isLastLevel ? 
        "" : <a style={LinkStyle} onClick={onNextLevelClick}  href="#">Next Level</a>
    
    
    return (
         <Modal style={modalStyle} isOpen={modalOpen}>
            
            <h1>{winMessage.title || "Congrats!"}</h1>
            
            {winMessage.symbol ? <span style={symbolStyle} className={winMessage.symbol}/> : ""}
            
            {winMessage.message ? <h3> {winMessage.message} </h3> : ""}
            
            {nextLevel}
            
            <Link style={LinkStyle} to="/campaign">Back</Link>

        </Modal>

    )
    
})


export default WinModal