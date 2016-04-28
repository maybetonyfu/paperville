import React, { PropTypes } from "react"
// import { Link } from "react-router"
import Link from 'react-router/lib/Link'
import Radium from 'radium'

import Level from "./Level"

const Campaign = Radium(({ levels, profile, measurements, onLevelClick }) => {
    
    let {
        
        activeHeight, 
        
        activeWidth
        
    } = measurements.global
    
    
    let campaignStyle = {
        
        width: activeWidth,
        
        height: activeHeight,
        
        paddingTop: "30px",
        
        textAlign: "center"
        
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
        </div>
        
    )
})

Campaign.PropTypes = {
    
    levels: PropTypes.object.isRequired,
    
    onLevelClick: PropTypes.func.isRequired
    
}

export default Campaign