import React, { PropTypes } from "react"
import Link from 'react-router/lib/Link'
import Radium from 'radium'

const Setting = Radium((prop) => {

    let { profile, onChangeSetting } = prop
    
    let settingStyle = {
        
        width: "100%",
        
        height: "100%",
        
        textAlign: "left",
        
        padding: "5vh"
        
    }
    
    let checkBoxStyle = {
        
        base: {
        
            display: "inline-block",
            
            width: "3vh",
            
            height: "3vh",
            
            borderRadius: "1vh",
            
            border: "2px solid black",
            
            margin: "5px"
            
        },
        
        checked: {
            
            backgroundColor: "black"
            
        },
        
        unchecked: {
            
            backgroundColor: "transparent"
            
        }

        
    }

    let settingItemStyle = {
        
        fontSize: "4vh",
        
        verticalAlign: "5px",
        
        margin: "5px"
    }

    return (

        <div style={settingStyle}>
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

    )}

)

Setting.PropTypes = {
    
}



export default Setting