import React, { PropTypes } from "react"
import Radium from "radium"
import ReactDOM from "react-dom"

import Hammer from "react-hammerjs"




const Tile = Radium( prop => {
            
        let { tile, tileMeasurements, symbolName, positions, canMove, panEnd} = prop
        
        let { tileWidth, tileHeight, tileBleeding, tileMargin} = tileMeasurements
        
        let translateX = positions[tile.position][1] * 
            (tileWidth + tileBleeding)
            
        let translateY = positions[tile.position][0] *
            (tileHeight + tileBleeding)
            
        let tileStyle = {
            
            margin: tileMargin,
            
            width: tileWidth,
            
            height: tileHeight,
            
            lineHeight: tileHeight + "px",
            
            fontSize: tileHeight,
            
            textAlign: "center",
            
            position: "absolute",
            
            transform: `translate(${translateX}px, ${translateY}px) scale(1)`,
            
            transition: "transform 500ms ease"
        }
        
        let contentStyle = {

            base: {
            
                position: "absolute",
                
                width: "80%",
                
                height: "80%",
                
                left: 0,
                
                right: 0,
                
                margin: "10%",
                
            },
            
            selected: {
                
                //transition: "opacity 50ms ease",
                
                // transition: "opacity 500ms ease",
                
                // borderRadius: "50%",
                
                // backgroundColor: "#F4D03F",
                
            },
            
            marked: {
                
                transition: tile.willMark? "opacity 500ms ease":"none",
                
                borderRadius: "50%",
                
                opacity: tile.willMark? 1 : 0,
                
                backgroundColor: "#66CC99",
                
            },
            
            symbol : {
                
                width: "60%",
                
                height: "60%",
                
                margin: "20%",
                
            }
            
        }
        
        
        
        if (tile.removed) {
            
            //tileStyle.transition = "none"
            
            tileStyle.transform = `translate(${translateX}px, ${translateY}px) scale(0)`

        }
        
        
        // let touchOptions = {
            
        //     touchAction:true,
            
        //     recognizers: {
                
        //         pan: {
                    
        //             threshold: 100,
                    
        //         }
                
        //     }
            
        // }

        return (
            <Hammer vertical={true} onPanEnd={
                (ev) => {
                    if(ev.additionalEvent && canMove) {
                        panEnd(ev.additionalEvent)
                    }

                }
            }>
                <span 
                    style={tileStyle} 
                    // onClick={() => {
                    
                    //     if (canClick) { onClick() }
                        
                    //     }
                    
                    // }
                >
                    <span
                        style={[contentStyle.base]}
                    > </span>
                    <span
                        style={[contentStyle.base, contentStyle.marked]}
                    > </span>
                    <span
                        style={[contentStyle.base, contentStyle.symbol]}
                        className={symbolName}
                    > </span>
                </span>
            </Hammer>
    
        )

    }
)



Tile.PropTypes = {
    
    tile: PropTypes.object.isRequired,
    
    onClick: PropTypes.func.isRequired,
    
    isActive: React.PropTypes.bool.isRequired,
    
    tileMeasurements: PropTypes.object.isRequired,
    
    symbolName: PropTypes.string.isRequired, 
    
    positions: PropTypes.array.isRequired,
    
}

export default Tile