import React, { PropTypes } from "react"
import Radium from "radium"

import Tile from "./Tile"

let eventAccumulator = 0

const Board = Radium( prop => {
    
    let { 
        board,
        
        level,
        
        measurements,
        
        onBoardMoveEnd,
        
        onPlayerPan,
        
        setting
        
    } = prop
    
    let BoardStyle = {
        
        margin: measurements.board.boardMargin,
        
        width: measurements.board.boardWidth,
        
        height: measurements.board.boardHeight,
        
        borderStyle : "solid",
        
        transitionProperty: "border-color",
                
        transitionDuration: "500ms",
                
        transitionTimingFunction: "ease",
        
        borderWidth: measurements.board.borderWidth + "px",
        
        borderColor: board.status === "WAIT_PLAYER_MOVE" ? "#8DE7C6" : "#F2784B",
        
        boxSizing: "border-box",
        
        borderRadius: "5px",
        
    }
    
    return (
        
    <div style={BoardStyle}>
    
        {
        
            Object.values(board.tiles).map(tile => {
        
            return <Tile 
                key={tile.id}
                willMark={tile.willMark}
                removed={tile.removed}
                position={tile.position}
                canMove={board.status==="WAIT_PLAYER_MOVE"}
                shift={measurements.tile.tileShift}
                symbolName={level.groupMap[tile.value]["name"]}
                symbolColor={level.groupMap[tile.value]["color"]}
                positions={board.positions}
                tileMeasurements={measurements.tile}
                panEnd={
                    (direction) => {
                        onPlayerPan(tile.id, direction)
                    }
                }
                transitionEnd={() => {
                    
                        if (board.status === "DID_MARK" && setting.vibrator) {
                            
                            window.navigator.vibrate(500)
                        }
                        
                        eventAccumulator ++ 
                        
                        if (eventAccumulator !== board.dispatchAwait) return
                
                        eventAccumulator = 0 
                        
                        onBoardMoveEnd(board.status)
                    }
                    
                }
                />
                
            })
            
        }
        
    </div>
    
    )
    
    
})


Board.PropTypes = {
    
    board: PropTypes.object.isRequired,
    
    level: PropTypes.object.isRequired,
    
    measurements: PropTypes.object.isRequired,
    
    onTileClick: PropTypes.func.isRequired,
    
    onTransitionEnd: PropTypes.func.isRequired
    
}


export default Radium(Board)