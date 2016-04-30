import React, { Component, PropTypes }from 'react'
import Radium, { Style }from 'radium'

import Nav from "./Nav"

class App extends Component {
    
    constructor(props) {
        
        super(props)
        
    }
    
    componentWillMount () {
        
        let appHeight = document.documentElement.clientHeight
        
        let appWidth = (document.documentElement.clientWidth > appHeight) ? 
        
            0.6 * appHeight : document.documentElement.clientWidth
        
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
            
            <div onTouchMove={
                    (e) => {
                        // To stop stupid iOS browser rubber-band scrolling
                        e.preventDefault()
                    }
                } 
                style={AppStyle}
            >
            
                <Style rules={{
                
                    "body, html": {
                    
                        margin: 0,
                        
                        fontFamily: "'BenchNine', sans-serif",
                        
                        fontStyle: "bold"
                        
                    },
                    
                    "p" : {
                    
                        fontFamily: "'BenchNine', sans-serif",
                        
                        textAlign: "left",
                        
                        fontSize: "2vh",
                        
                        margin: "2vh"
                        
                    }
                    
                }} />

                { children || <Menu/> }

            </div>
            
        )
        
    }
    
}

App.PropTypes = {
    
    measurements: PropTypes.object.isRequired
    
}

export default Radium(App)