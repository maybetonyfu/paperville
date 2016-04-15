import React, { PropTypes } from "react"
import Link from 'react-router/lib/Link'
import Radium from 'radium'

const Setting = Radium((prop) => {

    let { 
        
        profile, 
        
        onChangeSetting,
        
        onToggleFullscreen
        
    } = prop
    
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
            <div onClick={()=> {
                let root = document.getElementById("root")
                if (root.requestFullscreen) {
                    root.requestFullscreen();
                } else if (root.msRequestFullscreen) {
                    root.msRequestFullscreen();
                } else if (root.mozRequestFullScreen) {
                    root.mozRequestFullScreen();
                } else if (root.webkitRequestFullscreen) {
                    root.webkitRequestFullscreen();
                }
                
                if (!profile.setting.fullscreen) {
                
                    onToggleFullscreen({
                    
                        appWidth: window.screen.width, 
                        
                        appHeight: window.screen.height,
                        
                        newValue: true
                        
                    })
                    
                }
                
                if (profile.setting.fullscreen) {
                
                    onToggleFullscreen({
                    
                        appWidth: document.documentElement.clientWidth, 
                        
                        appHeight: document.documentElement.clientHeight,
                        
                        newValue: false
                        
                    })
                }
                
            }}>
                <span style={[checkBoxStyle.base,
                    profile.setting.fullscreen?
                        checkBoxStyle.checked: checkBoxStyle.unchecked]}></span>
                <span style={settingItemStyle}>Full Screen</span>
            </div>
        </div>

    )}

)

Setting.PropTypes = {
    
}



export default Setting