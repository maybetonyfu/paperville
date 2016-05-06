import React, { Component, PropTypes }from "react"
import Radium, { Style }from "radium"
import ReactCSSTransitionGroup from "react-addons-css-transition-group"

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
            
            children, 
            
            measurements, 
            
            location : { 

                pathname 

            }
            
        } = this.props

        let AppStyle = {
            
            width: measurements.global.appWidth,
            
            height: measurements.global.appHeight,
            
            margin: "auto",
            
            overflow: "hidden",
            
            backgroundColor: "#303844",
            
            color: "#EFF5f4"
            
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
                    
                        fontFamily: "'Roboto', sans-serif",
                        
                        textAlign: "left",
                        
                        fontSize: "2vh",
                        
                        margin: "2vh"
                        
                    },
                    
                    ".example-enter" : {
                      opacity: "0.01",
                    },
                    
                    ".example-enter.example-enter-active" : {
                      opacity: "1",
                      transition: "opacity 500ms ease-in",
                    },
                    
                    ".example-leave" :{
                      opacity: "1",
                    },
                    
                    ".example-leave.example-leave-active" : {
                      opacity: "0.01",
                      transition: "opacity 300ms ease-in",
                    }
                    
                }} />
                <ReactCSSTransitionGroup
                    transitionName="example" 
                    transitionEnterTimeout={500} 
                    transitionLeaveTimeout={300}>
                    
                {React.cloneElement(children || <Menu/>, {
                    key: pathname
                 })}
                </ReactCSSTransitionGroup>

            </div>
            
        )
        
    }
    
}

App.PropTypes = {
    
    measurements: PropTypes.object.isRequired
    
}

export default Radium(App)