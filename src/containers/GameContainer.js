import { connect } from "react-redux"
// import { willWin, willLose } from "src/actions/action"
import Game from "../components/Game"

const mapStateToProps = (state) => {
  return {
    game: state.game,
    measurements: state.measurements
  }
}

const GameContainer = connect(
    
  mapStateToProps
  
)(Game)

export default GameContainer