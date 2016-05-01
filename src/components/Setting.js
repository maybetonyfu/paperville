import React, { PropTypes } from "react"
import Link from 'react-router/lib/Link'
import Radium from 'radium'

const Setting = Radium((prop) => {

    let { 
        
        profile, 
        
        onChangeSetting 
        
    } = prop
    
    let settingStyle = {
        
        width: "100%",
        
        height: "100%",
        
        textAlign: "left"
        
    }
    
    let checkBoxStyle = {
        
        base: {
        
            display: "inline-block",
            
            width: "3vh",
            
            height: "3vh",
            
            borderRadius: "1vh",
            
            border: "2px solid #59d4d9",
            
            margin: "5px"
            
        },
        
        checked: {
            
            backgroundColor: "#59d4d9"
            
        },
        
        unchecked: {
            
            backgroundColor: "transparent"
            
        }

        
    }

    let settingItemStyle = {
        
        fontSize: "4vh",
        
        verticalAlign: "5px",
        
        margin: "5px",
        
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

        backgroundColor: "#5ad8a4",
        
        color: "white",
        
        position: "absolute",
        
        bottom: "20%"

    }

    return (

        <div style={settingStyle}>
            <div style={{padding: "2vh"}}>
                <div onClick={()=> {onChangeSetting("developer", !profile.setting.developer )}}> 
                    <span style={[checkBoxStyle.base,
                        profile.setting.developer?
                            checkBoxStyle.checked: checkBoxStyle.unchecked]}></span>
                    <span style={settingItemStyle}>Developer</span>
                </div>
                <div onClick={()=> {onChangeSetting("vibrator", !profile.setting.vibrator )}}> 
                    <span style={[checkBoxStyle.base,
                        profile.setting.vibrator?
                            checkBoxStyle.checked: checkBoxStyle.unchecked]}></span>
                    <span style={settingItemStyle}>Vibrator <small>Not available in iOS and desktop devices</small></span>
                </div>
            </div>
            
            <Link style={LinkStyle} to="/">Home</Link>
        </div>

    )}

)

Setting.PropTypes = {
    
}



export default Setting