import { connect } from "react-redux"

import Menu from "../components/Menu"

const mapStateToProps = (state) => {
    
    return {
        
        language: state.profile.setting.language
        
    }
    
}



export default connect(
    
    mapStateToProps
    
)(Menu)