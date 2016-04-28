import { connect } from "react-redux"
import Game from "../components/Game"
import { createBoard, gameStart } from "../actions"

const mapStateToProps = (state) => {
  
    return {
    
        game: state.game,
        
        measurements: state.measurements,
        
        levels: state.levels
        
    }
    
}

const mapDispatchToProps = (dispatch) => {
  
    return {
    
        onNextLevel: (boardConfig, levelIndex) => {
      
            dispatch(createBoard(boardConfig, levelIndex))
      
        },
        
        onRetryLevel: (boardConfig, levelIndex) => {
      
            dispatch(createBoard(boardConfig, levelIndex))
      
        },
        
        onGameStart: () => {
            
            dispatch(gameStart())
            
        }
    
    }
  
}

const GameContainer = connect(
    
    mapStateToProps,
    
    mapDispatchToProps
  
)(Game)

export default GameContainer