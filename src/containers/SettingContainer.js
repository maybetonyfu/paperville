import { connect } from "react-redux"

import { changeSetting } from "../actions"

import Setting from "../components/Setting"

const mapStateToProps = (state) => {
    
    return {
        
        profile: state.profile
        
    }
    
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        onChangeSetting : (key, value) => {
            dispatch(changeSetting(key, value))
        }
    }
    
}

const SettingContainer = connect(

  mapStateToProps,
  
  mapDispatchToProps
  
)(Setting)

export default SettingContainer