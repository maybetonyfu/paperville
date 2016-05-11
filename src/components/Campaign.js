import React, { PropTypes } from "react"
import Link from "react-router/lib/Link"
import Radium from "radium"

import Level from "./Level"

const Campaign = Radium(({ levels, profile, onLevelClick }) => {
    
    
    let campaignStyle = {
        
        height: "100%",
        
        paddingTop: "10%",
        
        paddingLeft: "15%",
        
        paddingRight: "15%",
        
        textAlign: "center",
        
        display: "flex",
        
        flexDirection: "row",
        
        flexWrap: "wrap",
        
        justifyContent: "flex-start",
        
        alignContent: "flex-start",
        
    }
    
    let LinkStyle = {
        
        textDecoration: "none",

        textAlign: "center",

        display: "block",

        width: "16vh",

        height: "5vh",

        lineHeight: "5vh",

        left: "50%",

        transform: "translateX(-50%)",

        borderRadius: "6px",

        marginTop : "2vh",

        backgroundColor: "#5ad8a4",
        
        color: "white",
        
        position: "absolute",
        
        bottom: "20%"

    }
    
    const homeText = {
        
        "en": "Home"
        
    }

    return (
        
        <div style={campaignStyle}>
            {
                Object.values(levels).map(level => 
                    <Level 
                    key={level.index}
                    unlocked={ (profile.unlockedLevels.indexOf(level.index) !== -1) || profile.setting.developer }
                    onClick={
                    
                        () => {
                        
                            onLevelClick(level.boardConfig, level.index) 
                            
                        }
                        
                    } 
                    level={level}/>
                )
            }
            <Link style={LinkStyle} to="/">
                {homeText[profile.setting.language]}
            </Link>
        </div>
        
    )
})

Campaign.PropTypes = {
    
    levels: PropTypes.object.isRequired,
    
    onLevelClick: PropTypes.func.isRequired
    
}

export default Campaign