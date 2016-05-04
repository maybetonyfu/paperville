import React, { PropTypes } from "react"
import Radium from "radium"
import ReactDOM from "react-dom"
import Hammer from "react-hammerjs"

import svgSymbols from "../assets/svg"


const Tile = Radium( prop => {
            
        let { 
            
            tileMeasurements, 
            
            symbolName, 
            
            symbolColor,
            
            positions,
            
            willMark,
            
            removed,
            
            position,
            
            shift,
            
            canMove, 
            
            panEnd,
            
            transitionEnd
            
        } = prop
        
        let { 
            
            tileWidth, 
            
            tileHeight 
            
        } = tileMeasurements
        
        let translateX = positions[position][1] * 
            (tileWidth) + shift
            
        let translateY = positions[position][0] *
            (tileHeight) + shift
            
        let tileStyle = {
            
            width: tileWidth,
            
            height: tileHeight,
            
            lineHeight: tileHeight + "px",
            
            fontSize: tileHeight,
            
            textAlign: "center",
            
            position: "absolute",
            
            transform: `translate(${translateX}px, ${translateY}px) scale(1)`,
            
            transitionProperty: "transform",
            
            transitionDuration: "500ms",
            
            transitionTimingFunction: "ease"
            
        }
        
        let contentStyle = {

            base: {
            
                position: "absolute",
                
                width: "96%",
                
                height: "96%",
                
                left: 0,
                
                right: 0,
                
                margin: "2%",
                
            },
            
            visible: {
                
                background: "#7695BC",
                
                borderRadius: "5%",
                
                background: "black",
                
                opacity: willMark ?  0 : "0.2",
                
                transitionProperty: willMark ? "opacity" : "none",
                
                transitionDuration: "500ms",
                
                transitionTimingFunction: "ease",
                
                // boxShadow: "0 0 2px white, inset 0 0 37px white"
                
            },
            
            symbol : {
                
                width: "70%",
                
                height: "70%",
                
                margin: "15%",
                
                backgroundRepeat: "no-repeat",
                
            }
            
        }
        
        let svgStyle = {

            position: "absolute",
            
            left: "0px",
            
            top: "0px",
            
            fill: symbolColor

        }
        


        
        if (removed) {
            
            tileStyle.transform = `translate(${translateX}px, ${translateY}px) scale(0)`

        }
        

        return (
            <Hammer 
                vertical={true} 
                onTransitionEnd={transitionEnd}
                onPanEnd={
                (ev) => {
                    if(ev.additionalEvent && canMove) {
                        panEnd(ev.additionalEvent)
                    }

                }
            }>
                <span 
                    style={tileStyle}
                    
                >
                    <span
                        style={[contentStyle.base, contentStyle.visible]}
                    > </span>

                    <span
                        style={[contentStyle.base, contentStyle.symbol]}
                    >
                        <svg style={svgStyle} viewBox={svgSymbols[symbolName]["viewBox"]}>
                            <path d={svgSymbols[symbolName]["paths"][0]} />
                        </svg>
                    </span>


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