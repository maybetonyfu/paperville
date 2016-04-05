import { connect } from "react-redux"

import { gameInit } from "../actions"
import App from "../components/App"

const mapStateToProps = (state) => {
    
    return {
        
        measurements: state.measurements
        
    }
    
}

const mapDispatchToProps = (dispatch) => {
    
  return {
      
    onGameStart: (measure) => {
        
        dispatch(gameInit(measure))
        
    }
    
  }
  
}


export default connect(
    
    mapStateToProps, 
    
    mapDispatchToProps
    
)(App)