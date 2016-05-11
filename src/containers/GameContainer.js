import { connect } from "react-redux"

import Game from "../components/Game"
import { createBoard, gameStart, showMenu, hideMenu } from "../actions"

const mapStateToProps = (state) => {
  
    return {
    
        game: state.game,
        
        measurements: state.measurements,
        
        levels: state.levels,
        
        setting: state.profile.setting
        
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
            
        },
        
        showMenu: () => {
            
            dispatch(showMenu())
            
        },
        
        hideMenu: () => {
            
            dispatch(hideMenu())
            
        },
    
    }
  
}

const GameContainer = connect(
    
    mapStateToProps,
    
    mapDispatchToProps
  
)(Game)

export default GameContainer