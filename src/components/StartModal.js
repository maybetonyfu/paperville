import React, { PropTypes } from "react"
import Radium from "radium"
import Modal from "react-modal"


const StartModal = Radium((prop) => {

    let { 
        
        measurements, 
        
        modalOpen, 
        
        onStartClick, 
        
        levelName, 
        
        description
        
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
            
            top: "8%",
            
            bottom: "12%",
            
            border: "none",
            
            textAlign: "center",
            
            backgroundColor: "#59D4D9",
            
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

        marginTop : "2vh",

        backgroundColor: "white",
        
        color: "#59D4D9",
        
        position: "absolute",
        
        bottom: "20%"

    }
    
    return (
         <Modal style={modalStyle} isOpen={modalOpen} contentLabel={levelName}>
            
            <h1>{levelName}</h1>
            
            {description.map((text, index) => {
                return <p key={index}>{text}</p>
            })}
            
             <a style={LinkStyle} onClick={onStartClick} href="#">I got it</a>

        </Modal>

    )
    
})


export default StartModal