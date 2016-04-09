import React, { Component, PropTypes }from 'react'
import Radium, { Style }from 'radium'

import Nav from "./Nav"

class App extends Component {
    
    constructor(props) {
        
        super(props)
        
    }
    
    componentWillMount () {
        
        let appHeight = document.documentElement.clientHeight
        
        let appWidth = (document.documentElement.clientWidth > appHeight) ? 0.6 * appHeight : document.documentElement.clientWidth
        
        this.props.onGameStart({appHeight, appWidth})
        
    }

    render() {
        
        let {
            
            children, measurements
            
        } = this.props

        let AppStyle = {
            
            width: measurements.global.appWidth,
            
            height: measurements.global.appHeight,
            
            margin: "auto",
            
            overflow: "hidden",
            
            backgroundColor: "#ECECEC"
            
        }

        return (
            
            <div style={AppStyle}>
            
                <Style rules={{
                    "body, html": {
                        margin: 0,
                        fontFamily: "'Amatic SC', cursive",
                        fontStyle: "bold"
                    }
                }} />
                
                <Nav navHeight={measurements.global.navHeight} />
                
                { children || <Menu/> }
            </div>
            
        )
        
    }
    
}

App.PropTypes = {
    
    measurements: PropTypes.object.isRequired
    
}

export default Radium(App)