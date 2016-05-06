import { connect } from "react-redux"

import Board from "../components/Board"
import { playerPan, transitionEnd } from "../actions"

const mapStateToProps = (state) => {
    
    return {
        
        board: state.board,
        
        setting: state.profile.setting,
        
        level: state.levels[state.game.currentLevel],
        
        measurements: state.measurements
        
    }
    
}

const mapDispatchToProps = (dispatch) => {
    
    return {
    
        onPlayerPan: (tileId, direction) => {
            
            dispatch(playerPan(tileId, direction))
            
        },
        
        onBoardMoveEnd: (boardStatus) => {
            
            dispatch(transitionEnd(boardStatus))
            
        }
    
    }
    
}

const BoardContainer = connect(
    
    mapStateToProps,
    
    mapDispatchToProps
    
)(Board)

export default BoardContainer