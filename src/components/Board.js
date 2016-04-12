import React, { Component, PropTypes } from "react"
// import { Link } from "react-router"
import Link from 'react-router/lib/Link'
import Radium from 'radium'

import Tile from "./Tile"

let eventAccumulator = 0


class Board extends Component {
    
    constructor(props) {

        super(props)

    }
    
    transitionEndHandle (e) {
        
        e.preventDefault()

        e.stopPropagation()
        
        if (this.props.board.status === "DID_MARK" && this.props.setting.vibrator) {
            
            window.navigator.vibrate(500)
        }
        
        if (this.props.board.status === "WAIT_PLAYER_MOVE") return
        
        eventAccumulator ++ 
        
        if (eventAccumulator !== this.props.board.dispatchAwait) return

        eventAccumulator = 0 
        
        this.props.onTransitionEnd(this.props.board.status)
        
    }
    
    componentWillMount () {
        
        if (this.boardNode) {
            
            this.boardNode.removeEventListener(
                
                "transitionend", 
                
                this.transitionEndHandle.bind(this),
                
                false
            )
            
        }
    }
    
    componentDidMount () {
        
        if (this.boardNode) {
            
            this.boardNode.addEventListener(
                
                "transitionend", 
                
                this.transitionEndHandle.bind(this),
                
                false
            )
            
        }
    }
    
    render() {
        
    let { 
        board,
        
        level,
        
        measurements, 
        
        onTileClick,
        
        setting
        
    } = this.props
    
    let BoardStyle = {
        
        width: measurements.board.boardWidth,
        
        height: measurements.board.boardWidth
        
    }
    


    return (
        
    <div style={BoardStyle} ref={node => { this.boardNode = node }}>
    
        {
            Object.values(board.tiles).map(tile => {
        
            return <Tile 
                key={tile.id}
                tile={tile}
                canClick={board.status==="WAIT_PLAYER_MOVE"}
                symbolName={level.groupMap[tile.value]}
                positions={board.positions}
                tileMeasurements={measurements.tile}
                isActive={board.activeTiles.indexOf(tile.id) > -1}
                onClick={() => {
                
                        if (board.activeTiles.length === 1) {
                        
                            let posA = board.tiles[board.activeTiles[0]].position
                            
                            let posB = tile.position
                            
                            let sameRow = (Math.abs(posA - posB) === 1) &&
                            (Math.floor(posA/board.cols) === Math.floor(posB/board.cols))
        
                            let sameCol = Math.abs(posA - posB) === board.cols
                            
                            if (sameCol || sameRow || setting.developer) {
                                
                                return onTileClick(tile.id)
                            }

                            return onTileClick("ILLEGAL_MOVE")

                        }
                        
                        return onTileClick(tile.id)
                        
                    }
                }
                />
                
            })
            
        }
        
    </div>
    
    )
}

}


Board.PropTypes = {
    
    board: PropTypes.object.isRequired,
    
    level: PropTypes.object.isRequired,
    
    measurements: PropTypes.object.isRequired,
    
    onTileClick: PropTypes.func.isRequired,
    
    onTransitionEnd: PropTypes.func.isRequired
    
}


export default Radium(Board)