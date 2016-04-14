import { connect } from "react-redux"

import { willWin, willLose } from "../actions"
import Progress from "../components/Progress"

const mapStateToProps = (state) => {
    
    return {
        
        gameStatus: state.game.status,
        
        progressSizing: state.measurements.progress,
        
        level: state.levels[state.game.currentLevel],
        
        board: state.board
        
    }
    
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        
        onGameWinning: () => {
            
            dispatch(willWin())
            
        },
        
        onGameLosing: () => {
            
            dispatch(willLose())
            
        }
        
    }
    
}

const ProgressContainer = connect(

    mapStateToProps,
    
    mapDispatchToProps
  
)(Progress)

export default ProgressContainer