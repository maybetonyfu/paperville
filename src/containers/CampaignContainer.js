import { connect } from "react-redux"

import Campaign from "../components/Campaign"
import { createBoard } from "../actions"


const mapStateToProps = (state) => {
  return {
    levels: state.levels,
    measurements: state.measurements
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLevelClick: (boardConfig, levelId) => {
      dispatch(createBoard(boardConfig, levelId))
    }
  }
}

const CampaignContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Campaign)

export default CampaignContainer