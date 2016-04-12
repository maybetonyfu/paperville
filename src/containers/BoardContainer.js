import { connect } from "react-redux"

import Board from "../components/Board"
import { playerClick, playerMove, transitionEnd } from "../actions"

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
    
    onTileClick: (tileId) => {
      dispatch(playerClick(tileId))
    },
    
    onTransitionEnd: (boardStatus) => {
      dispatch(transitionEnd(boardStatus))
    }
    
  }
}

const BoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)

export default BoardContainer