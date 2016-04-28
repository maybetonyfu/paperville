import { connect } from "react-redux"

import Campaign from "../components/Campaign"
import { createBoard } from "../actions"


const mapStateToProps = (state) => {
  
    return {
    
        levels: state.levels,
        
        profile: state.profile,
        
        measurements: state.measurements
    
    }
  
}

const mapDispatchToProps = (dispatch) => {
  
    return {
    
        onLevelClick: (boardConfig, levelIndex) => {
          
            dispatch(createBoard(boardConfig, levelIndex))
          
        }
    
    }
  
}

const CampaignContainer = connect(
    
    mapStateToProps,
    
    mapDispatchToProps
    
)(Campaign)

export default CampaignContainer